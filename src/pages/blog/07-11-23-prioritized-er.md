---
layout: ../../layouts/BlogLayout.astro
slug: 07-11-23-prioritized-er
title: Prioritized Experience Replay
description: 
    Prioritized Experience Replay
authors:
  - Jarek Liesen
format: paper
tags:
  - reinforcement-learning
  - reading-group
  - atari
ogImage: 
  src: /posts/07-11-23-prioritized-er/ogImage.png
  alt: Paper Image
banner: 
  src: /posts/07-11-23-prioritized-er/banner.png
  alt: Paper Title
published: 11/07/2023
---
The paper "Prioritized Experience Replay" by Tom Schaul, John Quan, Ioannis Antonoglou, and David Silver (2016) introduces a groundbreaking framework for enhancing the efficiency of reinforcement learning through prioritized experience replay. Departing from the traditional uniform sampling of experience transitions, this approach identifies and replays crucial transitions more frequently, allowing agents to learn more effectively from significant experiences. The authors implement this framework in Deep Q-Networks (DQN), a reinforcement learning algorithm renowned for achieving human-level performance in Atari games. The results are impressive, with DQN employing prioritized experience replay surpassing its uniform replay counterpart on 41 out of 49 games, establishing a new state-of-the-art benchmark and showcasing the potential of prioritized learning in advancing the capabilities of reinforcement learning algorithms.

Link to the paper: https://arxiv.org/abs/1511.05952
