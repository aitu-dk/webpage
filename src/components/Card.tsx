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
			className="rounded-lg group nounderline"
		>
			<div className="flex flex-col sm:flex-row sm:space-x-10 sm:items-center">
				<div
					className={`w-full h-[200px] max-w-[400px] flex 
      will-change-transform items-center justify-center rounded-lg overflow-hidden object-cover`}
				>
					<img
						src={frontmatter.ogImage.src}
						alt={frontmatter.ogImage.alt}
						className="group-hover:scale-105 transition-transform"
					/>
				</div>
				<div className={`flex flex-col py-6`}>
					<div className="flex items-center space-x-1">
						<Badge>
							<p className="text-sm uppercase">
								{frontmatter.format}
							</p>
						</Badge>
					</div>
					<h1 className="my-2 text-3xl font-medium leading-snug text-primary">
						{frontmatter.title}
					</h1>
					<AuthorList authors={frontmatter.authors} />
				</div>
			</div>
		</a>
	);
}
