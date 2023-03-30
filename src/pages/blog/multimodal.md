---
layout: ../../layouts/BlogLayout.astro
slug: multimodal 
title: LLM with Eyes 👀️ 
description: 
authors:
  - Lukas Rasocha 
format: paper
tags:
  - transformer
  - agi
  - multimodality 
  - nlp
ogImage: 
  src: /posts/multimodal/agi.jpeg
  alt: AGI
banner: 
  src: /posts/multimodal/agi.jpeg
  alt: AGI
published: 03/31/2023
---

Hello and welcome to our weekly blog post! 🙌 This week we take a look into yet another recently published [paper](https://arxiv.org/abs/2302.14045) called **Language Is Not All You Need: Aligning Perception with Language Models**. 🙉🙈🙊 The paper introduces an architecture that is able to perceive two modalities, or in other words, multimodal large language model (MLLM) called **Kosmos-1**, which is, as the authors claim, a necessary step towards **Artificial General Intelligence (AGI)**.

<br/>

### Multi-Modality and AGI [[1]](https://courses.lumenlearning.com/waymaker-psychology/chapter/multi-modal-perception/)

---

🌧️ **Multi-Modality**️. Imagine if you were caught in heavy rain. You could talk about the event considering each of your senses independently. You could feel the rain on your skin, smell the wet ground and hear the rain drops. All of this information, however, would be about the same thing. Your perception of the heavy rain. We humans experience this event as a unified bundle of sensations (**multi-modal perception**). In the field of machine-learning, it has been a tradition to study these various senses independently (**narrow AI**). Giving a model the ability to observe context of information supplied by multiple sensory modalities at the same time would lead to an AI that can generalise better to all kinds of problems. 🦸

🧠 **AGI** is often seen as the next step in AI development after **narrow AI**. There is currently no AGI system that exists today, but with the introduction of **GPT-4** and other rapid developments in the AI field there has been a lot of striking [conversations](https://marginalrevolution.com/marginalrevolution/2023/03/existential-risk-and-the-turn-in-human-history.html) about AGI and its benefits / consequences. For example just [a few days ago](https://www.theguardian.com/technology/2023/mar/29/elon-musk-joins-call-for-pause-in-creation-of-giant-ai-digital-minds) more than 1000 AI experts and Elon Musk have called for pause in creation of large AI systems at least until we can be confident that the risks can be manageable.

<br/>

### 🏗 Architecture
---

Now the question is, how do we communicate inputs that are inheritely **different** to the same model architecture? 🧩 The authors directly applied the idea from another [paper](https://arxiv.org/pdf/2206.06336.pdf) from Microsoft which proposes to use Language Models as a **general-purpose-interface** to other various foundation models. In other words, LLM is being used as a main module to which other perception modules that are trained to handle different specific modals are docked.


![General Purpose Interface](/posts/multimodal/general-purpose-interface.png)


**Note:** Kosmos-1 as of now can handle "only" images and textual input

<br/>

More specifically, to transform an image to a form that can be understood by the **general-purpose-interface** (Transformer Decoder), they used **visual transformers (ViT)** which we discussed in more detail in our last month's [blog post](https://www.aitu.group/blog/vit). After obtaining the image **embeddings** from the **perception module (ViT)**, they are directly used together with **text** and special **tags** as an input in the following form: 

![Input examples to General Purpose Interface](/posts/multimodal/input.png)

<br/>

### 📊 Evaluation
---

The model was evaluated using a lots of different techniques, the most interesting out of them was the evaluation of its **fluid reasoing** ability of humans.

> *“the capacity to think logically and solve problems in novel situations, independent of acquired knowledge”*

For this test they used a method well known in the field of Neuroscience called **Raven’s Progressive Matrices** 🐦 which is one of the most common tests to evaluate nonverbal reasoning of humans (also sometimes used as a measurement for IQ). Given eight images presented in a **3 × 3 matrix**, the task is
to identify the following element from six similar candidates.


![Raven's IQ test](/posts/multimodal/raventest.png)

Even though the model didn't achieve outstanding results (only a slight improvement over a random choice), it is still exciting to see how far we have gotten, from simple **accuracy tests** to difficult techniques that are used to evaluate **IQ's** of humans.


![Raven's IQ test results](/posts/multimodal/result.png)

### 🔮 Key Takeaways
---

- 🧠 Necessary step towards **AGI**
- 🧐 Enables **LLMs** to acquire common sense knowledge
- 🤏 Compared to current LLMs, **Kosmos-1** is quite small with **1.6 B** parameters
- 🦸 LLM as **general purpose interfaces** serve as a universal task layer
- 📈 A lot of room for improvements by scaling up the model and adding more **perception modules**

Let me finish this blog post with a quote from a very excited AI enthusiast:

> *“Like an AI will understand the "concept" of anything so much better, so much deeper, if it knows a representation of that concept in multiple modals. We're in the future man!”*



### 📣 Stay in touch

---

That's it for this week. We hope you enjoyed reading this post. 😊 To stay updated about our activities, make sure you give us a follow on [LinkedIn](https://www.linkedin.com/company/aitu-dk/). Any questions or ideas for talks, collaboration, etc.? Drop us a message at [hello@aitu.group](mailto:hello@aitu.group).
