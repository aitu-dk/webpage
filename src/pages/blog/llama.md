---
layout: ../../layouts/BlogLayout.astro
slug: llama 
title: LLaMA 🦙 - the new LLM by Meta
description: 
authors:
  - Ludek Cizinsky
  - Mika Senghaas
format: paper
tags:
  - transformers
  - nlp
ogImage: 
  src: /posts/llama/ogImage.png
  alt: llama in the library 
banner: 
  src: /posts/llama/banner.png
  alt: llama in the library 
published: 03/23/2023
---

Welcome to AITU's weekly blog post! 🙌 Last week, we took a closer look at the new family of large language models (LLMs) proposed by Meta - [LLaMA 🦙](https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/). LLaMA stands for Large Language Model Meta AI, a 'creative' acronym 😅. Shortly after its release, Twitter became flooded with posts about it, including [one](https://twitter.com/ylecun/status/1629189925089296386?s=20) by Meta's Chief AI Officer Yann LeCun.

LLaMA is Meta's effort to democratize access to large language models by training and releasing the novel model in an 'open' source manner. Importantly, LLaMA-65B, the largest model from the family, vastly outperforms GPT3 which has 150B parameters. The idea is simple: instead of training large models whose inference becomes costly, it is better to train smaller models for a longer time and on more data. Without further ado, let's jump right into the topic!


### LLaMA: Open and Efficient Foundation Language Models

---

<br/>

📍 **Context**. Recently, there has been a new line of work that focuses on the paradigm of "more parameters = better performance." However, a recent [paper](https://arxiv.org/abs/2203.15556) by Hoffmann et al. (2022) shows the opposite: the best performances are achieved by smaller models trained on more data, rather than larger models. (for given compute budget) Hoffmann et al.'s paper only looks at the training budget. However, if we consider the **inference budget**, especially when serving the model at **scale**, it can easily become more expensive than training. As summarised in the paper:

> In this context, given a target level of performance, the preferred model is not the fastest to train but **the fastest at inference**, and although it may be cheaper to train a large model to reach a certain level of  performance, **a smaller one trained longer will ultimately be cheaper at inference.**

<br/>

📚 **Pre-training data.** LLaMA was trained solely on **publicly available** datasets, including Wikipedia, Books, and Stack Exchange. The complete overview can be seen in the figure below.

![Pre-training data overview](/posts/llama/pretraining-data.png)

Each dataset was carefully preprocessed to ensure **high quality input** data. For instance, only highly ranked answers from Stack Exchange were chosen. Additionally, high-quality sources, such as books, were shown more often (see the number of epochs) than lower quality ones. Finally, it is important to pause for a moment and appreciate the fact that we have been able to gather such a vast amount of data over the **past 20 years**. Without this data, LLMs would not be possible. 👏

<br/>

🏗️ **Model architecture.** Since the original release of [Transformers](https://arxiv.org/abs/1706.03762) by Vaswani et al., there have been new ideas for improving the architecture. In the LLaMA paper, they adopt some of these:

- **Pre-normalization. ([GPT3](https://arxiv.org/abs/2005.14165))** To improve training stability, they normalise the input to each sublayer instead of normalising the output.
- **SwiGLU activation function ([PaLM](https://arxiv.org/abs/2204.02311)).** This is a new activation function that replaces **ReLU**.
- **Rotary Embeddings [[GPT Neo](https://arxiv.org/abs/2204.06745)]**. They add rotary positional embeddings at each layer of the network instead of absolute positional embeddings.

Although these are important improvements, AI researcher [Yannic Kilcher](https://www.ykilcher.com/) attributes the success of the LLaMA model rather to the exceptional engineering effort that enabled the model's efficient implementation and training procedure, as discussed below. 👇

<br/>

⚡ **Optimisations**. While the optimizations are important, it is beyond the scope of this post to go into much technical depth. At a high level, the optimizations were:

- An efficient implementation of the **causal multi-head attention operator** that does not store the attention weights or compute the key/query scores that are masked due to the causal nature of the language modeling task (next token prediction). In simple words, instead of doing matrix multiplication with the whole matrix, you choose only its one half where there are non-zero values.
- A **reduction** in the amount of **activations** that are recomputed during the **backward pass** using checkpointing via a custom implementation of the backward function for transformer layers instead of relying on PyTorch's autograd. A great 1-minute explanation can be found [here](https://youtu.be/E5OnoYF2oAk?t=1349).

<br/>

💪 **Training:** Model sizes range from **6.7B** to **65.2B**, using standard 32-bit float. Therefore, loading the model into memory requires **26.8GB to 260GB**! However, with **quantization** (a smart way of reducing model size), it is possible to run the smallest model on a Raspberry Pi. 🤯 The figure below provides an overview of all the models.

![Models overview](/posts/llama/models-overview.png)

The models were trained on **2048 A100 GPUs** with 80GB of RAM, and a processing capacity of 380 tokens/sec/GPU. Despite this, training the largest model for 1.4T tokens still took 21 days. The authors of the paper argues that by releasing the model to the public, it balances out the CO2 emissions produced. 😅 Finally, the figure below showcases the training curves. For unknown reasons, the training for the smaller models stopped at 1T tokens despite the clear downward trajectory. Therefore, the smaller models still have room for improvement. 💫

![Loss curves of the models](/posts/llama/training-curves.png)

<br/>

📊 **Results:** The models underwent testing on various benchmark datasets with tasks that ranged from **common reasoning** to **code generation** and **mathematical reasoning**. For example, when tested on natural language questions, LLaMA models performed as well as, if not better than, much larger models such as PALM, and even outperformed larger models like GPT3 (150B parameters). The models were also tested for toxicity and bias. Interestingly, when asked to generate toxic responses in a more respectful manner, the toxicity score improved for all models except for the largest one, whose score increased. 🤷‍♂️ Overall, the results demonstrated that the LLaMA family of models, despite being smaller, outperformed GPT3 on most tasks. 💯 



### 🔮 Key Takeaways

---

<br/>

⚖️ **Non-profit open source vs. for-profit and secretive.** Meta is one of the major contributors to open-source. Widely used frameworks such as [PyTorch](https://pytorch.org/) or [ReactJS](https://react.dev/) have their roots at Meta. While there has been criticism of Meta's decision to release the LLaMA models "only" under a non-commercial license, it is still a step forward compared to companies like OpenAI, who choose to be secretive about their work in an attempt to gain a competitive advantage.

💪 **Trend of foundation models.** Thanks to the great work of the community around [Hugging Face](https://huggingface.co/), state-of-the-art **pre-trained** models are available via a simple API to anyone. Most of them can even run on an average laptop. As a result, individuals and businesses of all sizes can take advantage of these models and fine-tune them for their specific tasks, such as chatbots.

🔬👨‍💻 **Engineering > research/science.** Recent advancements in the AI field seem to be the result of great engineering effort rather than scientific discovery. The LLaMA paper is a great example of this.

### 📣 Stay in touch

---

That's it for this week. We hope you enjoyed reading this post. 😊 To stay updated about our activities, make sure you give us a follow on [LinkedIn](https://www.linkedin.com/company/aitu-dk/). Any questions or ideas for talks, collaboration, etc.? Drop us a message at [hello@aitu.group](mailto:hello@aitu.group).