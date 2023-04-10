import type { ReactElement } from "react";

type Props = {
  id?: string;
  hover?: boolean;
  children: ReactElement;
};

export default function Badge({ id, hover, children }: Props) {
  return (
    <div
      id={id}
      className={`m-0.5 no-underline tracking-wider text-accent bg-accent-dark px-1 font-medium rounded-lg ${
        hover ? "hover:shadow-accent-small transition-shadow" : ""
      }`}
    >
      {children}
    </div>
  );
}
