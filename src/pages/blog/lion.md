---
layout: ../../layouts/BlogLayout.astro
slug: lion
title: Lion Optimisation 🦁
description: 
    Lion is a new optimisation technique claiming to outperform the current 
    state-of-the-art optimisation algorithm AdamW. In this blog post we dive
    into how the research team at Google Brain developed the algorithm and
    what makes it special.
authors:
  - Mika Senghaas
format: paper
tags:
  - optimisation-theory
  - symbolic-programming
  - program-search
ogImage: 
  src: /posts/lion/ogImage.jpg
  alt: The Lion Optimisation Algorithm
banner: 
  src: /posts/lion/banner.jpg
  alt: The Lion Optimisation Algorithm
published: 04/19/2023
---

Welcome to AITU's weekly blog post! 🙌 After weeks of high-level readings in the
space of large language models, this week we returned to one of the core
building blocks in any neural network: the **optimisation algorithm**, which
allows neural networks to learn from data.

In this blog post we will explain the core idea of gradient-descent based
optimisation of neural networks and then dive into a fascinating new
optimisation algorithm called **Lion** (again a creative acronym for Evo**L**ved
S**i**gn M**o**me**n**tum), which was recently published by a research team at
Google Brain. They claim that Lion outperforms the current state-of-the-art
optimisation algorithm [AdamW](https://arxiv.org/abs/1711.05101) on a wide
range of tasks.

Our group was fascinated with how the research team at Google derived the new
optimisation algorithm and we are excited to share our thoughts with you. Let's
get started! 🦁

### 💡 Gradient-Descent Based Optimisation

---

Before we dive into the details of the Lion algorithm, let's first recap the
core idea of optimisation: Optimisation theory is a branch of mathematics that
is concerned with one specific question:

> How do we find the values of a function that minimises/ maximises the value
> of the function?

For illustration purposes, let's consider a function `f` that takes a single
argument `x` and returns a single value `f(x)`. Also, let's constrain ourselves
to minimisation problems because any maximisation problem can be turned into a
minimisation problem (by realising that the maximum of a function is the minimum
of the negative function).

The goal is to find a value `x0`, such that `f(x0)` is smaller than the value 
`f(x)` for any other value `x`. **Figure 3** visualises how such a minimum looks
like in two-dimensional space.

<br />
<img 
  src="/posts/lion/minimisation.png" 
  alt="Drawing of Minimisation Problem"
  class="excalidraw"
/>

_Figure 1: The Minimisation Problem in Mathematics_

<br />

For simple forms of `f` calculus gives us all the tools we need to find the
value `x0` that minimises the function. However, for more complex functions
(such as the loss function in neural network training), it is often not possible
to find an analytical (_read: mathematical_) solution. In these cases, we need
to resort to **optimisation theory**.  The goal in optimisation theory is to
find an algorithmic (_read: step-by-step_) solution to obtain the values that
minimises a function.

The most commonly used algorithmic approach is called **gradient descent**,
which makes use of the concept that a function's value decreases fastest if we
move in the opposite direction of the function's gradient. Because of this,
taking small steps in the opposite direction of the gradient will eventually
lead to the minimum/ maximum value of the function. This leads to the classical
**gradient-descent** algorithm:

1. Initialise the value of `x` to a random value `x0`.
2. Compute the gradient of `f` at `x`.
3. Update `x` by subtracting the gradient from `x` (**update rule**)
4. Repeat steps 2 and 3 until convergence.

The iterative procedure is visualised in **Figure 2**. Here `x0` is a random
initial guessed, which is then updated by the update rule based on the gradient.
As can be seen, the **update rule** is the key to the gradient descent
algorithm. 

<br />
<img 
  src="/posts/lion/gd.png" 
  alt="Simplified Drawing of Gradient Descent Optimisation"
  class="excalidraw"
/>

_Figure 2: Simplified Illustration of Gradient Descent Optimisation_

<br />

Unfortunately, this simple update rule was often shown to not be sufficient to
train large neural networks. Problems arise, for example, when the learning rate
is too high, which can lead to the model diverging, or too low, which can lead
to a painfully slow convergence.

For this reason, it is an ongoing topic of research to design new gradient-based
update rules, that make the training of large neural networks more stable and
efficient. Over the past decades, researchers have come up with many concepts
such as **momentum**, **adaptive learning rates**, **weight decay**, and many
more. Most of these concepts are based on heuristics derived from real-world
experience.

### 🔭 Discovering New Update Rules

---

Instead of figuring out a new update rule by hand, the team at Google Brain
decided to **discover** a new update rule. This is a very exciting approach,
because it allows us to **automatically** find new update rules that are
**optimal** for a given task. In the first sentence of their paper they describe
their approach as follows:

> Algorithm Discovery as Program Search

There is a lot to unpack in this sentence, so let's take it one step at a time.
To understand what formulating the **discovery of algorithms** (in this case:
_update rules_ for gradient descent optimisation) as a **program search**
requires some preliminary work. 

**✨ Defining the Search Space.** Before you search something, you better define
what you are searching for. In this case, the search space is the **set of all
possible update rules** that mankind can think of. Since an update rule can be
written as an executable program (i.e. a sequence of instructions), the search
space is the set of all possible programs that can be written in a programming
language. The team at Google decided to narrow down the space a bit, by limiting
the set of allowed instructions to include for example assignment operations and
the most common math operations. Even with this limitation, the search space is
**infinitely large**. Not only that - it is also very **sparse**. This means
that out out the huge number of possible programs, only a very small fraction of
them actually perform well. The research team validated this by **generating two
million** random programs. Not a single of these programs performed better than
`AdamW`.

Nice, we know what we are searching for. But since the search space is so large
and sparse, just randomly guessing a program and hoping it will be better than
current state-of-the-art does not work. The Google Brain team came up with a
series of clever idea to make the search more **efficient**. At the core, they
take inspiration from process of evolution from nature.

> **Evolution** is the process in nature that leads to the
development of new species, and is - in simple terms - based on the fact that
random mutations in species might increase their chance of survival and
therefore increase their production rate.

**🧬 Genetic Algorithms.** Because of the impressive emergence of life that we
witness in nature everyday, scientists have tried to apply evolutionary
principles to other areas of science. **Genetic Algorithms** are one example of
this. They are search algorithms that are based on the **principles of natural
evolution**. The Google Team used a genetic algorithm to search for new update
rules. First, they generated a **population** of `P` random programs. Then, they
randomly chose `T < P` of these programs and evaluated each. The best-performing
program was selected as the **parent** and copied. The resulting **child** was
**mutated** and added to the population by replacing the oldest program in the
population. The process was then repeated many and many times until the overall
population's performance converged.

There are a couple of concepts in this algorithm procedure that we need to
explain. First, the **fitness** of a program in the population was measured by
training a simple neural network on simple **proxy task**. As all programs
(update rules) were trained on the same proxy task, the fitness of the update
rule could be measured as the downstream performance (e.g. **validation
accuracy**) of the neural network. Secondly, programs were **mutated** in three
different ways. They could be mutated by... 

- ...**inserting** a new statement,
- ...**deleting** a statement, or
- ...randomly **modifying** a single statement in the program

With all this, they could run an evolutionary search on the search space of 
update rules. However, the search was found to take too long to converge, and
the team employed further clever tricks to make the search even more efficient.

### ⏩ Efficient Evolutionary Search

---

To speed up the evolutionary search, the team at Google Brain employed a series
of clever tricks. The most important ones are:

<br />

**🔥 Warm Start.** This is a relatively straightforward one. Instead of starting
from a completely random population, the team at Google Brain started from a
population of `P` update rules that are known to perform well, like `AdamW`.

**🌴 Dynamic Pruning.** Dynamic pruning is used to prevent the evolutionary
algorithm from producing redundant or malfunctioning programs over time. Each
cycle checks the mutated children and discards them if they have errors or are
redundant with an existing algorithm in the population. 

**🕳️ Funnel Selection.** After the evolutionary search, there is a risk for update
rules being meta-overfitted to the proxy tasks, meaning that they perform well
on the proxy tasks but poorly on general tasks. To prevent this, the team
employed a **funnel selection** procedure. The idea is to select the best
performing programs on increasingly complex (novel) tasks.

**➖ Simplification.** From the small set of programs that were selected by the
funnel selection procedure, the team at Google Brain selected the overall "best"
program to be the most simple one. This was motivated by the heuristic that the
more simple a program, the more likely it is to generalise well to new tasks.

<br />

### 🦁 Finding Lion

---

The algorithm that was left: The **EvoLved Sign Momentum (Lion)** optimization
algorithm. Lion is a simple and effective optimization algorithm that is more
memory-efficient than Adam since it only keeps track of momentum. It also has
the same magnitude of update for each parameter, unlike adaptive optimizers. You
can see the pseudo-code for the full algorithm below:

<br />

![Lion](/posts/lion/lion.png)

_Figure 3: Pseudo-Code for Lion._

### 🔮 Key Takeaways

---

**🧠 Neuro-Evolution.** Evolutionary search and gradient-descent are both
optimisation techniques. On a meta-level, it is fascinating to see that we use
one (evolutionary search) to improve the other (gradient-based update rules).
This interesting subfield is referred to as neuro-evolution.

**🌳 Biomimicry.** Science taking inspiration from nature is a common pattern
that we have seen many times before (e.g. neural network architecture).
However, employing the evolution principle to algorithm discovery was new and 
fascinating to read about.

**🦁 Lion.** Lion is a new optimisation algorithm that was discovered through
the use of evolutionary search. It is a simple and effective algorithm that
outperforms state-of-the-art algorithm AdamW on a variety of tasks.

**📈 Compound Effect.** Even tiny improvements in core building blocks of
neural networks and their training (optimisation algorithms, matrix
multiplication, etc.) have the potential to have a large impact on the overall 
performance of the network. Lion is one example of this. Minor changes in the
update rule lead to improvements in downstream performance of up to 2% on some 
tasks.

### 📣 Stay in touch

---

That's it for this week. We hope you enjoyed reading this post. 😊 To stay
updated about our activities, make sure you give us a follow on
[LinkedIn](https://www.linkedin.com/company/aitu-dk/). Any questions or ideas
for talks, collaboration, etc.? Drop us a message at
[hello@aitu.group](mailto:hello@aitu.group).
