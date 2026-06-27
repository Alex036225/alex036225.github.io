(function () {
  var root = document.querySelector(".ask-bo");
  if (!root) return;

  var toggle = root.querySelector(".ask-bo__toggle");
  var panel = root.querySelector(".ask-bo__panel");
  var closeButton = root.querySelector(".ask-bo__close");
  var form = root.querySelector(".ask-bo__form");
  var input = root.querySelector(".ask-bo__input");
  var messages = root.querySelector(".ask-bo__messages");
  var sendButton = root.querySelector(".ask-bo__send");
  var history = [];

  function getEndpoint() {
    var configured = root.getAttribute("data-endpoint");
    if (configured) return configured;
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
      return "http://127.0.0.1:8790/api/chat";
    }
    return "";
  }

  function appendMessage(role, text) {
    var message = document.createElement("div");
    message.className = "ask-bo__message ask-bo__message--" + role;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  function setOpen(isOpen) {
    panel.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
    root.classList.toggle("ask-bo--open", isOpen);
    if (isOpen) {
      window.setTimeout(function () { input.focus(); }, 80);
    }
  }

  function setBusy(isBusy) {
    input.disabled = isBusy;
    sendButton.disabled = isBusy;
    root.classList.toggle("ask-bo--busy", isBusy);
  }

  toggle.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  closeButton.addEventListener("click", function () {
    setOpen(false);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var endpoint = getEndpoint();
    var text = input.value.trim();
    if (!text) return;

    appendMessage("user", text);
    input.value = "";

    if (!endpoint) {
      appendMessage("assistant", "The AI endpoint is not configured for this deployment yet.");
      return;
    }

    history.push({ role: "user", content: text });
    setBusy(true);
    var pending = appendMessage("assistant", "Thinking...");

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-8) })
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        var answer = data && data.answer ? String(data.answer) : "I could not generate an answer.";
        pending.textContent = answer;
        history.push({ role: "assistant", content: answer });
      })
      .catch(function () {
        pending.textContent = "I cannot reach the AI service right now. If you are running locally, start the DeepSeek proxy first.";
      })
      .finally(function () {
        setBusy(false);
      });
  });
})();
