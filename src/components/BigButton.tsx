import type { ReactElement } from "react";

type Props = {
  id?: string;
  hover?: boolean;
  children: ReactElement;
};

export default function BigButton({ id, hover, children }: Props) {
  return (
  <div
    id={id}
    className={`mt-8 no-underline tracking-wider text-accent bg-accent-dark px-4 py-2 text-2xl font-medium rounded-lg ${
      hover ? "hover:shadow-accent-small transition-shadow" : ""
    }`}
  >
    {children}
  </div>
  );
}
