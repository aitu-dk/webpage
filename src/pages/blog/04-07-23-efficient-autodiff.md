---
layout: ../../layouts/BlogLayout.astro
slug: 04-07-23-efficient-autodiff
title: Efficient and Modular Implicit Differentiation
description: 
  The biggest advancements in AI are possible due to availability of autograd. This method takes this one step further.
authors:
  - Leo Pinetzki
format: paper
tags:
  - autograd
  - differentiation
ogImage: 
  src: /posts/04-07-23-efficient-autodiff/ogImage.png
  alt: Art
banner: 
  src: /posts/04-07-23-efficient-autodiff/banner.png
  alt: Art
published: 07/03/2023
---
Autograd enables us to push the limits of machine learning by automatically calculating gradients. This levitates us from manually deriving and implementing the gradients. This technique comes to its limits when trying to solve a Bi-Level optimization problem (hyperparameter, meta-learning). This paper proposes a new system aimed at solving this using existing autograd systems by leveraging a mapping function to define optimality.

Link to the paper: [https://arxiv.org/abs/2105.15183](https://arxiv.org/abs/2105.15183)