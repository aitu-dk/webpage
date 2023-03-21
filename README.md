# AITU Webpage

This repository holds the source code for the [AITU Website](https://aitu.group).

## 🌟 Techstack

The project is built using the modern JS framework Astro and follows a minimal project setup.
It utilises native HTML, CSS, and JS (in .astro files) as much as possible. The packages used are:

- [Tailwind](https://www.tailwindcss.com) for styling
- [ThreeJS](https://www.threejs.org) for 3d rendering
- [Three Noise](https://www.npmjs.com/package/three-noise) for creating Perlin noise vector field
- [Fontsource DM-Sans](https://fontsource.org/fonts/dm-sans) for custom font

We also use [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) to integrate Tailwind with Astro.

## 🚀 Project Structure

The project structure broadly follows the default `Astro` file structure:

```plain
/
├── public/
│   ├── authors/
│   │   └── mika-senghaas.jpg
│   ├── posts/
│   │   ├── intro-post
│   │   │   ├── banner.jpg
│   │   │   ├── ogImage.jpg
│   │   │   └── ...
│   │   └── ...
│   ├── assets/
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

- The directory `public/authors` contains small images/ illustrations of all authors
- The directory `public/posts` contains sub-directories for the assets directly for each blog post
- The directory `public/assets` contains all other assets

All newly static images should be compressed to a size of _max. 150KB_ and be in `jpg` format.

The `src` directory contains all source code, mostly .astro files which include JSX-like HTML syntax, (Tailwind-)CSS, and Java/Typescript support. The layout component holds two base layouts, that apply global styles. All styles are wrapped in the `Layout.astro` component and all blog posts are additionally wrapped in the `BlogLayout.astro` component. The pages component configures all available routes. By default, there are just three routes `/`, `/join`, and `/blog`. All individual blog articles are stored as Markdown files, see the _Writing a Blog Post section_ for details.

## 🧞 Contributing

To contribute to this project in the form of adding blog posts, fixing bugs, or improving functionality, please clone this repository and follow the instructions below.

First, create a local copy of the repository. If you have [GitHub CLI](https://github.com/cli/cli#installation) installed, you can use the following command to clone the repository and navigate to the project directory:

```bash
gh repo clone aitu-dk/webpage
cd webpage
```

If you don't have GitHub CLI, feel free to use the following command which uses the standard `git` CLI:

```bash
git clone https://github.com/aitu-dk/webpage
cd webpage
```

Next, let's run the project locally. To run the project, you need to have [Node.js](https://nodejs.org/en/) installed. If this is your first time running the project, you will have to install the project dependencies. To do so, run the following command in the project root directory:

```bash
yarn install
```

This should install all the dependencies listed in the `package.json` file. Once the dependencies are installed, you can run the project locally using the following command:

```bash
astro dev
```

This will start a local server on `http://localhost:3000` and you can visit the website in your web browser. Now you can start to implement your changes. Depending on the type of change, we would like you to develop your changes on a new branch and open a pull request to the `main` branch:

- If you are writing a blog post, create a branch `blog/<blog-name>`
- If you are adding a feature, create a branch `feat/<feat-name>`
- If you are fixing an issue, create a branch `fix/<fix-name>`

You can create and change to a new branch using the following command:

```bash
git checkout -b <branch-name>
```

Make changes to the code and commit them to the branch using `git add` and `git commit -m` (Make an effort for descriptive commit messages). Once you are finished, push the branch to the remote repository. You can do this using the following command:

```bash
git push --set-upstream origin <branch-name>
```

Once the branch is pushed to the remote repository, you can open a pull request using the GitHub CLI (`gh pr create`) or from the GitHub website.

## 🗒️ Writing a Blog Post

Before starting to write a blog post, you should first create a new branch for your blog post. See the _Contributing_ section for details. Once you have created a new branch, you can start writing your blog post.

### Adding Blog Metadata

Create a new file `<new-blogpost>.md` in the directory `src/pages/blog`. The first thing you wanna do is to add frontmatter to your blog post. As of now, the webpage does not provide a lot of error handling, so not providing the expected metadata about a post is likely to cause the site to crash. Below you will find the metadata for our very first blog article, feel free to copy it and then adjust it with the correct information.

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
format: event
tags:
  - welcome
  - aitu
  - first-meeting
banner: 
  src: /assets/banner.jpg
  alt: The AITU Banner
ogImage: 
  src: /assets/ogImage.jpg
  alt: The AITU Banner
published: 02/01/2023
---
```

_Note, that the `published` field required the date format MM/DD/YYYY and the `image` and `layout` fields require either relative paths from the blog articles directory (as can be seen in the `layout` field) or refer to public assets by prefixing the path with `/` (as can be seen in the `image` field)._

At this point, you should be able to visit the new blog article at route `http://localhost:3000/blog/<new-blogpost>` and see the meta information rendering correctly.

### Write the Article

You can then go ahead and write regular Markdown - all default Markdown features are available, like headers, dividers, bold and italic styles, links, images, ordered/unordered lists, and block quotes. The below example shows how to write a blog post using Markdown.

```md
# This is a header

This is a paragraph with some **bold** and _italic_ text. You can also add [links](https://www.aitu.dk) and images:

![Aitu Logo](/assets/logo.png)

You can also add ordered lists:
1. First
2. Second

And unordered lists:
- First
- Second

## This is a subheader

---

> This is a block quote that is rendered after a divider

We support code blocks as well:
```

_Note, that we are looking to support `.mdx` features, such as including dynamic UI components. However, this is not yet supported._

### Add a Title Image

All assets for a blog post should be stored in the directory `public/posts/<blog-post>`. Your post should contain a minimum of two images, which is the title image for your blog post in two different recommended sizes:

1. A wide **banner** image (`1455x398` px), called `banner.jpg`

2. A smaller **preview** image (`1200x630` px), called `ogImage.jpg`, which is used for previews on our own website and when we share links to the blog on common social media platforms like LinkedIn, Facebook, Twitter, etc.

Choose an appropriate title image that is nice to look at and hints at the post's contents. Make sure, it is a high-quality image, as the image will be shown in large across the entire blog page. Assuming your title image is called `titleImage.png`, run the following two commands:

```bash
magick titleImage.png -resize "1455x265^" -background black -gravity center -extent "1455x398" banner.jpg 
magick titleImage.png -resize "1200x630^" -background black -gravity center -extent "1200x630" ogImage.jpg 
```

This will create two images `banner.jpg` and `ogImage.jpg` with the correct dimensions. Open both images to confirm that the processing was performed correctly and that the image is not distorted. If you are not happy with the result, you can always try again with a different image (some image dimensions may not work well e.g. as the banner image). Also, note that the image size should not exceed 150kB.

When you are happy with the result, move the images into the `public/posts` directory and add the following metadata to your blog post:

```md
banner: 
  src: /public/posts/<blog-post>/banner.jpg
  alt: A description of the image
ogImage:
  src: /public/posts/<blog-post>/ogImage.jpg
  alt: A description of the image
```

### Add Images

You can also add more images to your blog post. These images can be used to illustrate the content of the post. To add an image place it in the `public/posts/<blog-post>` directory and then add the following syntax to your blog post:

```md
![alt text](/public/posts/<blog-post>/image.jpg)
```

Again, make sure that the image size does not exceed 150kB (`.jpg` is the preferred image format as it uses compression). It the image significantly exceeds the maximum file size, use online or CLI tools to compress the image. Also, remember to add alt text for increased visibility (SEO).

### Adding Author Profile Image

If you have never authored a blog post before, just writing your name in the `author` metadata field will not magically make an image of you appear. For this to work, you will need to add your own avatar to the `public/authors` directory. Note, that the naming of the file is critically important since Astro is internally traversing the author meta tag (lowercasing and making spaces to dashes) and searches for a match in the `public/authors` directory. This means the following for adding an author image.

> `author: Mika Senghaas` -> `/public/authors/mika-senghaas.jpg`

✅ Done. Thanks for making this project better!

## 📬 Feedback and Inquiries

For any inquiries or questions, reach out to [mika@aitu.group](mailto:mika@aitu.group).
