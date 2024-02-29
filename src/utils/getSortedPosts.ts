import type { Frontmatter } from "./types";

export default function getSortedPosts(postsFrontmatter: Frontmatter[]) {
  return postsFrontmatter.sort((a, b) => {
    if (Date.parse(a.published) < Date.parse(b.published)) {
      return 1;
    }
    return -1;
  });
}
