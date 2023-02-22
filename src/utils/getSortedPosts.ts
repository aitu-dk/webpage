import type { Frontmatter } from "./types";

export default function getSortedPosts(postsFrontmatter: Frontmatter[]) {
  return postsFrontmatter.sort((a, b) => {
    if (a.published < b.published) {
      return 1;
    }
    return -1;
  });
}
