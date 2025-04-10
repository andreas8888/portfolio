import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const basicITskills = 
    [
        "C", "C++", "C#", "JavaScript", "Java","Node.js","GIS","TailwindCSS",
        "Python", "SQL", "CSS", "HTML", "XML","XAML","R","PHP","Git"
    ];
    const advancedITskills = 
    [
        ".NET", "CI/CD", "React.js", "REST","ArcGis javascript","Arc GIS","MSSQL","SQLite",
        "Web API","MAUI","WPF","LinQ","WCF","Windows server","MSMQ",".NET CORE","Entity Framework",
    ];
    const Softskills = 
    [
        "Problemlösning","Analytisk", "Kritiskt tänkande","Kreativ", "Kommunikation", "positiv attityd",
        "Anpassningsförmåga"
    ];
    const jobSpecificskills = 
    [
        "Azure", "SCRUM", "Agil", "Projektform", "Teknisk kunskap","SOLID","Kanban","Support","api hantering"
        ,"Integrering","Kundservice"

    ];

    const courses =
        [
            "JavaScript",
            "Java programmering",
            "Infrastruktur",
            "Mjukvaruutveckling ",
            "Databassystem",
            "Skriptspråk",
            "Programmering med C",
            "Programmering med C++",
            "Programmering med C#",
            "Programmering i .NET",
            "XAMARIN and MAUI.NET",
            "NET.CORE",
            "Spelprogrammering i Windows",
            "Multimedia i Python",
            "Användbarhet och tillgänglighet",
            "Kommunikation och projekt",
            "GIS", "System och affärsutveckling",
        ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="bg-black max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Om Andreas
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Andreas har 10 års erfarenhet av IT-konstult rollen och har under åren samlat på sig en rad olika
                            erfarenheter. Bland annat i .NET och Microsofts tekniker och verktyg. Andreas är en problemlösare, 
                            analytisk och kritisk tänkare, är Uppmärksamhet på detaljer och har en positiv attityd.
                            Utöver den yrkesmässiga erfarenheten
                            har Andreas ett starkt driv att utforska övrig teknik bortom .NET världen.
                            Nedan följer ett flertal exempel på erfarenhet som har införskaffats genom åren.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Grundläggande</h3>
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
                                <h3 className="text-xl font-bold mb-4"> Teknik</h3>
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
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Specifikt</h3>
                                <div className="flex flex-wrap gap-2">
                                    {jobSpecificskills.map((tech, key) => (
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
                                <h3 className="text-xl font-bold mb-4"> Mjuka färdigheter</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Softskills.map((tech, key) => (
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
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼Arbete
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        TietoEvry. (2016 - nu)
                                    </h4>
                                    <p>
                                        Systemutvecklare
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Imano (2015 - 2016)
                                    </h4>
                                    <p>
                                        Systemutvecklare
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    🎓Relevanta kurser
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {courses.map((course, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}