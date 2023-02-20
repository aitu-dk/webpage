---
layout: ../../layouts/BlogLayout.astro
slug: vit
title: Is An Image Worth 16x16 Words? 🖼️
description: 
authors:
  - Mika Senghaas
format: blog
tags:
  - computer-vision
  - transformers
  - training-at-scale
  - google
image: 
  src: /posts/vit.png
  alt: Vision Transformers
published: 02/20/2023
---

Welcome and thanks for tuning into this week's AITU blog post 🙌. With again many new members, we continued our "Transformer" journey. After having explored how Transformers are used in the [text-to-audio sphere](https://aitu.group/blog/music-lm), we were eager to find out how to extend the architecture to computer vision.

The paper with the catchy title [An Image Is Worth 16x16 Words - Transformers for Image Recognition at Scale](https://arxiv.org/abs/2010.11929) by Google Research was published in 2020 proposes the **Vision Tranformer (ViT)** architecture, which extends the traditional Transformers to handle images as input for classification tasks.

The paper is considered a milestone in the computer vision field, crushing various benchmarks in image classification. It marks a change of reign in the computer vision land that was dominated by convolutional architectures in previous years. In this blog posts we summarise the paper's background, main architectural ideas, results and of course our own thoughts. Enjoy! 🤗

<br/>

![Discussing Vision Transformers](/posts/vit-group.png)

<br/>

### 📻 Vision Transformers

---

<br/>

**📍 Background.** The paper [Attention Is All You Need](https://arxiv.org/abs/1706.03762) by Vaswani et. al from 2017 introduced the self-attention mechanism. It allowed to model complex, long-term dependencies in sequential input data in a computationally light way. The architecture was originally proposed for machine translation, but was soon adapted into various NLP tasks, like text classification, PoS tagging, named-entity recognition (NER) and more - achieving SOTA performances in almost all. Nowadays, Transformers are the de-facto standard in natural language processing. However, as of the 2021, its adaption to computer vision is still limited. In computer vision tasks like image classification, object detection or image segmentation, convolutional architectures, like [ResNet](https://arxiv.org/abs/1512.03385), dominate.

<br/>

**🔖 Previous Work**. This of course does not mean that people did not try to adapt Transformers to computer vision. But, how does one parse an image to feed it as a sequence of tokens? Simply treating every pixel as a token does not work, as it does not scale to larger images. The computational complexity of self-attention grows quadratically with the number of input tokens, making pixel-level attention essentially infeasible. Researchers therefore came up with compromises, e.g. applying self-attention in small neighbourhoods of pixels, or pre-processing images (reduce image resolution and colour space) to apply pixel-level self-attention. None of these approaches yielded great results. [Cordonnier et. al](https://arxiv.org/abs/1911.03584) (2020) proposes an architecture conceptually very close to the ViT as proposed by Google (except using smaller patch sizes), but failed to prove the performance potential due to a lack of resources for large-scale training. While we acknowledge Google's contribution, their research should receive more praise (at least more than 300 citations). So, also go check out their [paper](https://arxiv.org/pdf/1911.03584.pdf)! 🤗

<br/>

**🏗️ The Architecture.** The research team at Google set out to "_[...] apply the Transformer architecture to images with the fewest possible modifications_". A Transformer block expects a sequence of embedded tokens as an input sequence. Thus, the key question was how to extract a one-dimensional sequence of tokens from a two-dimensional image. ViT propose the following translation, which is also shown in the visualisation taken from the paper. 👇

![High-Level Architecture of ViT](/posts/vit-architecture.png)

1. Cut an image input of size into fixed-sized patches.
2. Flatten each of the patches into a one-dimensional vector.
3. Linearly project each flattened patch into a continuous-dense vector representation.
4. Concatenate each projection patch (called patch embeddings) with a learned positional embedding, which denotes the position the patch was originally extracted from.
5. Append a `class` token at the start of the sequence.

Given these simple pre-processing steps, the image can be passed through multiple layers Tranformer Encoder blocks (_Note, that it uses encoder blocks, since each patch should be able to attend to each patch_). The final prediction for the class label is made by placing a shallow classification head (shallow mmlti-layer perceptron (MLP)) over the final representation of the `class` token.

<br/>

**🎈 Results.** The efficiency in training and inference of the Transformer architecture on modern hardware (GPUs/ TPUs) allowed Google to train their ViTs on truly large-scale. Despite the fact, that the model fails to model some of the features that are inherent to image data, ViT set new state-of-the-art performances on various benchmarks for image classification. The below table shows three versions of their ViT against two of the previous SOTA models, which are [ResNet]() and [Noisy Student](). It is apparent that ViT perform best across all benchmarks with less training effort.

![ViT Performance on Common Benchmarks](/posts/vit-performance.png)

<br/>

### 🔮 Our Key Takeaways

---

<br/>

**🌟 State-Of-The-Art.** When trained at large scale Google's ViT pushed the boundary in the performance of image recognition on numerous benchmarks. In doing so it started a new era of Transformer-based models in the computer vision fields. We encourage you to try them out. They are open-sourced, and e.g. accessible on [Huggingface](https://huggingface.co/models?pipeline_tag=image-classification&sort=downloads).

<br/>

**🤌 Keep it Simple.** One thing about ViT we found especially remarkable: The researcher's self-proclaimed goal was to "_apply the standard Transformer architecture directly to images, with the fewest possible modifications_". This led to a model, that at its core was not designed to handle image data (and its inherent features, like strong local correlation of pixels). Our groups was surprised how a model, inferior in capturing some of the inherent properties of its input data, still outperformed many of the most powerful convolutional neural networks, that were specifically designed for image data.
The take-away from this is beautfully summarised by the research team:

>  Large-Scale Training trumps Inductive Bias

<br/>

**🖼️ Handling Medium-Sized Images.** One of the key challenges when trying to apply the Transformer architecture on images was to decide what constitutes a token. In the NLP domain the definition is relatively straight-forward. However, when dealing with image data treating each pixel as a single token  does not scale as attention scores are computed pair-wise (quadratic running time) in each Transformer layer. One of the previous papers showed that a viable solution could be to split the image into 2x2 patches. This works for images with small resolution, however again scales poorly for images with higher resolution. Therefore, Google's ViT uses patches of size 16x16 pixels enabling the model to handle even medium resolution images.

<br/>

**🆘 Limited to Image Recognition.** As of the release of the paper, ViT are limited to image classification. It is yet to be explored how the architecture can be extended to other common computer vision tasks, like object detection or image segmentation.

### 📣 Stay in touch

---

That's is for this week, hope you enjoyed reading this post. 😊 To stay updated about our activities, make sure you give us a follow on the [LinkedIn](https://www.linkedin.com/company/aitu-dk/) and [Subscribe to our Newsletter](https://aitu.group/#newsletter). Any questions or ideas for talks, collaboration etc.? Drop us a message at [hello@aitu.group](mailto:hello@aitu.group).
