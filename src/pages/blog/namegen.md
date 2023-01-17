---
id: namegen
title: Namegen
author: Mika Senghaas
description: Namegen is full-stack project that trains and deploys a custom RNN for novel name generation
date: 07-01-2022

imgSrc: /posts/aitu-linkedin.png
layout: ../../layouts/BlogLayout.astro
---

**Namegen** is a full-stack summer project of mine. The core product is a \*trained recurrent network model for natural language generation, written
from scratch in PyTorch. The model generates novel names for people, companies or whatever you want to name by having learned from a large corpus of
names from around the world.

I built a full-stack web application around the machine learning model including a backend structure for user authentication (using server-side
session cookies) to store liked names in a PostgreSQL database.

_However, as of November 2022 my hosting service Heroku does not offer free tiers, so the backend (and therefore the app's functionality) is
unavailable_

You can still browse through the source code for the frontend and backend (including the training, evaluaton and deployment of the RNN Pytroch model)
on [GitHub](https://www.github.com/namegen) and you are also welcome to check out the _broken_ webapp at
[https://www.namegen.de](https://www.namegen.de).