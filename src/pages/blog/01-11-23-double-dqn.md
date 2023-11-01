---
layout: ../../layouts/BlogLayout.astro
slug: 01-11-23-double-dqn
title: Dueling Network Architectures for Deep Reinforcement Learning
description: 
    Dueling Network Architectures for Deep Reinforcement Learning
authors:
  - Jarek Liesen
format: paper
tags:
  - reinforcement-learning
  - reading-group
  - atari
ogImage: 
  src: /posts/01-11-23-double-dqn/ogImage.png
  alt: Paper Image
banner: 
  src: /posts/01-11-23-double-dqn/banner.png
  alt: Paper Title
published: 11/01/2023
---
"Deep Reinforcement Learning with Double Q-learning" by Hado van Hasselt, Arthur Guez, and David Silver, published in 2016, presents a significant breakthrough in reinforcement learning. The paper addresses the issue of action value overestimation in Q-learning and introduces a novel solution. It highlights the prevalence of overestimations in practice and their negative impact on performance. By extending the concept of Double Q-learning to large-scale function approximation and adapting it to the DQN algorithm, the authors effectively reduce overestimations, leading to substantial performance improvements in various games. This work not only identifies a key limitation in Q-learning but also demonstrates the potential for innovative algorithms to enhance reinforcement learning outcomes.

Link to the paper: https://arxiv.org/abs/1509.06461
