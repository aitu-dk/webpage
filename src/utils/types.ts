export type Author =
  | "Lorenz Hufe"
  | "Felix Ringe"
  | "Jarek Liesen"
  | "Jan Tiegges";
export type Format = "Paper" | "Event" | "Announcement";
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
  ogImage: Image;
  banner: Image;
  tags: string[];
  published: string;
  minutesRead: string;
};
