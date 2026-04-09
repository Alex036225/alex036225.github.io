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

<a href="/CV.pdf" target="_blank" rel="noopener" style="font-weight: 700; font-family: 'SimHei', 'Microsoft YaHei', 'PingFang SC', sans-serif;">Download my CV</a>

# 🔥 News
- *2026.04*: &nbsp;🎉🎉 One CVPR 2026 paper was selected as Highlight
- *2026.02*: &nbsp;🎉🎉 Two papers accepted by CVPR 2026
- *2026.01*: &nbsp;🎉🎉 One paper accepted by ICLR 2026
- *2025.10*: &nbsp;Started internship at Tencent Technology (Shenzhen) Co., Ltd., Hunyuan Multimodal Model Department
- *2025.09*: &nbsp;Enrolled in The Chinese University of Hong Kong, Shenzhen for Master's degree in Artificial Intelligence and Robotics

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/PHASE-NET.png' alt="PHASE-Net" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PHASE-Net: Physics-Grounded Harmonic Attention System for Efficient Remote Photoplethysmography Measurement](https://arxiv.org/pdf/2509.24850)

<div class="pub-tags"><span class="pub-tag">CVPR 2026</span><span class="pub-tag pub-tag--status pub-tag--highlight">Highlight</span></div>

**Bo Zhao**, Dan Guo, Junzhe Cao, Yong Xu, Bochao Zou, Tao Tan, Yue Sun, Zitong YU<sup>†</sup>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/FLOW.png' alt="FLOW" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FLOW: Feature-Level Optimal Warping for Generalized Remote Physiological Measurement](https://arxiv.org/abs/XXXX)

<div class="pub-tags"><span class="pub-tag">CVPR 2026</span></div>

**Bo Zhao**, Junzhe Cao, Dan Guo, Dongmin Huang, Wenjin Wang, Tao Tan, Yue Sun, Zitong YU<sup>†</sup>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/PhysLLM.png' alt="PhysLLM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PhysLLM: Harnessing Large Language Models for Cross-Modal Remote Physiological Sensing](https://arxiv.org/abs/2505.03621)

<div class="pub-tags"><span class="pub-tag">ICLR 2026</span></div>

Yiping Xie<sup>*</sup>, **Bo Zhao**<sup>*</sup>, Mingtong Dai, Jian-Ping Zhou, Yue Sun, Tao Tan, Weicheng Xie, Linlin Shen, Zitong YU<sup>†</sup>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/AULLM.png' alt="AU-LLM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AU-LLM: Micro-Expression Action Unit Detection via Enhanced LLM-Based Feature](https://arxiv.org/abs/2507.21778)

<div class="pub-tags"><span class="pub-tag">CCBR 2025</span><span class="pub-tag pub-tag--status pub-tag--oral">Oral</span></div>

Zhishu Liu, Kaishen Yuan, **Bo Zhao**, Yong Xu, Zitong Yu<sup>†</sup>

</div>
</div>

# 📄 Preprints

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/CardiacMamba.png' alt="CardiacMamba" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CardiacMamba: A Multimodal RGB-RF Fusion Framework with State Space Models for Remote Physiological Measurement](https://arxiv.org/abs/2502.13624)

<div class="pub-tags"><span class="pub-tag">JBHI 2025</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

**Co-first author**

- We propose CardiacMamba, a multimodal framework that fuses RGB video and RF sensor data for accurate rPPG heart rate estimation. We innovatively introduce Temporal Difference Mamba Module (TDMM) and Bifurcated Difference Convolution Fusion (BDCF) for dual-layer feature extraction and alignment, achieving collaborative modeling of RGB and RF modalities through Bidirectional State Space Model (Bi-SSM). We design Channel-wise Fast Fourier Transform (CFFT) for bidirectional feature fusion, demonstrating state-of-the-art performance on the EquiPleth dataset and significantly mitigating skin tone bias issues.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/Intervention.png' alt="Intervention-Based SSL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Intervention-Based Self-Supervised Learning: A Causal Probe Paradigm for Remote Photoplethysmography](https://arxiv.org/abs/XXXX)

<div class="pub-tags"><span class="pub-tag">IJCV 2025</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

**Second author**

- Intervention-based self-supervised learning method using a causal probe paradigm for remote photoplethysmography research.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/script.png' alt="ACL 2026" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[The Script is All You Need: An Agentic Framework for Long-Horizon Dialogue-to-Cinematic Video Generation](https://arxiv.org/abs/2601.17737)

<div class="pub-tags"><span class="pub-tag">ACL 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Chenyu Mu, Xin He, Qu Yang, Wanshun CHEN, Jiadi Yao, Huang Liu, Zihao Yi, **Bo Zhao**, Xingyu Chen, Ruotian Ma, Fanghua Ye, Erkun Yang, Cheng Deng, Zhaopeng Tu, Xiaolong Li, Linus
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/Unsupervised Camouflaged Object Detection.png' alt="ICML 2026" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Unsupervised Camouflaged Object Detection with Dual-Eigenvector Spectral Pseudo-Labeling and Contrastive Refinement**

<div class="pub-tags"><span class="pub-tag">ICML 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Pingzhu Liu, Chunming He, Zunnan Xu, Chao Hao, **Bo Zhao**, Xingyu Shao, Jun Zhou, Zitong YU, Xiu Li
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/Think Fast and Slow.png' alt="ICML 2026" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Think Fast and Slow: Step-Level Cognitive Depth Adaptation for LLM Agents](https://arxiv.org/abs/2602.12662)

<div class="pub-tags"><span class="pub-tag">ICML 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Ruihan Yang, Fanghua Ye, Xiang Wei, Ruoqing Zhao, Kang Luo, Xinbo Xu, **Bo Zhao**, Ruotian Ma, Shanyi Wang, Zhaopeng Tu, Xiaolong Li, Deqing Yang, Linus
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/PhysNeXt.png' alt="PhysNeXt" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PhysNeXt: Next-Generation Dual-Branch Structured Attention Fusion Network for Remote Photoplethysmography Estimation](https://arxiv.org/abs/2603.19752)

<div class="pub-tags"><span class="pub-tag">ECCV 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Junzhe Cao<sup>*</sup>, **Bo Zhao**<sup>*</sup>, Zhiyi Niu, Dan Guo, Yue Sun, Hui Ma, Yong Xu<sup>†</sup>, Zitong Yu<sup>†</sup>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/Complementarity-Supervised.png' alt="Complementarity-Supervised Spectral-Band Routing" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Complementarity-Supervised Spectral-Band Routing for Multimodal Emotion Recognition](https://arxiv.org/pdf/2603.13340)

<div class="pub-tags"><span class="pub-tag">ECCV 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Zhexian Huang<sup>*</sup>, **Bo Zhao**<sup>*</sup>, Hui Ma, Zhishu Liu, Jie Zhang, Ruixin Zhang, Shouhong Ding, Zitong YU<sup>†</sup>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/PCA.png' alt="PCA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**PCA: Persistence-Aware Compression and Aggregation for Fast Video Large Language Models**

<div class="pub-tags"><span class="pub-tag">ACMMM 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Zihan Song, Shuo Ye, **Bo Zhao**, Ruixin Zhang, Jiayu Zhang, Shouhong Ding, Zitong YU<sup>†</sup>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/paper/AffectAgent.png' alt="AffectAgent" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**AffectAgent: Collaborative Multi-Agent Reasoning for Retrieval-Augmented Multimodal Emotion Recognition**

<div class="pub-tags"><span class="pub-tag">ACMMM 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Zeheng Wang, Zitong YU<sup>†</sup>, Yijie Zhu, **Bo Zhao**, Haochen Liang, Taorui Wang, Wei Xia, Jiayu Zhang, Zhishu Liu, Hui Ma, Fei Ma, Qi Tian
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='/images/paper/Navigating the Emotion Tree.png' alt="Navigating the Emotion Tree" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Navigating the Emotion Tree: Hierarchical Hyperbolic RAG for Multimodal Emotion Recognition**

<div class="pub-tags"><span class="pub-tag">ACMMM 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Zeheng Wang, **Bo Zhao**, Yijie Zhu, Zhishu Liu, Hui Ma, Ruixin Zhang, Shouhong Ding, Qianyu Xie, Zitong YU<sup>†</sup>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='/images/paper/Empowering Large Vision-Language Models to Bridge Open-Set Domain Gaps in Video Retrieval.png' alt="Open-Set Domain Gaps in Video Retrieval" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Empowering Large Vision-Language Models to Bridge Open-Set Domain Gaps in Video Retrieval**

<div class="pub-tags"><span class="pub-tag">ACMMM 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Jie Zhang, Haochen Liang, Qilang Ye, **Bo Zhao**, Jue Wang, Jieming Ma, Hao Zhou, Fei Luo, Zitong YU<sup>†</sup>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='/images/paper/Semantic Manifold Completion for Partially Relevant Video Retrieval.png' alt="Semantic Manifold Completion" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Semantic Manifold Completion for Partially Relevant Video Retrieval**

<div class="pub-tags"><span class="pub-tag">ACMMM 2026</span><span class="pub-tag pub-tag--status pub-tag--review">Under Review</span></div>

Jie Zhang, Qilang Ye, Haochen Liang, **Bo Zhao**, Jue Wang, Jieming Ma, Hao Zhou, Fei Luo, Zitong YU<sup>†</sup>
</div>
</div>

# 🎓 Educations
<div class="profile-section profile-section--timeline">
  <div class="profile-card timeline-item">
    <div class="experience-item">
      <img src="images/香港中文大学(深圳).png" alt="The Chinese University of Hong Kong, Shenzhen" class="institution-logo">
      <div class="experience-content">
        <p class="exp-title"><strong>The Chinese University of Hong Kong, Shenzhen</strong></p>
        <p class="exp-detail">Master's Student in Artificial Intelligence and Robotics</p>
        <p class="exp-period">2025.09 - 2027.06 (expected)</p>
      </div>
    </div>
  </div>

  <div class="profile-card timeline-item">
    <div class="experience-item">
      <img src="images/山东大学.png" alt="Shandong University" class="institution-logo">
      <div class="experience-content">
        <p class="exp-title"><strong>Shandong University</strong></p>
        <p class="exp-detail">Bachelor's Degree in Mathematics and Applied Mathematics</p>
        <p class="exp-period">2021.09 - 2025.06</p>
      </div>
    </div>
  </div>
</div>

# 💼 Internships
<div class="profile-section">
  <div class="profile-card">
    <div class="experience-item">
      <img src="images/Tencent.avif" alt="Tencent" class="institution-logo">
      <div class="experience-content">
        <p class="exp-title"><strong>Tencent Technology (Shenzhen) Co., Ltd.</strong></p>
        <p class="exp-detail">Intern, Hunyuan Multimodal Model Department</p>
        <p class="exp-period">2025.10 - Present</p>
        <ul class="exp-highlights">
          <li><strong>Business Direction:</strong> Leading game NPC memory project, extracting memory-related content from raw data, constructing LLM-required formats, training 32B memory model.</li>
          <li><strong>Research Direction:</strong> Researching game visual-language-action (VLA) models.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

# 🎖 Honors and Awards
- *2022-2024*: Academic Scholarship for three consecutive years (2022-2024)

# 📜 Patents
- Time Series Analysis Model Training Method, Time Series Analysis Method and Related Devices (Invention Patent)
- Time-Frequency Large Language Model-Based Framework for Enhanced Time Series Methods (Invention Patent)
- Robust Remote Physiological Signal Sensing Based on Optimal Transport Theory (Invention Patent)
- Micro-Expression Facial Action Unit Detection Based on Large Language Models and Feature Fusion (Invention Patent)
