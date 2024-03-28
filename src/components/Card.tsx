import { Paper } from "./data/papers";

type Props = {
  paper: Paper
};

export default function Card({ paper }: Props) {
  return (
    <div
      className="group nounderline w-full"
    >
      <a href={paper.link} >
        <div className="flex flex-col sm:flex-row sm:space-x-10 sm:items-center sm:h-[100px]">
          <div
            className={`w-full h-[90px] sm:max-w-[200px] flex 
      will-change-transform items-center justify-center rounded-lg overflow-hidden sm:ml-2 object-cover`}
          >

            <img
              src={paper.imagePath}
              alt="Paper Image"
              className="group-hover:scale-105 transition-transform object-cover"
            />

          </div>
          <div className={`flex flex-col`}>
            <div className="flex items-center space-x-1">
              <p className="text-tertiary">
                {paper.readingDay.toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <h2 className="text-xl font-medium leading-snug text-primary">
              {paper.name}
            </h2>
            <p className="text-gray-300 text-md">{paper.authors.join(", ")}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
