---
permalink: /
layout: raw
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bo Zhao - Academic Homepage</title>
    <!-- DNS预解析和预连接，加速资源加载 -->
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
    <!-- 预加载前几张论文图片 -->
    <link rel="preload" as="image" href="images/paper/PhysLLM.png">
    <link rel="preload" as="image" href="images/paper/FLOW.png">
    <link rel="preload" as="image" href="images/paper/PHASE-NET.png">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&family=Merriweather:wght@300;400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Merriweather', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', 'STSong', 'SimSun', '宋体', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', serif;
            line-height: 1.75;
            color: #2c2c2c;
            background-color: #f5f5f5;
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            letter-spacing: 0.015em;
            text-rendering: optimizeLegibility;
        }
        
        /* 中文使用宋体 - 使用更粗的宋体 */
        body, p, div, span, li, .description, .intro-text, .about-text, .contact-item, .education-title, .education-venue, .education-date, .news-content {
            font-family: 'STZhongsong', 'STSong', 'SimSun', '宋体', 'Merriweather', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', serif;
            font-weight: 600;
        }

        .wrapper {
            display: flex;
            min-height: 100vh;
            max-width: 1400px;
            margin: 0 auto;
            background: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        /* 左侧边栏 */
        .sidebar {
            width: 320px;
            background: #fff;
            padding: 40px 30px;
            border-right: 1px solid #e0e0e0;
            position: sticky;
            top: 0;
            height: 100vh;
            overflow-y: auto;
        }

        .profile-photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            display: block;
            margin: 0 auto 25px;
            border: 4px solid #4285f4;
            box-shadow: 0 4px 12px rgba(66, 133, 244, 0.2);
        }

        .sidebar h1 {
            font-family: 'STKaiti', 'KaiTi', '楷体', '楷体_GB2312', 'Cormorant Garamond', 'Lora', serif !important;
            font-size: 2em;
            font-weight: 700;
            color: #1a1a1a;
            text-align: center;
            margin-bottom: 10px;
            letter-spacing: 0.03em;
            text-transform: none;
        }
        
        /* 确保名字不被其他样式覆盖 */
        aside.sidebar h1 {
            font-family: 'STKaiti', 'KaiTi', '楷体', '楷体_GB2312', serif !important;
        }

        .affiliation {
            font-size: 0.95em;
            color: #666;
            text-align: center;
            margin-bottom: 25px;
            font-weight: 400;
            letter-spacing: 0.01em;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }
        
        .affiliation img {
            height: 24px;
            width: auto;
            max-width: 120px;
            object-fit: contain;
            flex-shrink: 0;
        }

        .affiliation span {
            flex: 1;
        }

        .about-text {
            font-size: 0.92em;
            color: #555;
            line-height: 1.8;
            margin-bottom: 30px;
            text-align: justify;
            font-weight: 400;
            letter-spacing: 0.015em;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 0.9em;
            color: #555;
        }

        .contact-item .icon {
            width: 20px;
            margin-right: 12px;
            color: #4285f4;
            font-size: 1.1em;
        }

        .contact-item a {
            color: #4285f4;
            text-decoration: none;
        }

        .contact-item a:hover {
            text-decoration: underline;
        }

        /* 右侧主内容区 */
        .main-content {
            flex: 1;
            padding: 0;
        }

        /* 导航栏 */
        .navbar {
            background: #fff;
            border-bottom: 1px solid #e0e0e0;
            padding: 15px 40px;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }
        
        /* 语言切换按钮 */
        .language-switcher {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        
        .language-switcher button {
            background: transparent;
            border: 1px solid #e0e0e0;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85em;
            color: #555;
            transition: all 0.3s ease;
            font-family: 'Cormorant Garamond', 'Lora', 'Merriweather', serif;
        }
        
        .language-switcher button:hover {
            background: #f5f5f5;
            border-color: #4285f4;
        }
        
        .language-switcher button.active {
            background: #4285f4;
            color: white;
            border-color: #4285f4;
        }

        .nav-links a {
            color: #555;
            text-decoration: none;
            font-size: 0.85em;
            font-weight: 700;
            transition: all 0.3s ease;
            padding: 8px 0;
            border-bottom: 2px solid transparent;
            letter-spacing: 0.08em;
            font-family: 'Cormorant Garamond', 'Lora', 'Merriweather', serif;
            text-transform: uppercase;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: #4285f4;
            border-bottom-color: #4285f4;
        }

        /* 内容区域 */
        .content {
            padding: 40px;
        }

        .section {
            margin-bottom: 50px;
        }

        .section-title {
            font-family: 'Cormorant Garamond', 'Lora', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', serif;
            font-size: 1.75em;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 10px;
            letter-spacing: 0.025em;
        }

        .section-title .icon {
            font-size: 1.2em;
        }

        .intro-text {
            font-size: 0.96em;
            color: #555;
            line-height: 1.85;
            margin-bottom: 20px;
            text-align: justify;
            font-weight: 400;
            letter-spacing: 0.015em;
        }

        .research-stats {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #4285f4;
        }

        .research-stats p {
            margin-bottom: 8px;
            color: #555;
            font-size: 0.95em;
        }

        .research-stats strong {
            color: #1a1a1a;
        }

        /* 新闻列表 */
        .news-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 25px;
            padding: 20px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.5) 100%);
            border-left: 4px solid #4285f4;
            border-radius: 0 8px 8px 0;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .news-item:hover {
            transform: translateX(5px);
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 255, 0.7) 100%);
            box-shadow: 0 4px 12px rgba(66, 133, 244, 0.15);
        }

        .news-item:last-child {
            margin-bottom: 0;
        }

        .news-date {
            font-weight: 600;
            color: #4285f4;
            font-size: 0.95em;
            min-width: 90px;
            padding: 6px 12px;
            background: rgba(66, 133, 244, 0.1);
            border-radius: 6px;
            text-align: center;
            flex-shrink: 0;
        }

        .news-content {
            flex: 1;
            color: #555;
            font-size: 0.95em;
            line-height: 1.7;
        }

        /* 论文列表缩略图 */
        .publication-item {
            display: flex;
            gap: 25px;
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 1px solid #f0f0f0;
        }

        .publication-item:last-child {
            border-bottom: none;
        }

        /* === 重点修改：固定高度 + 裁剪多余部分，去掉大块黑底 === */
        .pub-image {
            width: 280px;
            height: 220px;          /* 固定高度 */
            background: transparent;  /* 透明背景，无装饰 */
            border: none;            /* 无边框 */
            border-radius: 0;        /* 无圆角 */
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
            font-size: 0.85em;
            position: relative;
            overflow: hidden;       /* 关键：裁剪掉下面长黑条 */
            box-shadow: none;       /* 无阴影 */
            transition: none;       /* 无过渡效果 */
            cursor: pointer;
        }
        
        /* PNG图片容器的特殊样式 */
        .pub-image:has(img[src$=".png"]),
        .pub-image:has(img[src$=".PNG"]) {
            background: transparent;
            box-shadow: none;
        }

        .pub-image:hover {
            transform: none;        /* 悬停时无变换 */
            box-shadow: none;       /* 悬停时无阴影 */
        }

        
        .pub-image iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 0;       /* 无圆角 */
            pointer-events: none;
        }
        
        .pub-image canvas {
            width: 100% !important;
            height: auto !important;
            max-width: 100%;
            object-fit: contain;
            border-radius: 0;       /* 无圆角 */
            display: block;
            margin: 0;
            padding: 0;
            box-shadow: none;       /* 无阴影 */
        }
        
        .pub-image .pdf-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;  /* 透明背景 */
            color: #999;
            font-size: 0.9em;
        }
        
        .pub-image .image-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;  /* 透明背景 */
            color: #999;
            font-size: 0.9em;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        
        .pub-image img {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .pub-image img.loaded {
            opacity: 1;
        }
        
        .pub-image::after {
            display: none;  /* 移除悬停提示 */
        }

        .pub-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: #4285f4;
            color: white;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.75em;
            font-weight: 600;
            z-index: 10;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        /* PDF模态框 */
        .pdf-modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(4px);
            animation: fadeIn 0.3s ease;
        }

        .pdf-modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .pdf-modal-content {
            position: relative;
            width: 90%;
            max-width: 1200px;
            height: 90vh;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            animation: slideUp 0.3s ease;
        }
        
        .pdf-modal-header {
            padding: 20px;
            background: #f8f9fa;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pdf-modal-title {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 1.1em;
        }
        
        .pdf-modal-close {
            background: none;
            border: none;
            font-size: 1.5em;
            color: #666;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.2s ease;
        }
        
        .pdf-modal-close:hover {
            background: #e0e0e0;
            color: #1a1a1a;
        }
        
        .pdf-modal-body {
            width: 100%;
            height: calc(90vh - 80px);
            overflow: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .pdf-modal-body iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        .pdf-modal-body img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from {
                transform: translateY(30px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .pub-details {
            flex: 1;
        }

        .pub-title {
            font-size: 1.15em;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 10px;
            line-height: 1.55;
            letter-spacing: 0.015em;
            font-family: 'Merriweather', 'PingFang SC', 'Hiragino Sans GB', serif;
        }

        .pub-title a {
            color: #1a1a1a;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .pub-title a:hover {
            color: #4285f4;
            text-decoration: underline;
        }

        .pub-authors {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 8px;
        }

        .pub-meta {
            color: #666;
            font-size: 0.85em;
            margin-bottom: 12px;
            font-style: italic;
        }
        
        .pub-link {
            margin-top: 8px;
            margin-bottom: 8px;
        }
        
        .pub-link a {
            color: #4285f4;
            text-decoration: none;
            font-size: 0.9em;
        }
        
        .pub-link a:hover {
            text-decoration: underline;
        }

        .pub-meta a {
            color: #4285f4;
            text-decoration: none;
            margin-right: 15px;
            font-style: normal;
        }

        .pub-meta a:hover {
            text-decoration: underline;
        }

        .pub-meta em {
            font-style: italic;
        }

        .pub-description {
            color: #555;
            font-size: 0.92em;
            line-height: 1.8;
            text-align: justify;
            font-weight: 400;
            letter-spacing: 0.015em;
        }

        /* 教育经历 */
        .education-item {
            margin-bottom: 30px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
        }

        .education-logo {
            width: 60px;
            height: 60px;
            flex-shrink: 0;
            border-radius: 50%;
            border: 2px solid #e0e0e0;
            padding: 8px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .education-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .education-content {
            flex: 1;
        }

        .education-venue {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 1em;
            margin-bottom: 5px;
            letter-spacing: 0.01em;
            font-family: 'Merriweather', 'PingFang SC', 'Hiragino Sans GB', serif;
        }

        .education-title {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 5px;
            letter-spacing: 0.01em;
        }

        .education-date {
            color: #999;
            font-size: 0.85em;
        }

        /* 列表样式等其余保持不变 */
        .description ul {
            list-style: none;
            padding-left: 0;
        }

        .description li {
            margin-bottom: 12px;
            padding-left: 20px;
            position: relative;
            color: #555;
            line-height: 1.7;
            }

        .description li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #4285f4;
            font-weight: bold;
            }

        /* 响应式设计 */
        @media (max-width: 968px) {
            .wrapper {
                flex-direction: column;
            }

            .sidebar {
                width: 100%;
                height: auto;
                position: relative;
                border-right: none;
                border-bottom: 1px solid #e0e0e0;
            }

            .navbar {
                padding: 15px 20px;
                flex-direction: column;
                gap: 15px;
            }
            
            .nav-links {
                flex-wrap: wrap;
                gap: 15px;
                width: 100%;
            }
            
            .language-switcher {
                align-self: flex-end;
            }

            .content {
                padding: 30px 20px;
            }

            .publication-item {
                flex-direction: column;
            }

            /* 小屏幕下预览宽度100%，高度仍然固定，避免黑块 */
            .pub-image {
                width: 100%;
                height: 220px;
            }
            
            .pdf-modal-content {
                width: 95%;
                height: 95vh;
            }
        }

        @media print {
            body {
                background: white;
            }
            .wrapper {
                box-shadow: none;
            }
            .navbar {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <!-- 左侧边栏 -->
        <aside class="sidebar">
            <img src="images/picture.jpg" alt="赵博" class="profile-photo" loading="lazy">
                <h1 >Bo ZHAO<h1>
            <div class="affiliation">
                <img src="images/香港中文大学(深圳).png" alt="香港中文大学（深圳）" loading="lazy">
                <span >The Chinese University of Hong Kong, Shenzhen<span>
                </div>
            <div class="about-text" >Focusing on research in remote physiological signal sensing (rPPG), large language models, and multimodal learning. Submitting papers to top-tier conferences and journals including ICLR, CVPR, IJCV, etc.<div>
            <div class="contact-item">
                <span class="icon">📍</span>
                <span >Shenzhen, China<span>
                </div>
            <div class="contact-item">
                <span class="icon">✉️</span>
                <a href="mailto:3057018496@qq.com">3057018496@qq.com</a>
            </div>
            <div class="contact-item">
                <span class="icon">🎓</span>
                <a href="#" target="_blank">Google Scholar</a>
            </div>
        </aside>

        <!-- 右侧主内容区 -->
        <main class="main-content">
            <!-- 导航栏 -->
            <nav class="navbar">
                <ul class="nav-links">
                    <li><a href="#home" class="active" >Homepage<a></li>
                    <li><a href="#news" >News<a></li>
                    <li><a href="#publications" >Publications<a></li>
                    <li><a href="#education" >Educations<a></li>
                    <li><a href="#internships" >Internships<a></li>
                    <li><a href="#honors" >Honors and Awards<a></li>
                    <li><a href="#patents" >Patents<a></li>
                </ul>
                <div class="language-switcher">
                    <button id="lang-en" class="active">EN</button>
                    <button id="lang-zh">中文</button>
                </div>
            </nav>

            <!-- 内容区域 -->
            <div class="content">
                <!-- 介绍部分 -->
                <section id="home" class="section">
                    <div class="intro-text">
                        <p><span >Welcome to my academic homepage! I am currently a Master's student in Artificial Intelligence and Robotics at The Chinese University of Hong Kong, Shenzhen (expected graduation in 2027). Since December 2024, supervised by Prof. <span><a href="https://zitong-yu.github.io/yzt/" target="_blank" style="color: #4285f4; text-decoration: underline;"><span >Zitong Yu<span></a><span >.<span> <span >My research interests focus on remote physiological signal sensing (rPPG), large language models, and multimodal learning.<span></p>
                        <p >I have submitted papers to multiple top-tier conferences and journals, including ICLR, CVPR, IJCV, JBHI, etc. Currently, I am interning at Tencent Technology (Shenzhen) Co., Ltd., in the Hunyuan Multimodal Model Department, primarily working on game NPC memory projects and visual-language-action (VLA) model research.<p>
                </div>
                    <div class="research-stats">
                        <p><strong >Research Interests:<strong> <span >Remote physiological signal sensing (rPPG), large language models, multimodal learning<span></p>
                        <p><strong >Paper Submissions:<strong> <span >Multiple papers submitted to top-tier conferences and journals including ICLR, CVPR, IJCV, JBHI, etc.<span></p>
            </div>
        </section>

                <!-- 新闻部分 -->
                <section id="news" class="section">
                    <h2 class="section-title">
                        <span class="icon">🔥</span>
                        <span >News<span>
                    </h2>
                    <div class="news-item">
                        <span class="news-date">2026.01</span>
                        <span class="news-content" >One paper accepted by ICLR 2026<span>
                    </div>
                    <div class="news-item">
                        <span class="news-date">2025.10</span>
                        <span class="news-content" >Started internship at Tencent Technology (Shenzhen) Co., Ltd., Hunyuan Multimodal Model Department<span>
                    </div>
                    <div class="news-item">
                        <span class="news-date">2025.09</span>
                        <span class="news-content" >Enrolled in The Chinese University of Hong Kong, Shenzhen for Master's degree in Artificial Intelligence and Robotics<span>
            </div>
        </section>

                <!-- 论文部分 -->
                <section id="publications" class="section">
                    <h2 class="section-title">
                        <span class="icon">📄</span>
                        <span >Publications<span>
                    </h2>

                    <div class="publication-item" data-image="images/paper/PhysLLM.png">
                        <div class="pub-image">
                            <div class="pub-badge">ICLR 2026</div>
                </div>
                        <div class="pub-details">
                            <div class="pub-title">
                                PhysLLM: Harnessing Large Language Models for Cross-Modal Remote Physiological Sensing
                            </div>
                            <div class="pub-authors" >Co-first author<div>
                            <div class="pub-meta">
                                <span><em>ICLR</em> <span >(CCF Class A Conference)<span> | Scores: 6/4/6/4</span>
                            </div>
                            <div class="pub-description" >
                                Remote photoplethysmography (rPPG) suffers from poor robustness in complex environments (lighting, motion artifacts), and existing methods struggle to effectively fuse multimodal information and capture long-term temporal dependencies. We propose PhysLLM, a collaborative optimization framework combining LLMs with rPPG-specific components, the first large model in the rPPG field. We design Dual-Domain Stabilization (DDS) algorithm, Vision Aggregator (VA), and Text Prototype Guidance (TPG) strategy, enhancing model adaptability to complex scenarios through physiological cue-aware prompt learning.
                            <div>
                            <div class="pub-link">
                                <a href="https://arxiv.org/abs/2505.03621" target="_blank" >[Paper Link]<a>
                            </div>
                        </div>
                    </div>

                    <div class="publication-item" data-image="images/paper/FLOW.png">
                        <div class="pub-image">
                            <div class="pub-badge">CVPR 2026</div>
                        </div>
                        <div class="pub-details">
                            <div class="pub-title">
                                FLOW: Feature-Level Optimal Warping for Generalized Remote Physiological Measurement
                            </div>
                            <div class="pub-authors" >First author<div>
                            <div class="pub-meta">
                                <span><em>CVPR</em> <span >(CCF Class A Conference)<span> - Under Review</span>
                            </div>
                            <div class="pub-description" >
                                We propose a multi-source domain generalization framework based on optimal transport theory to enhance the generalization capability of end-to-end rPPG. We innovatively introduce a plug-and-play OT module OTAdapter that explicitly aligns feature distributions across multiple source domains, thereby enhancing model generalization. We provide theoretical justification by deriving a new generalization bound based on OT divergence, theoretically linking the differences between source domains with the expected error on unseen target domains.
                            <div>
                        </div>
                    </div>

                    <div class="publication-item" data-image="images/paper/PHASE-NET.png">
                        <div class="pub-image">
                            <div class="pub-badge">CVPR 2026</div>
                </div>
                        <div class="pub-details">
                            <div class="pub-title">
                                PHASE-Net: Physics-Grounded Harmonic Attention System for Efficient Remote Photoplethysmography Measurement
                            </div>
                            <div class="pub-authors" >First author<div>
                            <div class="pub-meta">
                                <span><em>CVPR</em> <span >(CCF Class A Conference)<span> - Under Review</span>
                            </div>
                            <div class="pub-description" >
                                Physics-driven modeling: First to derive network structure from Navier-Stokes hemodynamics, rigorously proving the equivalence between second-order damped harmonic resonance and causal convolution, providing theoretical foundation for using Temporal Convolution Network. Innovative module design: Propose Zero-FLOPs Axial Swapper (zero-parameter cross-region interaction) and Adaptive Spatial Filter (dynamic spatial filtering + temporal difference), enhancing signal purity and temporal modeling capability without increasing computational cost. Achieved cross-domain SOTA on four major benchmarks (UBFC/PURE/BUAA/MMPD) with only 0.29M parameters.
                            <div>
                            <div class="pub-link">
                                <a href="https://arxiv.org/pdf/2509.24850" target="_blank" >[Paper Link]<a>
                            </div>
                </div>
            </div>

                    <div class="publication-item" data-image="images/paper/AULLM.png">
                        <div class="pub-image">
                            <div class="pub-badge">CCBR 2025</div>
                </div>
                        <div class="pub-details">
                            <div class="pub-title">
                                AU-LLM: Micro-Expression Action Unit Detection via Enhanced LLM-Based Feature
                            </div>
                            <div class="pub-authors" >Third author<div>
                            <div class="pub-meta">
                                <span><em>CCBR</em> - <span >Accepted<span></span>
                            </div>
                            <div class="pub-description" >
                                Participated in designing and proposing AU-LLM, the first framework in academia to successfully utilize LLMs for micro-expression AU detection. Developed the key Enhanced Fusion Projector (EFP) module, which intelligently fuses mid-level (local texture) and high-level (global semantic) features from the visual backbone into an information-dense single visual token using MLP, effectively bridging the modality gap between vision and language. Established new SOTA on both CASME II and SAMM benchmark datasets.
                            <div>
                            <div class="pub-link">
                                <a href="https://arxiv.org/abs/2507.21778" target="_blank" >[Paper Link]<a>
                            </div>
                </div>
            </div>

                    <div class="publication-item" data-image="images/paper/CardiacMamba.png">
                        <div class="pub-image">
                            <div class="pub-badge">JBHI 2025</div>
                </div>
                        <div class="pub-details">
                            <div class="pub-title">
                                CardiacMamba: A Multimodal RGB-RF Fusion Framework with State Space Models for Remote Physiological Measurement
                            </div>
                            <div class="pub-authors" >Co-first author<div>
                            <div class="pub-meta">
                                <span><em>JBHI</em> <span >(Tsinghua Class B, CCF C, JCR Q1, Impact Factor 7.2)<span></span>
                            </div>
                            <div class="pub-description" >
                                We propose CardiacMamba, a multimodal framework that fuses RGB video and RF sensor data for accurate rPPG heart rate estimation. We innovatively introduce Temporal Difference Mamba Module (TDMM) and Bifurcated Difference Convolution Fusion (BDCF) for dual-layer feature extraction and alignment, achieving collaborative modeling of RGB and RF modalities through Bidirectional State Space Model (Bi-SSM). We design Channel-wise Fast Fourier Transform (CFFT) for bidirectional feature fusion, demonstrating state-of-the-art performance on the EquiPleth dataset and significantly mitigating skin tone bias issues.
                            <div>
                            <div class="pub-link">
                                <a href="https://arxiv.org/abs/2502.13624" target="_blank" >[Paper Link]<a>
                            </div>
                </div>
            </div>

                    <div class="publication-item" data-image="images/paper/Intervention.png">
                        <div class="pub-image">
                            <div class="pub-badge">IJCV 2025</div>
                </div>
                        <div class="pub-details">
                            <div class="pub-title">
                                Intervention-Based Self-Supervised Learning: A Causal Probe Paradigm for Remote Photoplethysmography
                </div>
                            <div class="pub-authors" >Second author<div>
                            <div class="pub-meta">
                                <span><em>IJCV</em> <span >(CCF Class A Journal, Impact Factor 19.5)<span> - Under Review</span>
            </div>
                            <div class="pub-description" >
                                Intervention-based self-supervised learning method using a causal probe paradigm for remote photoplethysmography research.
                            <div>
                        </div>
                    </div>
                </section>

                <!-- 教育背景 -->
                <section id="education" class="section">
                    <h2 class="section-title">
                        <span class="icon">🎓</span>
                        <span >Educations<span>
                    </h2>
                    <div class="education-item">
                        <div class="education-logo">
                            <img src="images/香港中文大学(深圳).png" alt="香港中文大学（深圳）" loading="lazy">
                </div>
                        <div class="education-content">
                            <div class="education-venue" >The Chinese University of Hong Kong, Shenzhen<div>
                            <div class="education-title" >Master's Student | Artificial Intelligence and Robotics<div>
                            <div class="education-date" >2025.09 - 2027.06 (Expected)<div>
                        </div>
                    </div>
                    <div class="education-item">
                        <div class="education-logo">
                            <img src="images/山东大学.png" alt="山东大学" loading="lazy">
                        </div>
                        <div class="education-content">
                            <div class="education-venue" >Shandong University<div>
                            <div class="education-title" >Bachelor's Degree | Mathematics and Applied Mathematics<div>
                            <div class="education-date">2021.09 - 2025.06 | GPA: 87.42/100</div>
                        </div>
                    </div>
                </section>

                <!-- 实习经历 -->
                <section id="internships" class="section">
                    <h2 class="section-title">
                        <span class="icon">💼</span>
                        <span >Internships<span>
                    </h2>
                    <div class="education-item">
                        <div class="education-logo">
                            <img src="images/Tencent.avif" alt="腾讯科技" loading="lazy">
                        </div>
                        <div class="education-content">
                            <div class="education-venue" >Tencent Technology (Shenzhen) Co., Ltd.<div>
                            <div class="education-title" >Intern | Hunyuan Multimodal Model Department<div>
                            <div class="education-date" >2025.10 - Present<div>
                            <div class="description" style="margin-top: 15px;">
                                <ul>
                                    <li><strong >Business Direction:<strong> <span >Leading game NPC memory project, extracting memory-related content from raw data, constructing LLM-required formats, training 32B memory model<span></li>
                                    <li><strong >Research Direction:<strong> <span >Researching game visual-language-action (VLA) models<span></li>
                    </ul>
                </div>
            </div>
                </div>
                </section>

                <!-- 荣誉和奖项 -->
                <section id="honors" class="section">
                    <h2 class="section-title">
                        <span class="icon">🏆</span>
                        <span >Honors and Awards<span>
                    </h2>
                <div class="description">
                        <ul>
                            <li >Academic Scholarship for three consecutive years (2022-2024)<li>
                        </ul>
            </div>
        </section>

                <!-- 专利成果 -->
                <section id="patents" class="section">
                    <h2 class="section-title">
                        <span class="icon">📜</span>
                        <span >Patents<span>
                    </h2>
            <div class="description">
                <ul>
                    <li >Time Series Analysis Model Training Method, Time Series Analysis Method and Related Devices (Invention Patent)<li>
                    <li >Time-Frequency Large Language Model-Based Framework for Enhanced Time Series Methods (Invention Patent)<li>
                    <li >Robust Remote Physiological Signal Sensing Based on Optimal Transport Theory (Invention Patent)<li>
                    <li >Micro-Expression Facial Action Unit Detection Based on Large Language Models and Feature Fusion (Invention Patent)<li>
                </ul>
            </div>
        </section>
            </div>
        </main>
    </div>

    <script>
        // 语言切换功能
        let currentLang = 'en'; // 默认英文
        
        // 从localStorage读取语言设置
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            currentLang = savedLang;
        }
        
        function switchLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
            
            // 更新HTML lang属性
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
            
            // 更新所有带有data-en和data-zh属性的元素
            document.querySelectorAll('[data-en][data-zh]').forEach(element => {
                if (lang === 'zh') {
                    element.textContent = element.getAttribute('data-zh');
                } else {
                    element.textContent = element.getAttribute('data-en');
                }
            });
            
            // 更新导航链接
            document.querySelectorAll('.nav-links a[data-en][data-zh]').forEach(link => {
                if (lang === 'zh') {
                    link.textContent = link.getAttribute('data-zh');
                } else {
                    link.textContent = link.getAttribute('data-en');
                }
            });
            
            // 更新语言切换按钮状态
            document.getElementById('lang-en').classList.toggle('active', lang === 'en');
            document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
            
            // 更新页面标题
            document.title = lang === 'zh' ? '赵博 - 个人学术主页' : 'Bo ZHAO - Academic Homepage';
        }
        
        // 初始化语言
        switchLanguage(currentLang);
        
        // 语言切换按钮事件
        document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
        document.getElementById('lang-zh').addEventListener('click', () => switchLanguage('zh'));
        
        // 导航点击功能
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // 滚动时同步导航高亮
        function updateActiveNav() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            const scrollPosition = window.scrollY + 200;

            let currentSection = null;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                }
            });

            if (!currentSection && sections.length > 0) {
                currentSection = sections[0].getAttribute('id');
            }

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#' + currentSection || (href === '#home' && !currentSection)) {
                    link.classList.add('active');
                }
            });
        }

        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveNav();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateActiveNav();

        // 图片懒加载功能（优化版）
        function loadImageLazy(pubItem, pubImage, imageFileName, pubTitle, isPriority = false) {
            const badge = pubImage.querySelector('.pub-badge');
            const badgeClone = badge ? badge.cloneNode(true) : null;
            
            pubImage.innerHTML = '';
            if (badgeClone) {
                pubImage.appendChild(badgeClone);
            }
            
            // 添加加载占位符
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.textContent = '加载中...';
            pubImage.appendChild(placeholder);
            
            const img = document.createElement('img');
            // 对于优先图片，不使用lazy loading，立即加载
            if (!isPriority) {
                img.loading = 'lazy';
            } else {
                img.fetchPriority = 'high';
            }
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '0';      /* 无圆角 */
            img.style.display = 'block';
            img.style.boxShadow = 'none';       /* 无阴影 */
            img.style.transition = 'none';      /* 无过渡 */
            img.style.position = 'relative';
            img.style.zIndex = '2';
            
            // 图片加载完成后的处理
            img.addEventListener('load', function() {
                placeholder.remove();
                img.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                placeholder.textContent = '加载失败';
                placeholder.style.color = '#e74c3c';
            });
            
            pubImage.appendChild(img);
            
            // 移除悬停效果，保持图片纯粹
            
            pubImage.addEventListener('click', function() {
                openPDFModal(imageFileName, pubTitle);
            });
            
            // 如果是优先图片，立即加载
            if (isPriority) {
                img.src = imageFileName;
                return;
            }
            
            // 使用 Intersection Observer 实现懒加载，大幅增加提前加载距离
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        img.src = imageFileName;
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '300px' // 大幅提前：提前300px开始加载
            });
            
            imageObserver.observe(pubImage);
        }

        // PDF显示功能 - 使用PDF.js渲染第一页作为预览
        async function loadPDFs() {
            if (typeof pdfjsLib === 'undefined') {
                console.error('PDF.js未加载');
                loadPDFsWithIframe();
                return;
            }
            
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            
            const pubItems = document.querySelectorAll('.publication-item');
            
            for (let i = 0; i < pubItems.length; i++) {
                const pubItem = pubItems[i];
                const pubImage = pubItem.querySelector('.pub-image');
                if (!pubImage) continue;
                
                // 优先检查是否有图片文件
                const imageFileName = pubItem.getAttribute('data-image');
                if (imageFileName) {
                    const pubTitle = pubItem.querySelector('.pub-title')?.textContent || '';
                    // 前3张图片立即加载（高优先级），其他使用懒加载
                    const isPriority = i < 3;
                    loadImageLazy(pubItem, pubImage, imageFileName, pubTitle, isPriority);
                    continue;
                }
                
                const pdfFileName = pubItem.getAttribute('data-pdf');
                
                if (pdfFileName) {
                    const pdfUrl = 'images/paper/' + pdfFileName;
                    
                    const badge = pubImage.querySelector('.pub-badge');
                    const badgeClone = badge ? badge.cloneNode(true) : null;
                    const pubTitle = pubItem.querySelector('.pub-title')?.textContent || '';
                    
                    pubImage.innerHTML = '';
                    if (badgeClone) {
                        pubImage.appendChild(badgeClone);
                    }
                    
                    try {
                        const loadingDiv = document.createElement('div');
                        loadingDiv.className = 'pdf-placeholder';
                        loadingDiv.textContent = '加载中...';
                        pubImage.appendChild(loadingDiv);
                        
                        const response = await fetch(pdfUrl);
                        if (!response.ok) {
                            throw new Error('PDF文件未找到');
                        }
                        const arrayBuffer = await response.arrayBuffer();
                        
                        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
                        const pdf = await loadingTask.promise;
                        const page = await pdf.getPage(1);
                        
                        const containerWidth = pubImage.offsetWidth || 280;
                        const viewport = page.getViewport({ scale: 1.0 });
                        
                        const tempCanvas = document.createElement('canvas');
                        const tempContext = tempCanvas.getContext('2d');
                        tempCanvas.width = viewport.width;
                        tempCanvas.height = viewport.height;
                        
                        await page.render({
                            canvasContext: tempContext,
                            viewport: viewport
                        }).promise;
                        
                        const imageData = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
                        const data = imageData.data;
                        
                        let minX = tempCanvas.width, minY = tempCanvas.height;
                        let maxX = 0, maxY = 0;
                        let hasContent = false;
                        
                        for (let y = 0; y < tempCanvas.height; y++) {
                            for (let x = 0; x < tempCanvas.width; x++) {
                                const idx = (y * tempCanvas.width + x) * 4;
                                const r = data[idx];
                                const g = data[idx + 1];
                                const b = data[idx + 2];
                                const a = data[idx + 3];
                                
                                if (a > 10 && (r < 250 || g < 250 || b < 250)) {
                                    hasContent = true;
                                    minX = Math.min(minX, x);
                                    minY = Math.min(minY, y);
                                    maxX = Math.max(maxX, x);
                                    maxY = Math.max(maxY, y);
                                }
                            }
                        }
                        
                        let contentWidth, contentHeight, offsetX, offsetY;
                        if (hasContent && (maxX > minX && maxY > minY)) {
                            const margin = 0.05;
                            const widthMargin = (maxX - minX) * margin;
                            const heightMargin = (maxY - minY) * margin;
                            
                            minX = Math.max(0, minX - widthMargin);
                            minY = Math.max(0, minY - heightMargin);
                            maxX = Math.min(tempCanvas.width, maxX + widthMargin);
                            maxY = Math.min(tempCanvas.height, maxY + heightMargin);
                            
                            contentWidth = maxX - minX;
                            contentHeight = maxY - minY;
                            offsetX = minX;
                            offsetY = minY;
                        } else {
                            contentWidth = viewport.width;
                            contentHeight = viewport.height;
                            offsetX = 0;
                            offsetY = 0;
                        }
                        
                        const scale = containerWidth / contentWidth;
                        
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.width = Math.floor(contentWidth * scale);
                        canvas.height = Math.floor(contentHeight * scale);
                        
                        canvas.style.width = '100%';
                        canvas.style.height = 'auto';
                        canvas.style.display = 'block';
                        
                        const cropViewport = page.getViewport({ 
                            scale: scale,
                            offsetX: -offsetX * scale,
                            offsetY: -offsetY * scale
                        });
                        
                        await page.render({
                            canvasContext: context,
                            viewport: cropViewport
                        }).promise;
                        
                        // 这里不再根据PDF高度修改容器高度，避免出现大块黑色区域
                        // pubImage.style.height = Math.floor(contentHeight * scale) + 'px';
                        // pubImage.style.minHeight = Math.floor(contentHeight * scale) + 'px';
                        
                        pubImage.removeChild(loadingDiv);
                        pubImage.appendChild(canvas);
                        
                        pubImage.addEventListener('click', function() {
                            openPDFModal(pdfUrl, pubTitle);
                        });
                    } catch (error) {
                        console.error('PDF加载失败:', error);
                        try {
                            pubImage.innerHTML = '';
                            if (badgeClone) {
                                pubImage.appendChild(badgeClone);
                            }
                            const iframe = document.createElement('iframe');
                            iframe.src = pdfUrl + '#view=FitH&toolbar=0&navpanes=0&zoom=page-width';
                            iframe.style.width = '100%';
                            iframe.style.height = '100%';
                            iframe.style.border = 'none';
                            iframe.style.borderRadius = '8px';
                            pubImage.appendChild(iframe);
                            
                            pubImage.addEventListener('click', function() {
                                openPDFModal(pdfUrl, pubTitle);
                            });
                        } catch (iframeError) {
                            pubImage.innerHTML = '';
                            if (badgeClone) {
                                pubImage.appendChild(badgeClone);
                            }
                            const placeholder = document.createElement('div');
                            placeholder.className = 'pdf-placeholder';
                            placeholder.textContent = 'PDF加载失败';
                            pubImage.appendChild(placeholder);
                        }
                    }
                } else {
                    const badge = pubImage.querySelector('.pub-badge');
                    pubImage.innerHTML = '';
                    if (badge) {
                        pubImage.appendChild(badge);
                    }
                    const placeholder = document.createElement('div');
                    placeholder.className = 'pdf-placeholder';
                    placeholder.textContent = '暂无PDF';
                    pubImage.appendChild(placeholder);
                }
            }
        }
        
        // 使用iframe方式加载PDF（后备方案）
        function loadPDFsWithIframe() {
            const pubItems = document.querySelectorAll('.publication-item');
            
            pubItems.forEach((pubItem) => {
                const pubImage = pubItem.querySelector('.pub-image');
                if (!pubImage) return;
                
                const pdfFileName = pubItem.getAttribute('data-pdf');
                
                if (pdfFileName) {
                    const pdfUrl = 'images/paper/' + pdfFileName;
                    const badge = pubImage.querySelector('.pub-badge');
                    const badgeClone = badge ? badge.cloneNode(true) : null;
                    const pubTitle = pubItem.querySelector('.pub-title')?.textContent || '';
                    
                    pubImage.innerHTML = '';
                    if (badgeClone) {
                        pubImage.appendChild(badgeClone);
                    }
                    
                    const iframe = document.createElement('iframe');
                    iframe.src = pdfUrl + '#view=FitH&toolbar=0&navpanes=0&zoom=page-width';
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    iframe.style.border = 'none';
                    iframe.style.borderRadius = '8px';
                    pubImage.appendChild(iframe);
                    
                    pubImage.addEventListener('click', function() {
                        openPDFModal(pdfUrl, pubTitle);
                    });
                }
            });
        }
        
        // 打开PDF模态框
        function openPDFModal(pdfUrl, title) {
            let modal = document.getElementById('pdf-modal');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'pdf-modal';
                modal.className = 'pdf-modal';
                modal.innerHTML = `
                    <div class="pdf-modal-content">
                        <div class="pdf-modal-header">
                            <div class="pdf-modal-title"></div>
                            <button class="pdf-modal-close">×</button>
            </div>
                        <div class="pdf-modal-body">
                            <iframe src="" frameborder="0"></iframe>
            </div>
    </div>
                `;
                document.body.appendChild(modal);
                
                modal.querySelector('.pdf-modal-close').addEventListener('click', closePDFModal);
                
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        closePDFModal();
                    }
                });
                
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        closePDFModal();
                    }
                });
            }
            
            modal.querySelector('.pdf-modal-title').textContent = title;
            const modalBody = modal.querySelector('.pdf-modal-body');
            
            // 检查是否是图片文件
            const isImage = /\.(png|jpg|jpeg|gif|webp|avif|svg)$/i.test(pdfUrl);
            
            if (isImage) {
                // 如果是图片，使用img标签显示
                let img = modalBody.querySelector('img');
                if (!img) {
                    // 移除iframe（如果存在）
                    const iframe = modalBody.querySelector('iframe');
                    if (iframe) {
                        iframe.style.display = 'none';
                    }
                    // 创建img标签
                    img = document.createElement('img');
                    img.src = pdfUrl;
                    modalBody.appendChild(img);
                } else {
                    img.src = pdfUrl;
                    img.style.display = 'block';
                }
            } else {
                // 如果是PDF，使用iframe显示
                let iframe = modalBody.querySelector('iframe');
                if (!iframe) {
                    // 移除img（如果存在）
                    const img = modalBody.querySelector('img');
                    if (img) {
                        img.style.display = 'none';
                    }
                    // 创建iframe标签
                    iframe = document.createElement('iframe');
                    iframe.src = '';
                    iframe.setAttribute('frameborder', '0');
                    modalBody.appendChild(iframe);
                }
                iframe.src = pdfUrl;
                iframe.style.display = 'block';
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closePDFModal() {
            const modal = document.getElementById('pdf-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        window.addEventListener('load', function() {
            if (typeof pdfjsLib !== 'undefined') {
                loadPDFs();
            } else {
                setTimeout(function() {
                    if (typeof pdfjsLib !== 'undefined') {
                        loadPDFs();
                    } else {
                        console.warn('PDF.js未加载，使用iframe方式');
                        loadPDFsWithIframe();
                    }
                }, 1000);
            }
        });
    </script>
</body>
</html>