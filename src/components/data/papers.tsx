export class Paper {
    constructor(public name: string, public authors: string[], public link: string, public imagePath: string, public readingDay: Date) {
    }
}

// --------------------------------------------------
// modify HERE to add papers
// remember months go from 0 to 11!
const papers = [
    new Paper("Deep Reinforcement Learning with Double Q-learning", ["Hado van Hasselt", "Arthur Guez", "David Silver"], "https://arxiv.org/abs/1509.06461", "/posts/01-11-23-double-dqn/ogImage.png", new Date(2023, 10, 1)),
    new Paper("Rainbow: Combining Improvements in Deep Reinforcement Learning", ["Matteo Hessel", "Joseph Modayil", "Hado van Hasselt", "Tom Schaul", "Georg Ostrovski", "Will Dabney", "Dan Horgan", "Bilal Piot", "Mohammad Azar", "David Silver"], "https://arxiv.org/abs/1710.02298", "/posts/05-12-23-rainbow/ogImage.png", new Date(2023, 11, 5)),
    new Paper("MT3 Multi-Task Multitrack Music Transcription", ["Josh Gardner", "Ian Simon", "Ethan Manilow", "Curtis Hawthorne", "Jesse Engel"], "https://arxiv.org/abs/2111.03017", "/posts/06-02-24-music-transcription/ogImage.jpg", new Date(2024, 1, 6)),
    new Paper("Meta-Learning the Inductive Biases of Simple Neural Circuits", ["William Dorrell", "Maria Yuffa", "Peter Latham"], "https://arxiv.org/abs/2211.13544", "/posts/06-06-23-meta-learning-circuits/ogImage.jpg", new Date(2023, 5, 6)),
    new Paper("Prioritized Experience Replay", ["Tom Schaul", "John Quan", "Ioannis Antonoglou", "David Silver"], "https://arxiv.org/abs/1511.05952", "/posts/07-11-23-prioritized-er/ogImage.png", new Date(2023, 10, 7)),
    new Paper("Neural Discrete Representation Learning", ["Aaron van den Oord", "Oriol Vinyals", "Koray Kavukcuoglu"], "https://arxiv.org/abs/1711.00937", "/posts/09-01-24-vqvae/ogImage.png", new Date(2024, 0, 9)),
    new Paper("Masked Autoencoders Are Scalable Vision Learners", ["Kaiming He", "Xinlei Chen", "Saining Xie", "Yanghao Li", "Piotr Dollár", "Ross Girshick"], "https://arxiv.org/abs/2111.06377", "/posts/11-07-23-autoencoders-scalable-learners/ogImage.png", new Date(2023, 6, 11)),
    new Paper("Agent57: Outperforming the Atari Human Benchmark", ["Adrià Puigdomènech Badia", "Bilal Piot", "Steven Kapturowski", "Pablo Sprechmann", "Alex Vitvitskyi", "Daniel Guo", "Charles Blundell"], "https://arxiv.org/abs/2003.13350", "/posts/12-12-23-agent57/ogImage.png", new Date(2023, 11, 12)),
    new Paper("Dopamine and temporal difference learning - A fruitful relationship between neuroscience and AI", ["Will Dabney", "Zeb Kurth-Nelson"], "https://deepmind.google/discover/blog/dopamine-and-temporal-difference-learning-a-fruitful-relationship-between-neuroscience-and-ai/", "/posts/13-06-23-dopamine/ogImage.jpg", new Date(2023, 5, 13)),
    new Paper("A Distributional Perspective on Reinforcement Learning", ["Marc G. Bellemare", "Will Dabney", "Rémi Munos"], "https://arxiv.org/abs/1707.06887", "/posts/15-11-23-distributional-perspective/ogImage.png", new Date(2023, 10, 15)),
    new Paper("Jukebox A Generative Model for Music", ["Prafulla Dhariwal", "Heewoo Jun", "Christine Payne", "Jong Wook Kim", "Alec Radford", "Ilya Sutskever"], "https://arxiv.org/abs/2005.00341", "/posts/16-01-24-jukebox/ogImage.png", new Date(2024, 0, 16)),
    new Paper("RL-Duet - Online Music Accompaniment Generation Using Deep Reinforcement Learning", ["Nan Jiang", "Sheng Jin", "Zhiyao Duan", "Changshui Zhang"], "https://arxiv.org/abs/2002.03082", "/posts/19-12-23-rl-duet/ogImage.png", new Date(2023, 11, 19)),
    new Paper("Pattern-Based Music Generation with Wasserstein Autoencoders and PRC Descriptions", ["Valentijn Borghuis", "Luca Angioloni", "Lorenzo Brusci", "Paolo Frasconi"], "https://www.ijcai.org/Proceedings/2020/0751.pdf", "/posts/20-06-23-pattern-based-music-generation/ogImage.png", new Date(2023, 5, 20)),
    new Paper("Human-level Control through Deep Reinforcement Learning", ["Volodymyr Mnih", "K. Kavukcuoglu", "David Silver", "Andrei A. Rusu", "J. Veness", "Marc G. Bellemare", "Alex Graves", "Martin A. Riedmiller", "A. Fidjeland", "Georg Ostrovski", "Stig Petersen", "Charlie Beattie", "Amir Sadik", "Ioannis Antonoglou", "Helen King", "D. Kumaran", "Daan Wierstra", "S. Legg", "D. Hassabis"], "https://www.nature.com/articles/nature14236", "/posts/22-10-23-human-level-control-through-deep-rl/ogImage.png", new Date(2023, 9, 22)),
    new Paper("High Fidelity Neural Audio Compression", ["Alexandre Défossez", "Jade Copet", "Gabriel Synnaeve", "Yossi Adi"], "https://arxiv.org/abs/2210.13438", "/posts/23-01-24-encodec/ogImage.png", new Date(2023, 0, 23)),
    new Paper("Noisy Networks for Exploration", ["Meire Fortunato", "Mohammad Gheshlaghi Azar", "Bilal Piot", "Jacob Menick", "Ian Osband", "Alex Graves", "Vlad Mnih", "Remi Munos", "Demis Hassabis", "Olivier Pietquin", "Charles Blundell", "Shane Legg"], "https://arxiv.org/abs/1706.10295", "/posts/24-11-23-noisy-nets/ogImage.png", new Date(2023, 10, 24)),
    new Paper("Bytes is all you need", ["Maxwell Horton", "Sachin Mehta", "Ali Farhadi", "Mohammad Rastegari"], "https://arxiv.org/pdf/2306.00238.pdf", "/posts/27-06-23-bytes-is-all-you-need/ogImage.png", new Date(2023, 5, 27)),
    new Paper("MusicLM: Generating Music From Text", ["Andrea Agostinelli", "Timo I. Denk", "Zalán Borsos", "Jesse Engel", "Mauro Verzetti", "Antoine Caillon", "Qingqing Huang", "Aren Jansen", "Adam Roberts", "Marco Tagliasacchi", "Matt Sharifi", "Neil Zeghidour", "Christian Frank"], "https://arxiv.org/abs/2301.11325", "/posts/30-01-24-musiclm/ogImage.png", new Date(2024, 0, 30)),
    new Paper("Dueling Network Architectures for Deep Reinforcement Learning", ["Ziyu Wang", "Tom Schaul", "Matteo Hessel", "Hado van Hasselt", "Marc Lanctot", "Nando de Freitas"], "https://arxiv.org/abs/1511.06581", "/posts/30-10-23-dueling-architectures-for-drl/ogImage.png", new Date(2023, 9, 30)),
    new Paper("Stay tuned for the next reading group!", [""], "", "/posts/16-04-24-speaker-anouncement/sumsem24.jpg", new Date(2024, 3, 23)),
]

// --------------------------------------------------

const papersToObject = (papers: Paper[]) => {
    const obj = {}

    papers.sort((a, b) => a.readingDay - b.readingDay).forEach(x => {
        const offset = x.readingDay.getTimezoneOffset()
        x.readingDay = new Date(x.readingDay.getTime() - (offset * 60 * 1000))
        const dateString = x.readingDay.toISOString().split('T')[0]
        if (!(dateString in obj)) {
            obj[dateString] = []
        }
        obj[dateString].push(x)
    })

    return obj
}

export const dayToPapers = papersToObject(papers)
