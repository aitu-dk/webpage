class Speaker {
    public next = false
    public past = false

    constructor(public date: Date, public title: string, public name: string, public affiliation: string, public url: string) {
    }
}

// --------------------------------------------------
// modify HERE to update speakers

const speakersRaw = [
    new Speaker(new Date(2024, 3, 16), "Set Learning for Accurate and Calibrated Models", "Thomas Unterthiner", "Deepmind", "https://www.meetup.com/bliss-speaker-series/events/299466047/"),
    new Speaker(new Date(2024, 3, 30), "MatterGen: A Generative Model for Inorganic Materials Design", "Daniel Zügner", "Microsoft", "https://www.meetup.com/bliss-speaker-series/events/299480129/"),
    new Speaker(new Date(2024, 4, 14), "OpenGPT-X", "Malte Ostendorff", "DFKI", "https://www.meetup.com/bliss-speaker-series/events/299480149/"),
    new Speaker(new Date(2024, 4, 28), "Intelligent Flying Multi-Robot Systems", "Prof. Wolfgang Hönig", "TU Berlin", "https://www.meetup.com/bliss-speaker-series/events/299480165/"),
    new Speaker(new Date(2024, 5, 11), "Natural Language Representations in Brains and Machines", "Prof. Fatma Deniz", "TU Berlin", "https://www.meetup.com/bliss-speaker-series/events/299480172/"),
    new Speaker(new Date(2024, 5, 25), "Human Alignment of Neural Network Representation", "Lukas Muttenhaler", "Deepmind & TU Berlin", "https://www.meetup.com/bliss-speaker-series/events/299480178/"),
    new Speaker(new Date(2024, 6, 9), "Learning Molecular Models by Integrating ML & Experimental Data", "Prof. Cecilia Clementi", "FU Berlin", "https://www.meetup.com/bliss-speaker-series/events/299480197/")
];

// --------------------------------------------------

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

// Finding the closest event to the current date but not in the past
const closestEvent = speakersRaw.reduce((closest, event) => {
    // Check if this event is in the future and closer than the current closest event
    if (event.date >= currentDate && (!closest || event.date < closest.date)) {
        return event;
    }
    return closest;
}, null);

if (closestEvent) {
    closestEvent.next = true;
}

speakersRaw.forEach((event) => {
    if (event.date < currentDate) {
        event.past = true;
    }
});

export const speakers = speakersRaw;