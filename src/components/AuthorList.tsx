import type { Author } from "@utils/types";

type Props = {
  authors: Author[];
};
export default function AuthorList({ authors }: Props) {
  return (
    <div className="flex items-center">
      {authors.map((author: Author) => (
        <img
          src={`/authors/${author.toLowerCase().replaceAll(" ", "-")}.png`}
          alt={`Image of ${author}`}
          className="w-7 h-7 first:-ml-0 -ml-3 rounded-full"
        />
      ))}
      <p className="text-md text-secondary tracking-wider truncate px-2">
        {authors.join(", ")}
      </p>
    </div>
  );
}
