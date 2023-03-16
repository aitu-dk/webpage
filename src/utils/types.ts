export type Author =
  | "Mika Senghaas"
  | "Ludek Cizinsky"
  | "Lukas Rasocha"
  | "Krzysztof Parocki"
  | "Marcel Rosier";
export type Format = "Paper" | "Event" | "Deep Dive";
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
