import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 bg-black">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent text-center">
                        Relevant Erfarenhet
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.3)] transition-all"
                        >
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">HR system💼</h3>
                            <p className="text-gray-300 mb-4">
                            Personalsystem för medarbetare och chefer i en större organisation. 
                            Systemets är byggt med ASP.NET MVC
                            med MSSQL som databas. Arbetet innebar att skriva en hel del SQL, och hantera support samt
                            vidareutveckla funktionalitet.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", "JQuery", "MSSQL", "ASP.NET","MVC","Javascript","Entity Framework","Team Foundation Server"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition hover:bg-pink-500/20 hover:-translate-y-0.5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                               
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.3)] transition-all
                        ">
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">System för skogsskötsel💼</h3>
                            <p className="text-gray-300 mb-4">
                            Portal för skogsvårdsobjekt och arbetsplanering. Stora delar är av systemet är
                            byggt i .NET och ASP.NET. Består av windows tjänster, interaktiva webbkartor och utskrifter, MSMQ, MSSQL server. 
                            Integration till karttjänster med hjälp av ArcGis stacken samt javascript SDK. Hantering av
                            Forest Standard filer. En hel del integrationer med hjälp av Azure och WCF samt via api hantering.
                            Verksamhetskritiskt. Arbetet innehöll bland annat Förvaltning, utvecklingsprojekt, supportansvar.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", ".NET", "LinQ", "Enityt Framework","ArcGIS", "Javascript","ASP.NET","REST-api","MSMQ"
                                ,"SQL","Windows server","CI/CD","AzureDevops","Python","JIRA","SCRUM","Agilt"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition hover:bg-pink-500/20 hover:-translate-y-0.5"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.3)] transition-all">
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">system för utbytesberäkning💼</h3>
                            <p className="text-gray-300 mb-4">
                            System som simulerar och beräknar utbytet åt skogsägare. 
                            Systemet är byggt i .NET. Frontend en MVC med Angular.js med integrerad karta. Web API och ett flertal windowstjänster.
                            MSSQL databas. R skript för datahantering. Integrationer. MSMQ. Verksamhetskritiskt.     
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["MSSQL", ".NET C#", "R", "Javascript", "MVC", "web api", "AzureDevops", "YAML","Windows server"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition hover:bg-pink-500/20 hover:-translate-y-0.5"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.3)] transition-all"
                        >
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">Övriga åtaganden💼</h3>
                            <p className="text-gray-300 mb-4">
                            Andreas har varit med i en rad övriga åtaganden i olika system. Bland annat
                            problemlösning för bank och räntesystem, och i olika typer av logistiksystem
                            både på serversidan och klientsidan. konfiguration och driftsättning av applikationer
                            på windows server 2012-2022, felsökning och support.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[".NET", "MVC", "REST","WebAPI", "C#", "Postman", "SQL", "ArcGIS", "ArcGIS Server", "Windows server", 
                                "JIRA", "AzureDevops", "CI/CD", "Scripting", "MSSQL Server", "QGis", "LinQ", "Entity Framework", "Visual Studio", 
                                "WCF", "MSMQ"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition hover:bg-pink-500/20 hover:-translate-y-0.5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.3)] transition-all"
                        >
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">Övrigt inom förvaltning</h3>
                            <p className="text-gray-300 mb-4">
                            Andreas har varit med att dokumentera system och tagit fram Wikis i AzureDevops. Han har även 
                            varit med och flyttat och uppgraderat äldre system upp till Molnet(Azure) vilket innebar Refaktorisering och 
                            konfiguration, sätta upp CI/CD flöde och övrig automatisering. Stor erfarenhet av ärendehantering och kundkontakt. 
                            Erfarenhet av att arbeta i stora samverkande grupper i en organisation.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["MIRO", "Kanban", "SCRUM", "Agil", ".NET", "AzureDevops", "CI/CD", "YAML", "JIRA", 
                                "Microsoft", "Windows Server", "WCF", "WebAPI"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition hover:bg-pink-500/20 hover:-translate-y-0.5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.3)] transition-all"
                        >
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">Hemprojekt🎓</h3>
                            <p className="text-gray-300 mb-4">
                            Ett av många är att det för tillfället arbetas på en webbserver i c++ med hjälp av 
                            httplib och open ssl. Med react webb. (demo kommer nog snart)
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["OpenSSL", "C++", "React", "html","TailwindCSS","SQLite"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition hover:bg-pink-500/20 hover:-translate-y-0.5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://github.com/andreas8888" target="_blank"
                                    className="py-1 px-3 rounded-full text-cyan-400 hover:text-cyan-300 decoration-cyan-500 transition-all my-4 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"

                                >
                                    Visa projekt →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};