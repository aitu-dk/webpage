import Badge from "@components/Badge";
import AuthorList from "@components/AuthorList";
import type { Frontmatter } from "../utils/types";

type Props = {
  frontmatter: Frontmatter;
  centered?: boolean;
};

export default function Card({ frontmatter, centered }: Props) {
  return (
    <a
      href={`/blog/${frontmatter.slug}`}
      className="group nounderline rounded-lg"
    >
      <div className="flex flex-col sm:flex-row sm:space-x-10 sm:items-center">
        <div
          className={`w-full h-[200px] max-w-[400px] flex 
      will-change-transform items-center justify-center rounded-lg overflow-hidden object-cover`}
        >
          <img
            src={frontmatter.image.src}
            alt={frontmatter.image.alt}
            className="group-hover:scale-105 transition-transform"
          />
        </div>
        <div className={`flex ${centered ? "flex-1" : ""} flex-col py-6`}>
          <div className="flex space-x-1 items-center">
            <Badge>
              <p className="text-sm uppercase">{frontmatter.format}</p>
            </Badge>
            <p className="text-tertiary">
              ·{" "}
              {new Date(
                frontmatter.published.replace(/-/g, "/")
              ).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <h1 className="text-primary text-3xl font-medium leading-snug my-2">
            {frontmatter.title}
          </h1>
          <AuthorList authors={frontmatter.authors} />
        </div>
      </div>
    </a>
  );
}
