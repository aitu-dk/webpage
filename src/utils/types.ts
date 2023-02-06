export type Author = "Mika Senghaas" | "Ludek Cizinsky";
export type Format = "Blog" | "Deep Dive AI";
export type Image = {
  src: string;
  alt: string;
};

export type Frontmatter = {
  layout: string;
  slug: string;
  title: string;
  description: string;
  authors: Author[];
  format: Format;
  image: Image;
  tags: string[];
  published: string;
  minutesRead: string;
};
