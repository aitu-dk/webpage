# AITU Webpage

This repository holds the source code for the AITU webpage.
The website is hosted on Vercel and live at the domain [www.aitu.dk](https://www.aitu.dk)

## 🌟 Techstack

The website is written in the modern JS framework [Astro](https://www.astro.build) and uses a minimal project setup. 
The entire project tries to use native HTML, CSS and JS (in `.astro` files), whenever possible.
External packages are kept minimal to avoid maintenance work. The packages used are:

- [Tailwind](https://www.tailwindcss.com) for styling
- [ThreeJS](https://www.threejs.org) for 3d rendering
- [Three Noise](https://www.npmjs.com/package/three-noise) for creating perlin noise vector field
- [Fontsource DM-Sans](https://fontsource.org/fonts/dm-sans) for custom font

Additionally, the following astro adapters are used:

- [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) to integrate Tailwind with astro
- [@astrojs/vercel"](https://docs.astro.build/en/guides/integrations-guide/vercel/) to conveniently deploy to Vercel

## 🚀 Project Structure

The project structure broadly follows the default `Astro` filestructure. 
Inside of your Astro project, you'll see the following folders and files:

```plain
/
├── public/
│   └── authors/
│   └── posts/
│   └── ...
├── src/
│   ├── js/
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
```

Any static assets, i.e. images, can be placed in the `public/` directory. If an image belongs to a post,
put it in the `/public/posts` directory. If you upload your own author image, because you are writing a blog post, put it into the `/public/authors` component. Make sure to compress all static images to reduce load time. 

**Note, that all images are required to be `.png` images**

The `src` directory contains all source code. This is mostly `.astro` files, which include JSX-like HTML syntax, (Tailwind-)CSS and Java/Typescript support. The `js` directory contains JavaScript and TypeScript files that include module imports, which are not recognised in `.astro` files. The `layout` component holds two base layouts, that apply global styles. All styles are wrapped in the `Layout.astro` component and all blog posts are additionally wrapped in the `BlogLayout.astro` component.
The `pages` component configures all routes that are available. By default, there are just two routes `/` and `/blog`. All individual blog articles are stored as `.md` files, see the _Writing a Blog Post_ section for details.

## 🗒️ Writing a Blog Post

## 🧞 Contributing

If you want to contribute to this project, i.e. add blog articles, fix bugs or improve functionality, please fork this repository 

```bash
gh repo fork aitu-dk/webpage
```

To develop your change, create a new branch with following [Commitizen](https://github.com/commitizen/cz-cli) guidelines. Make sure to also use the Commitizen for every commit on the branch.

```bash
git branch -b <new-branch>
```

Once you are finished developing the feature, open a pull request to the `main` branch. Use the following command and follow the interactive prompt.

```bash
gh pr create
```

✅ Done. Thanks for making this project better!

## 📬 Feedback and Inquiries

For any inquiries, reach out to [mika@aitu.dk](mailto:mika@aitu.dk).