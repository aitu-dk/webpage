---
layout: ../../layouts/BlogLayout.astro
slug: semester-autumn-2024-wrap-up
title: Wrapping Up AITU’s Fall 2024 Semester 🎓
description: This semester, we introduced a new format, structuring our weekly sessions into themed blocks, each focusing on a specific area of AI. Here’s a look back at what we covered.
authors:
    - Lukas Rasocha
    - Ludek Cizinsky
format: paper
tags:
    - semester-summary
    - ai
    - speech-to-text
    - transformers
    - graph-neural-networks
    - 3d-reconstruction
    - student-organisation
ogImage:
    src: /posts/semester-summary-fall-2024/fall2024.png
    alt: AI research themes from Fall 2024
banner:
    src: /posts/semester-summary-fall-2024/fall2024banner.png
    alt: AITU Semester Highlights
published: 11/28/2024
---

As the semester draws to a close, we’d like to reflect on everything we’ve explored together at AITU this Fall 2024. For the first time, we introduced a **block structure**, grouping our sessions into themed areas of AI. This allowed us to focus on one topic at a time, giving us space to connect ideas across weeks. From speech recognition to 3D reconstruction, here’s an overview of the topics and papers we discussed.

---

### 🎤 **Block 1: Speech-to-Text**

The semester started with a look at **Automatic Speech Recognition (ASR)**. These systems turn audio into text and are used in tools like voice assistants and transcription software. Over three weeks, we discussed methods that ranged from foundational ideas to more recent innovations:

-   **W38**: [wav2vec](https://arxiv.org/pdf/1904.05862) (FAIR / 2019): Unsupervised Pretraining for Speech Recognition
-   **W39**: [Conformer](https://arxiv.org/pdf/2005.08100) (Google / 2020): Convolution-augmented Transformer for Speech Recognition
-   **W40**: [Whisper](https://cdn.openai.com/papers/whisper.pdf) (OpenAI / 2022): Robust Speech Recognition via Large-Scale Weak Supervision

Whisper, in particular, led to an interesting discussion about how large-scale weak supervision can improve robustness in noisy real-world conditions.

---

### 🔄 **Block 2: Transformers**

Next, we took a step back to revisit the foundation of many modern AI systems: **Transformers**. This session was dedicated to understanding the ideas behind this architecture and how they have influenced so many fields.

-   **W41**: [Attention Is All You Need](https://arxiv.org/pdf/1706.03762) (Google / 2017): The paper that introduced the Transformer

It was a good opportunity to reflect on how a relatively simple idea—self-attention—has reshaped everything from natural language processing to computer vision.

---

### 🏟️ **Block 3: Graph Neural Networks**

In the second half of the semester, we turned to **Graph Neural Networks (GNNs)** and their applications. We looked at how GNNs model connections between entities and discussed their potential in areas like football tactics.

-   **W43**: [Everything is Connected](https://arxiv.org/pdf/2301.08210) (DeepMind / 2023): A general introduction to GNNs
-   **W44**: [Graph Attention Networks (GAT)](https://arxiv.org/pdf/1710.10903) (University of Cambridge / 2018): Adding attention mechanisms to GNNs
-   **W45**: [TacticAI](https://arxiv.org/pdf/2310.10553) (DeepMind / 2023): An AI assistant for football tactics

The TacticAI paper sparked discussions about how AI can complement human decision-making in sports, offering tools for analyzing strategy and improving team performance.

---

### 🖼️ **Block 4: 3D Reconstruction**

In the final block, we explored **3D reconstruction** with a focus on **Neural Radiance Fields (NeRF)**, which have been a significant breakthrough in the field.

-   **W46**: [NeRF](https://arxiv.org/abs/2003.08934) (UC Berkeley / 2020): Representing Scenes as Neural Radiance Fields for View Synthesis
-   **W47**: [PyTorch3D](https://github.com/facebookresearch/pytorch3d/tree/main/projects/nerf) (Meta / 2021): A closer look at the implementation and training details of NeRF

Understanding the mechanics behind NeRF helped clarify how these methods generate highly realistic 3D reconstructions from simple 2D images.

---

### 🗣️ **Industry Talks**

In the last weeks of the semester, we hosted two speakers who shared their work and experiences with real-world AI applications:

-   **W48**: [Gustav Hansen](https://www.linkedin.com/in/gustav-l-k-hansen-0b175316a/) (ML Researcher at [Veo Technologies](https://www.veo.co/)): Gustav presented his research on encoding football game dynamics for tasks like action recognition and tactical analysis.

-   **W49**: [Frederik Warburg](https://www.linkedin.com/in/frederikwarburg/) (Head of AI at [Teton](https://www.teton.ai/)): Frederik talked about Teton’s AI-powered system for monitoring patients, discussing the challenges and opportunities of applying AI in healthcare.

---

### 🔮 **Closing Thoughts**

The block structure made it easier to focus on specific topics, and the variety of papers and speakers this semester gave us plenty of perspectives to consider. As we plan for next semester, we’re excited to build on this format and continue exploring new areas of AI.

Thanks to everyone who participated and made this semester a success. See you in Spring 2025!
