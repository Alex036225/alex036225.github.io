---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Welcome to my academic homepage! I am currently a Master's student in Artificial Intelligence and Robotics at The Chinese University of Hong Kong, Shenzhen (expected graduation in 2027). Since December 2024, supervised by Prof. [Zitong Yu](https://zitong-yu.github.io/yzt/). My research interests focus on remote physiological signal sensing (rPPG), MLLMs, and Agentic Memory.

<span class='anchor' id='news'></span>

# News
- *2026.04*: &nbsp;🎉🎉 One CVPR 2026 paper was selected as Highlight
- *2026.02*: &nbsp;🎉🎉 Two papers accepted by CVPR 2026
- *2026.01*: &nbsp;🎉🎉 One paper accepted by ICLR 2026
- *2025.10*: &nbsp;Started internship at Tencent Technology (Shenzhen) Co., Ltd., Hunyuan Multimodal Model Department
- *2025.09*: &nbsp;Enrolled in The Chinese University of Hong Kong, Shenzhen for Master's degree in Artificial Intelligence and Robotics

<span class='anchor' id='selected-publications'></span>

# Selected Publications

<div class='paper-box'><div class='paper-box-image'><div><img src="{{ '/images/paper/PHASE-NET.png' | relative_url }}" alt="PHASE-Net" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**PHASE-Net: Physics-Grounded Harmonic Attention System for Efficient Remote Photoplethysmography Measurement**

<div class="pub-tags"><span class="pub-tag">CVPR 2026</span> <span class="pub-tag pub-tag--status pub-tag--highlight">Highlight</span></div>

**Bo Zhao**, Dan Guo, Junzhe Cao, Yong Xu, Bochao Zou, Tao Tan, Yue Sun, Zitong YU<sup>†</sup>

<a class="paper-link" href="https://arxiv.org/pdf/2509.24850" target="_blank" rel="noopener" aria-label="Paper link"><i class="fas fa-file-pdf" aria-hidden="true"></i></a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src="{{ '/images/paper/PhysLLM.png' | relative_url }}" alt="PhysLLM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**PhysLLM: Harnessing Large Language Models for Cross-Modal Remote Physiological Sensing**

<div class="pub-tags"><span class="pub-tag">ICLR 2026</span></div>

Yiping Xie<sup>*</sup>, **Bo Zhao**<sup>*</sup>, Mingtong Dai, Jian-Ping Zhou, Yue Sun, Tao Tan, Weicheng Xie, Linlin Shen, Zitong YU<sup>†</sup>

<a class="paper-link" href="https://arxiv.org/abs/2505.03621" target="_blank" rel="noopener" aria-label="Paper link"><i class="fas fa-file-pdf" aria-hidden="true"></i></a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src="{{ '/images/paper/FLOW.png' | relative_url }}" alt="FLOW" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**FLOW: Feature-Level Optimal Warping for Generalized Remote Physiological Measurement**

<div class="pub-tags"><span class="pub-tag">CVPR 2026</span></div>

**Bo Zhao**, Junzhe Cao, Dan Guo, Dongmin Huang, Wenjin Wang, Tao Tan, Yue Sun, Zitong YU<sup>†</sup>

<a class="paper-link" href="https://arxiv.org/abs/XXXX" target="_blank" rel="noopener" aria-label="Paper link"><i class="fas fa-file-pdf" aria-hidden="true"></i></a>

</div>
</div>

<span class='anchor' id='educations'></span>

# Educations
<div class="profile-section profile-section--timeline">
  <div class="profile-card timeline-item">
    <div class="experience-item">
      <img src="{{ '/images/香港中文大学(深圳).png' | relative_url }}" alt="The Chinese University of Hong Kong, Shenzhen" class="institution-logo">
      <div class="experience-content">
        <p class="exp-title"><strong>The Chinese University of Hong Kong, Shenzhen</strong></p>
        <p class="exp-detail">Master's Student in Artificial Intelligence and Robotics</p>
        <p class="exp-period">2025.09 - 2027.06 (expected)</p>
      </div>
    </div>
  </div>

  <div class="profile-card timeline-item">
    <div class="experience-item">
      <img src="{{ '/images/山东大学.png' | relative_url }}" alt="Shandong University" class="institution-logo">
      <div class="experience-content">
        <p class="exp-title"><strong>Shandong University</strong></p>
        <p class="exp-detail">Bachelor's Degree in Mathematics and Applied Mathematics</p>
        <p class="exp-period">2021.09 - 2025.06</p>
      </div>
    </div>
  </div>
</div>

<span class='anchor' id='internships'></span>

# Internships
<div class="profile-section">
  <div class="profile-card">
    <div class="experience-item">
      <img src="{{ '/images/Tencent.avif' | relative_url }}" alt="Tencent" class="institution-logo">
      <div class="experience-content">
        <p class="exp-title"><strong>Tencent Technology (Shenzhen) Co., Ltd.</strong></p>
        <p class="exp-detail">Intern, Hunyuan Multimodal Model Department</p>
        <p class="exp-period">2025.10 - 2026.3</p>
        <ul class="exp-highlights">
          <li><strong>Business Direction:</strong> Leading game NPC memory project, extracting memory-related content from raw data, constructing LLM-required formats, training 32B memory model.</li>
          <li><strong>Research Direction:</strong> Researching game visual-language-action (VLA) models.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<span class='anchor' id='honors-and-awards'></span>

# Honors and Awards
- *2022-2024*: Academic Scholarship for three consecutive years (2022-2024)

# Patents
- Time Series Analysis Model Training Method, Time Series Analysis Method and Related Devices (Invention Patent)
- Time-Frequency Large Language Model-Based Framework for Enhanced Time Series Methods (Invention Patent)
- Robust Remote Physiological Signal Sensing Based on Optimal Transport Theory (Invention Patent)
- Micro-Expression Facial Action Unit Detection Based on Large Language Models and Feature Fusion (Invention Patent)
