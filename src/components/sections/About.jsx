import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const basicITskills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
    const advancedITskills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
    //const Softskills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
    //const jobSpecificskills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
    //const courses = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="bg-black max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                    I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Basic</h3>
                            <div className="flex flex-wrap gap-2">
                                {basicITskills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Advance</h3>
                            <div className="flex flex-wrap gap-2">
                                {advancedITskills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🎓Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 spacy-y-2">
                                <li>
                                    <strong> B.S. in Computer Science </strong> - XXX University(2009-2012)
                                </li>
                                <li>
                                    Relevant Coursework: Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra,
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        The quick, brown fox jumps over a lazy dog. (2020 - Present){" "}
                                    </h4>
                                    <p>
                                        DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Bawds jog (2019){" "}
                                    </h4>
                                    <p>
                                        Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}