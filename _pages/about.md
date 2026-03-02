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

**Research Interests:** Remote physiological signal sensing (rPPG), MLLMs, Agentic Memory.

**Paper Submissions:** Multiple papers submitted to top-tier conferences and journals including ICLR, CVPR, IJCV, JBHI, etc.

# 🔥 News
- *2026.02*: &nbsp;🎉🎉 Two papers accepted by CVPR 2026
- *2026.01*: &nbsp;🎉🎉 One paper accepted by ICLR 2026
- *2025.10*: &nbsp;Started internship at Tencent Technology (Shenzhen) Co., Ltd., Hunyuan Multimodal Model Department
- *2025.09*: &nbsp;Enrolled in The Chinese University of Hong Kong, Shenzhen for Master's degree in Artificial Intelligence and Robotics

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/paper/PHASE-NET.png' alt="PHASE-Net" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PHASE-Net: Physics-Grounded Harmonic Attention System for Efficient Remote Photoplethysmography Measurement](https://arxiv.org/pdf/2509.24850)

**Bo Zhao**, Dan Guo, Junzhe Cao, Yong Xu, Bochao Zou, Tao Tan, Yue Sun, Zitong YU<sup>†</sup>

*CVPR (CCF Class A Conference)*
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/paper/FLOW.png' alt="FLOW" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FLOW: Feature-Level Optimal Warping for Generalized Remote Physiological Measurement](https://arxiv.org/abs/XXXX)

**Bo Zhao**, Junzhe Cao, Dan Guo, Dongmin Huang, Wenjin Wang, Tao Tan, Yue Sun, Zitong YU<sup>†</sup>

*CVPR (CCF Class A Conference)*
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/paper/PhysLLM.png' alt="PhysLLM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PhysLLM: Harnessing Large Language Models for Cross-Modal Remote Physiological Sensing](https://arxiv.org/abs/2505.03621)

Yiping Xie<sup>*</sup>, **Bo Zhao**<sup>*</sup>, Mingtong Dai, Jian-Ping Zhou, Yue Sun, Tao Tan, Weicheng Xie, Linlin Shen, Zitong YU<sup>†</sup>

*ICLR (CCF Class A Conference)*
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCBR 2025</div><img src='images/paper/AULLM.png' alt="AU-LLM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AU-LLM: Micro-Expression Action Unit Detection via Enhanced LLM-Based Feature](https://arxiv.org/abs/2507.21778)

Zhishu Liu, Kaishen Yuan, **Bo Zhao**, Yong Xu, Zitong Yu<sup>†</sup>

*CCBR Oral*
</div>
</div>

# 📄 Preprints

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/paper/Complementarity-Supervised.png' alt="Complementarity-Supervised Spectral-Band Routing" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Complementarity-Supervised Spectral-Band Routing for Multimodal Emotion Recognition**

Zhexian Huang, **Bo Zhao**<sup>*</sup>, Hui Ma, Zhishu Liu, Jie Zhang, Ruixin Zhang, Shouhong Ding, Zitong YU<sup>†</sup>

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">JBHI 2025</div><img src='images/paper/CardiacMamba.png' alt="CardiacMamba" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CardiacMamba: A Multimodal RGB-RF Fusion Framework with State Space Models for Remote Physiological Measurement](https://arxiv.org/abs/2502.13624)

**Co-first author**

*JBHI (Tsinghua Class B, CCF C, JCR Q1, Impact Factor 7.2)*

- We propose CardiacMamba, a multimodal framework that fuses RGB video and RF sensor data for accurate rPPG heart rate estimation. We innovatively introduce Temporal Difference Mamba Module (TDMM) and Bifurcated Difference Convolution Fusion (BDCF) for dual-layer feature extraction and alignment, achieving collaborative modeling of RGB and RF modalities through Bidirectional State Space Model (Bi-SSM). We design Channel-wise Fast Fourier Transform (CFFT) for bidirectional feature fusion, demonstrating state-of-the-art performance on the EquiPleth dataset and significantly mitigating skin tone bias issues.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCV 2025</div><img src='images/paper/Intervention.png' alt="Intervention-Based SSL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Intervention-Based Self-Supervised Learning: A Causal Probe Paradigm for Remote Photoplethysmography](https://arxiv.org/abs/XXXX)

**Second author**

*IJCV (CCF Class A Journal, Impact Factor 19.5) - Under Review*

- Intervention-based self-supervised learning method using a causal probe paradigm for remote photoplethysmography research.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='images/paper/script.png' alt="ACL 2026" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**The Script is All You Need: An Agentic Framework for Long-Horizon Dialogue-to-Cinematic Video Generation**

Chenyu Mu, Xin He, Qu Yang, Wanshun CHEN, Jiadi Yao, Huang Liu, Zihao Yi, **Bo Zhao**, Xingyu Chen, Ruotian Ma, Fanghua Ye, Erkun Yang, Cheng Deng, Zhaopeng Tu, Xiaolong Li, Linus
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/paper/Unsupervised Camouflaged Object Detection.png' alt="ICML 2026" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Unsupervised Camouflaged Object Detection with Dual-Eigenvector Spectral Pseudo-Labeling and Contrastive Refinement**

Pingzhu Liu, Chunming He, Zunnan Xu, Chao Hao, **Bo Zhao**, Xingyu Shao, Jun Zhou, Zitong YU, Xiu Li
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/paper/Think Fast and Slow.png' alt="ICML 2026" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Think Fast and Slow: Step-Level Cognitive Depth Adaptation for LLM Agents**

Ruihan Yang, Fanghua Ye, Xiang Wei, Ruoqing Zhao, Kang Luo, Xinbo Xu, **Bo Zhao**, Ruotian Ma, Shanyi Wang, Zhaopeng Tu, Xiaolong Li, Deqing Yang, Linus
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2026</div><img src='images/paper/PhysNeXt.png' alt="PhysNeXt" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**PhysNeXt: Next-Generation Dual-Branch Structured Attention Fusion Network for Remote Photoplethysmography Estimation**

Junzhe Cao<sup>*</sup>, **Bo Zhao**<sup>*</sup>, Zhiyi Niu, Dan Guo, Yue Sun, Hui Ma, Yong Xu<sup>†</sup>, Zitong Yu<sup>†</sup>

</div>
</div>

# 🎓 Educations
- <span class="edu-logo"><img src="images/香港中文大学(深圳).png" alt="The Chinese University of Hong Kong, Shenzhen"></span><span class="edu-text"><strong>The Chinese University of Hong Kong, Shenzhen</strong>, 2025.09 - 2027.06 (expected)<br>Master's Student in Artificial Intelligence and Robotics</span>
- <span class="edu-logo"><img src="images/山东大学.png" alt="Shandong University"></span><span class="edu-text"><strong>Shandong University</strong>, 2021.09 - 2025.06<br>Bachelor's Degree in Mathematics and Applied Mathematics</span>

# 💼 Internships
- <span class="edu-logo edu-logo--intern"><img src="images/Tencent.avif" alt="Tencent"></span><span class="edu-text"><em>2025.10 - Present</em>, <strong>Intern</strong>, Tencent Hunyuan Multimodal Model Department, Tencent Technology (Shenzhen) Co., Ltd.</span>
  - **Business Direction:** Leading game NPC memory project, extracting memory-related content from raw data, constructing LLM-required formats, training 32B memory model
  - **Research Direction:** Researching game visual-language-action (VLA) models

# 🎖 Honors and Awards
- *2022-2024*: Academic Scholarship for three consecutive years (2022-2024)

# 📜 Patents
- Time Series Analysis Model Training Method, Time Series Analysis Method and Related Devices (Invention Patent)
- Time-Frequency Large Language Model-Based Framework for Enhanced Time Series Methods (Invention Patent)
- Robust Remote Physiological Signal Sensing Based on Optimal Transport Theory (Invention Patent)
- Micro-Expression Facial Action Unit Detection Based on Large Language Models and Feature Fusion (Invention Patent)
