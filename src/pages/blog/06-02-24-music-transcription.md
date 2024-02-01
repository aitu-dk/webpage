---
layout: ../../layouts/BlogLayout.astro
slug: 06-02-24-music-transcription
title: MT3: Multi-Task Multitrack Music Transcription
description: 
    MT3: Multi-Task Multitrack Music Transcription
authors:
  - Julian M Kleber
format: paper
tags:
  - transcription
  - audio
  - reading group
  - music
  - sheet music
ogImage: 
  src: /posts/06-02-24-music-transcription/ogImage.jpg
  alt: Paper Image
banner: 
  src: /posts/06-02-24-music-transcription/banner.jpeg
  alt: Paper Title
published: 02/06/2024
---

Automatic Music Transcription (AMT), inferring musical notes from raw audio, is a challenging task at the core of music understanding. Unlike Automatic Speech Recognition (ASR), which typically focuses on the words of a single speaker, AMT often requires transcribing multiple instruments simultaneously, all while preserving fine-scale pitch and timing information. Further, many AMT datasets are "low-resource", as even expert musicians find music transcription difficult and time-consuming. Thus, prior work has focused on task-specific architectures, tailored to the individual instruments of each task. In this work, motivated by the promising results of sequence-to-sequence transfer learning for low-resource Natural Language Processing (NLP), we demonstrate that a general-purpose Transformer model can perform multi-task AMT, jointly transcribing arbitrary combinations of musical instruments across several transcription datasets. We show this unified training framework achieves high-quality transcription results across a range of datasets, dramatically improving performance for low-resource instruments (such as guitar), while preserving strong performance for abundant instruments (such as piano). Finally, by expanding the scope of AMT, we expose the need for more consistent evaluation metrics and better dataset alignment, and provide a strong baseline for this new direction of multi-task AMT.

Link to paper: [https://arxiv.org/abs/2111.03017](https://arxiv.org/abs/2111.03017)

[Banner](https://en.wikipedia.org/wiki/Sheet_music#/media/File:Tibetanmusicalscore.jpg)
[Picture](https://commons.wikimedia.org/wiki/File:Portrait_of_Ludwig_van_Beethoven,_composer_%281770-1827%29_-_Archivio_Storico_Ricordi_ICON010453_B.jpg)