---
layout: ../../layouts/BlogLayout.astro
slug: musiclm
title: Second meeting and MusicLM 📻
description: In our second meeting, we explored the space of audio generation from text description. This time, with many more members than the last time!
authors:
  - Ludek Cizinsky
  - Mika Senghaas
format: blog
tags:
  - aitu
  - second-meeting
  - musiclm
image: 
  src: /public/posts/musiclm-group.png
  alt: Group photo of AITU
published: 02/13/2023
---


Welcome to the second blog post of AITU ✋ After our first post, we received many positive feedback as well as applications to join us. Therefore, we are more than happy to say that AITU has now **11 members** with various backgrounds and years of education. During the meeting, we went over [MusicLM paper](https://arxiv.org/pdf/2301.11325.pdf) released by Google at the of January this year. MusicLM shows how to generate audio of varying length from a text description. ([try it yourself](https://google-research.github.io/seanet/musiclm/examples/)) We summarise the main takeaways below, enjoy! 👇

<br/>

![AITU second meeting group photo](/public/posts/musiclm-group.png)

<br/>

### 📻 MusicLM summary

---

**🔖 Intro**. MusicLM is a sequence-to-sequence generative model that maps input text description to the corresponding audio. While there are already text-to-audio models (e.g. [Riffusion](https://www.riffusion.com/)), they either generate high-quality music that is inconsistent over long periods or audio that is coherent but lacking high-quality. The main challenge for MusicLM was therefore to generate high-quality music that  consistently adheres to the text prompt over long periods of time.

<br/>

**😕 Challenges.** While there has been immense success of generative models in the fields such as NLP (ChatGPT) or Computer Vision (DALL-E), the text-to-audio filed introduces many new challenges. First, itk is relatively easy to describe image compare to audio. Even if the audio description is perfect, the amount of input information is disproportionate to the expected outcome. For instance, imagine I tell you to compose a 5 minute song whose description is *melodic techno*, pretty hard, right? 🤯 Finally, given the novelity of the text-to-audio field, there is a lack of training paired text-audio datasets which is a backbone of any machine learning project.

<br/>

**🧠 Building on previous papers.** MusicLM is a result of several previous research papers. In fact, we see the novelity of the MusicLM in the way researchers from Google combined these papers together. 

![MusicLM map of previous papers](/public/posts/musiclm.png)

In particular, MusicLM is building on:

- [AudioLM](https://google-research.github.io/seanet/audiolm/examples/) is a generative audio-to-audio model, i.e., based on the initial audio input, it produces subsequent audio in the continuation of the input. Therefore, MusicLM can be seen as a natural progression of the AudioLM in a sense that instead of using audio as an input, MusicLM uses text. Finally, AudioLM solves two key challenges. First, to keep the model's output consistent over longer period, AudioLM translates the continuous audio signal into discrete 🔤 `semantic tokens` that capture things such as local melody, harmony or rhytm. Second, it is equally important to also produce audio with high quality. This is ensured via 🔈 `accoustic tokens` which capture details such as recording conditions. For more details, we suggest reading Google's [blog post](https://ai.googleblog.com/2022/10/audiolm-language-modeling-approach-to.html) about AudioLM.

- [MuLan](https://arxiv.org/abs/2208.12415) translates text and audio into a joined embedding space. I know this sounds very cryptic, but the idea is rather simple. Imagine your favorite song and then think of some corresponding description. You then want to translate the song and the text description into embeddings (vectors) of same dimension such that they are as close as possible. As a result, if you give me a text of your favorite song, I can look up this joint embedding space and find the corresponding song easily. That is actually cool, is not it? 🤩

<br/>

**👩‍🔬 Glueing things together.** Now, let's talk briefly how these two papers are combined together. The figure below taken from the original paper describes the training procedure.

![MusicLM training](/public/posts/musiclm-training.png)

First, notice that during training, only audio data is needed. This is signifficant since there is no need for annotation of the audio data as such the model can be trained on signifficantly larger amount of data. Second, `semantic` and MuLan `audio` tokens are extracted and concatenated together. These are then used to predict next `accoustic` token. Finally, the inference part as depicted on the figure below.


![MusicLM inference](/public/posts/musiclm-infer.png)

First, the text description is translated into MuLan `text` tokens. Based on these, corresponding `semantic` tokens are predicted. Finally, the concatenation of both types is used for prediction of `accoustic tokens`. The `accoustic` tokens are then mapped to the actual audio output using SoundStream's decoder. 

<br/>

### 🔮 MusicLM key takeaways

---

**🌟 State-of-the-art.** MusicLM pushed the boundary of the state-of-the-art in text-to-audio generation space. The model is not only capable of generating consistent audio over longer period of time, the audio is also of high quality.

**🪫 Lack of domain data.** Compare to other fields such as NLP or Computer Vision, there is lack of training text-audio data. MusicLM shows a possible workaround by using MuLan text and audio embeddings which are both part of the same embedding space. In addition, as part of the MusicLM paper, new evaluation text-audio dataset called MusicCaps has been released.

**🧪  Creative evaluation.** Evaluating generative AI is difficult in all domains, because there is not one single “gold” output. Therefore, the Google research team had to get creative to contrast MusicLM with previous work.  They used public models that give scores for the quality of music (FAD score), use classifiers that predict a class label given audio inputs and compare the resulting distributions of class labels between the original audio and generated audio using KL divergence and even used the good-old subjective human voting approach, where they would simply ask experts, which  of two audio clips is better output given the text prompt. Overall, it seems that there is work to be done and that the field lacks common benchmarks and metrics.

### 📣 Stay in touch

---

That's is for this week, hope you enjoy reading this post. 😊 To stay updated about our activities, make sure you give us a follow on the [LinkedIn](https://www.linkedin.com/company/aitu-dk/) and [subscribe](https://aitu.group/#newsletter) to our newsletter. Any questions or ideas for talks, collaboration etc.? Drop us a message at [hello@aitu.group](mailto:hello@aitu.group).
