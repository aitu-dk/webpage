import { speakers } from "./data/speakers";

export const SpeakerSeries = () => {

    return <div className="flex items-center flex-wrap justify-center" >
        <div id="speaker Series" className="pt-32 sm:my-40 text-center">
            <strong
                className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-red-right"
            >
                Speaker Series
            </strong>
            <p
                className="mt-4 font-light leading-relaxed text-secondary text-md sm:text-xl"
            >
                Get your <strong className="text-primary">free</strong> tickets for the
                speaker series now!
            </p>

            <div className="flex items-center justify-center my-2">
                <div className="flex items-center hover:cursor-pointer mr-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 mr-2"
                        fill="currentColor"
                    ><path
                        d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                    ></path></svg
                    >
                    <a
                        href="https://www.google.com/maps/place/52.51169098971815,13.325654094872284"
                        target="_blank">TU Berlin H1012</a
                    >
                </div>

                <div className="flex items-center">
                    <img
                        src="/assets/clock.svg"
                        className="w-6 h-6 mr-2 stroke-white fill-white"
                        alt="clock"
                    />
                    <p>6:45pm</p>
                </div>
            </div>

            <div className="mt-6 text-center">
                <a
                    href="https://www.meetup.com/bliss-speaker-series/"
                    className="p-3 px-12 bg-accent text-gray-300 rounded-md px-2 text-lg hover:bg-gray-200 hover:text-gray-700 sm:text-xl text-center duration-300"
                >Get Your Ticket</a
                >
            </div>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {
                    speakers
                        .sort((a, b) => a.date - b.date)
                        .map((speaker) => (
                            <a
                                href={speaker.url}
                                key={speaker.date.toISOString()}
                                aria-label="Event details"
                                className="no-underline"
                            >
                                <li
                                    className={`py-1 mt-6 rounded-md duration-200 ${speaker.past ? "" : "hover:bg-li"
                                        }`}
                                >
                                    <div
                                        className={`absolute -left-1.5 w-3 h-3 bg-gray-200 rounded-full mt-1.5 border ${speaker.next
                                            ? "border-white"
                                            : "border-gray-900 bg-gray-700"
                                            }`}
                                    />
                                    <div className="text-left pl-4 border-left">
                                        <p
                                            className={`text-base sm:text-lg ${speaker.past
                                                ? "text-gray-500"
                                                : "text-secondary"
                                                }`}
                                        >
                                            {speaker.date.toLocaleDateString(
                                                "en-US",
                                                {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                },
                                            )}
                                        </p>
                                        <p
                                            className={`text-xl sm:text-2xl font-bold ${speaker.past
                                                ? "text-gray-500"
                                                : "text-transparent bg-clip-text bg-red-right"
                                                }`}
                                        >
                                            {speaker.title}
                                        </p>
                                        <p
                                            className={`text-lg sm:text-xl ${speaker.past
                                                ? "text-gray-500"
                                                : "text-secondary"
                                                }`}
                                        >
                                            {speaker.name},{" "}
                                            <strong>{speaker.affiliation}</strong>
                                        </p>
                                    </div>
                                </li>
                            </a>
                        ))
                }
            </ol>
        </div>
    </div >
}