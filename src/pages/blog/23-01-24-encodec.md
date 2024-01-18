---
layout: ../../layouts/BlogLayout.astro
slug: 23-01-24-encodec
title: High Fidelity Neural Audio Compression
description: 
    High Fidelity Neural Audio Compression
authors:
  - Leo Pinetzki
format: paper
tags:
  - compression
  - audio
  - reading group
ogImage: 
  src: /posts/23-01-24-encodec/ogImage.png
  alt: Paper Image
banner: 
  src: /posts/23-01-24-encodec/banner.png
  alt: Paper Title
published: 01/23/2024
---
The paper "High Fidelity Neural Audio Compression" introduces a cutting-edge, real-time audio codec that leverages neural networks to achieve high-fidelity audio compression. It presents a streaming encoder-decoder architecture with quantized latent space, trained using a single multiscale spectrogram adversary to simplify and expedite the training process. The paper also introduces a novel loss balancer mechanism to stabilize training, decoupling the choice of hyper-parameters from the typical scale of the loss. Furthermore, it demonstrates the use of lightweight Transformer models to further compress the obtained audio while maintaining real-time performance. The paper's extensive subjective evaluation, including MUSHRA tests and an ablation study, showcases the superiority of the proposed approach over baseline methods across various audio settings, such as speech, noisy-reverberant speech, and music, at both 24 kHz monophonic and 48 kHz stereophonic audio. The availability of code and samples on GitHub, along with the paper's featured certification and reproducibility certification, underpin the significance and reliability of the research.
Link to paper: [https://arxiv.org/abs/2210.13438](https://arxiv.org/abs/2210.13438)
