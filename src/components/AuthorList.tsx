import type { Author } from "@utils/types";

type Props = {
  authors: Author[];
};
export default function AuthorList({ authors }: Props) {
  return (
    <div className="flex items-center">
      {authors.map((author: Author) => (
        <img
          src={`/authors/${author.toLowerCase().replaceAll(" ", "-")}.jpg`}
          alt={`Image of ${author}`}
          className="-ml-3 rounded-full w-7 h-7 first:-ml-0"
          key={author}
        />
      ))}
      <p className="px-2 tracking-wider truncate text-md text-secondary">
        {authors.join(", ")}
      </p>
    </div>
  );
}
