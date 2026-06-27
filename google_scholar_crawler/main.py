import json
import os
from datetime import datetime, timezone
from urllib.parse import parse_qs, urljoin, urlparse

import requests
from bs4 import BeautifulSoup


SCHOLAR_ID = os.environ["GOOGLE_SCHOLAR_ID"]
SCHOLAR_URL = "https://scholar.google.com/citations"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/126.0 Safari/537.36"
    )
}


def to_int(value):
    digits = "".join(ch for ch in str(value or "") if ch.isdigit())
    return int(digits) if digits else 0


def get_citation_for_view(href):
    query = parse_qs(urlparse(href).query)
    values = query.get("citation_for_view")
    return values[0] if values else None


def fetch_profile():
    response = requests.get(
        SCHOLAR_URL,
        params={"user": SCHOLAR_ID, "hl": "en", "cstart": 0, "pagesize": 100},
        headers=HEADERS,
        timeout=30,
    )
    response.raise_for_status()
    if "gsc_a_tr" not in response.text and "gsc_rsb_st" not in response.text:
        raise RuntimeError("Google Scholar profile markup was not found.")
    return BeautifulSoup(response.text, "html.parser")


def parse_indices(soup):
    stats = [to_int(cell.get_text(" ", strip=True)) for cell in soup.select(".gsc_rsb_std")]
    return {
        "citedby": stats[0] if len(stats) > 0 else 0,
        "hindex": stats[2] if len(stats) > 2 else 0,
        "i10index": stats[4] if len(stats) > 4 else 0,
    }


def parse_publications(soup):
    publications = {}
    for index, row in enumerate(soup.select("tr.gsc_a_tr")):
        title_link = row.select_one("a.gsc_a_at")
        if not title_link:
            continue

        title = title_link.get_text(" ", strip=True)
        grays = [node.get_text(" ", strip=True) for node in row.select(".gs_gray")]
        author_pub_id = get_citation_for_view(title_link.get("href", "")) or f"{SCHOLAR_ID}:paper_{index}"
        year = row.select_one(".gsc_a_y span")
        citation_link = row.select_one(".gsc_a_ac")

        publications[author_pub_id] = {
            "author_pub_id": author_pub_id,
            "num_citations": to_int(citation_link.get_text(" ", strip=True) if citation_link else ""),
            "pub_url": urljoin(SCHOLAR_URL, title_link.get("href", "")),
            "bib": {
                "title": title,
                "author": grays[0] if len(grays) > 0 else "",
                "venue": grays[1] if len(grays) > 1 else "",
                "pub_year": year.get_text(" ", strip=True) if year else "",
            },
        }
    return publications


def main():
    soup = fetch_profile()
    indices = parse_indices(soup)
    author = {
        "name": soup.select_one("#gsc_prf_in").get_text(" ", strip=True) if soup.select_one("#gsc_prf_in") else "Bo Zhao",
        "scholar_id": SCHOLAR_ID,
        "updated": datetime.now(timezone.utc).isoformat(),
        **indices,
        "publications": parse_publications(soup),
    }

    os.makedirs("results", exist_ok=True)
    with open("results/gs_data.json", "w", encoding="utf-8") as outfile:
        json.dump(author, outfile, ensure_ascii=False)

    shieldio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": f"{author['citedby']}",
    }
    with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as outfile:
        json.dump(shieldio_data, outfile, ensure_ascii=False)


if __name__ == "__main__":
    main()
