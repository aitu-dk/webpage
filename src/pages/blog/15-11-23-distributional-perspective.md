---
layout: ../../layouts/BlogLayout.astro
slug: 15-11-23-distributional-perspective
title: A Distributional Perspective on Reinforcement Learning
description: 
    A Distributional Perspective on Reinforcement Learning
authors:
  - Jarek Liesen
format: paper
tags:
  - reinforcement-learning
  - reading-group
  - atari
ogImage: 
  src: /posts/15-11-23-distributional-perspective/ogImage.png
  alt: Paper Image
banner: 
  src: /posts/15-11-23-distributional-perspective/banner.png
  alt: Paper Title
published: 11/15/2023
---
In their paper "A Distributional Perspective on Reinforcement Learning" (2017), Marc G. Bellemare, Will Dabney, and Rémi Munos advocate for a paradigm shift in how reinforcement learning is approached by emphasizing the significance of the value distribution. Rather than focusing solely on the expectation of the return, as is common in traditional reinforcement learning, the authors assert the fundamental importance of understanding the distribution of the random return received by an agent. The paper presents theoretical insights into policy evaluation and control settings, revealing a notable distributional instability in the latter. Leveraging this distributional perspective, the authors introduce a novel algorithm that applies Bellman's equation to learn approximate value distributions. Evaluation on the Arcade Learning Environment demonstrates state-of-the-art results, underscoring the pivotal role of the value distribution in approximate reinforcement learning. The paper concludes by synthesizing theoretical and empirical evidence, illuminating the ways in which the value distribution significantly influences learning in the approximate setting.

Link to the paper: https://arxiv.org/abs/1707.06887
