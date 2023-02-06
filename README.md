# AITU Webpage

This repository holds the source code for the AITU webpage.
The website is hosted on Vercel and can be accessed at [aitu.group](https://www.aitu.group).

## 🌟 Techstack

The website is built using the modern JS framework Astro and follows a minimal project setup.
It utilises native HTML, CSS, and JS (in .astro files) as much as possible. The packages used are:

- [Tailwind](https://www.tailwindcss.com) for styling
- [ThreeJS](https://www.threejs.org) for 3d rendering
- [Three Noise](https://www.npmjs.com/package/three-noise) for creating perlin noise vector field
- [Fontsource DM-Sans](https://fontsource.org/fonts/dm-sans) for custom font

We also use [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) to integrate Tailwind with Astro.

## 🚀 Project Structure

The project structure broadly follows the default `Astro` filestructure:

```plain
/
├── public/
│   └── authors/
│   └── posts/
│   └── assets/
│   └── ...
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   │   └── BlogLayout.astro
│   └── pages/
│       └── index.astro
│       └── blog/
│           └── index.astro
│           └── post.md
└── package.json
└── ...
```

The `public` directory contains all publicly available assets such as images, icons (including the favicon), and other metadata used by web crawlers for indexing the webpage. All global site assets directly reside in `/public` and should not be modified without good reason. Assets added over time should be saved in one of the following directories depending on the asset type:

- `public/authors` contains small images/ illustrations of all authors
- `public/posts` contains all assets directly related to blog posts
- `public/assets` contains all other assets

All newly static images should be compressed to a size of _max. 300KB_ and be in `png` format.

The `src` directory contains all source code, mostly .astro files which include JSX-like HTML syntax, (Tailwind-)CSS, and Java/Typescript support. The layout component holds two base layouts, that apply global styles. All styles are wrapped in the `Layout.astro` component and all blog posts are additionally wrapped in the `BlogLayout.astro` component. The pages component configures all available routes. By default, there are just three routes `/`, `/join`, and `/blog`. All individual blog articles are stored as Markdown files, see the _Writing a Blog Post section_ for details.

## 🧞 Contributing


Before the start, make sure you have installed [Github CLI](https://github.com/cli/cli#installation) and [Commitizen CLI](https://github.com/commitizen/cz-cli). If you want to contribute to this project, i.e. add blog articles (see more details in the section below), fix bugs or improve functionality, please fork this repository 

```bash
gh repo fork aitu-dk/webpage
```

To develop your change, create a new branch:

```bash
git branch -b <new-branch>
```

Make sure to also use the Commitizen for every commit on the branch

```bash
git cz
```

Once you are finished developing the feature, open a pull request to the `main` branch. Use the following command and follow the interactive prompt.

```bash
gh pr create
```

## 🗒️ Writing a Blog Post

### Clone/Pull Most Recent Version

Writing a blog post is easy. Make sure you have a local copy of the repository on your machine. If you don't already have that, clone the repository using `gh repo clone aitu-dk/webpage`, which will create a new directory `webpage` in your current working directory. If you have already cloned the project, make sure that you are working on the most up-to-date version of the repository to avoid merge conflicts. Type `git pull` to fetch the newest remote changes to your local repository.

To see the local version of your repository, spin up a local server using `astro dev` and visit it at `http://localhost:3000` in your web browser.

### Adding Blog Metadata

Now you can start working on your blogpost. Create a new file `<new-blogpost>.md` in the directory `src/pages/blog`. The first thing you wanna do is to add frontmatter to your blogarticle. As of now, the webpage does not provide a lot of error handling, so not providing the expected meta data about a post is likely to cause the site to crash. Below you will find the meta data for our very first blog article, feel free to copy it and then adjust with the correct information.

_Note: The file `src/utils/types.ts` defines a type `Frontmatter`. See it to know the precise types of all the fields._

```md
---
layout: ../../layouts/BlogLayout.astro
slug: intro-post
title: AITU's First Meeting! 🎉
description: 
  We are official! AITU is officially registered as a student organisation at ITU. In this post we talk about everything from the organisation's idea and mission, and provide some behind-the-scenes into the foundational work in the two months before semester start.
authors:
  - Ludek Cizinsky
  - Mika Senghaas
format: blog
tags:
  - welcome
  - aitu
  - first-meeting
image: 
  src: /assets/aitubanner.png
  alt: The official AITU Banner
published: 02/01/2023
---
```

_Note, that the `published` field required the dateformat MM/DD/YYYY and the `image` and `layout` fields require either relative paths from the blog articles directory (as can be seen in the `layout` field) or refer to public assets by prefixing the path with `/` (as can be seen in the `image` field)._
At this point, you should be able to visit the new blog article at route `http://localhost:3000/blog/<new-blogpost>` and see the meta information rendering correctly.

### Write the Article

You can then go ahead and write regular Markdown - all default `md` features, like headers, dividers, bold  and italic styles, links, images, ordered/unordered lists, blockquotes, ...

_Note, that we are looking to support `.mdx` features, such as including dynamic UI components. However, this is not yet supported._

### Adding Images

To add an image to your article, you need to follow two steps:

1. Add the image `example.png` into the `public/posts` directory (make sure it is an `.png` image and that you compressed it)
2. You can reference the image in your blog using regular `.md` syntax, like `![alt](/public/posts/example.png)`

_Make sure to include a descriptive alt tag for increased visibility._

### Adding Author Profile Image

If you have never authored a blog post before, just writing your name in the `author` metadata field will not magically make an image of you appear. In order for this to work, you will need to add your very own avatar into the `public/authors` directory. Note, that the naming of the file is critically important, since Astro is internally traversing the author meta tag (lowercasing and making spaces to dashes) and searches for a match in the `public/authors` directory. This means the following for adding an author image.

> `author: Mika Senghaas` -> `/public/authors/mika-senghaas.png`

✅ Done. Thanks for making this project better!

## 📬 Feedback and Inquiries

For any inquiries, reach out to [mika@aitu.group](mailto:mika@aitu.group).
