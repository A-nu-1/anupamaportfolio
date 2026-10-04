import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    ];
    const backendSkills = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
           <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center px-4">     
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    About Me</h2>
                <div className="glass p-8 rounded-xl border-white/10 border 
                    hover: -translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm a passionate software developer with a love for creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and building applications that make a difference. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or indulging in my love for gaming and music.
                    </p>    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover: bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            #{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover: bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            #{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓 Education</h3> 
                        <ul className="list-disc list-inside space-y-2 text-left text-gray-300">
                            <li className="mb-2">
                                <strong>Bachelor of Science in Computer Science</strong>
                                - BNM Institute of Technology, 2005-2009
                            </li>
                            <li>
                                <strong>Pre University</strong>
                                - Vijaya College, 2003 - 2005
                            </li>                            
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3> 
                        <div className="space-y-4 text-left text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Sofware Engineer at Credit Suisse / Cognizant AG (2013 - 2023)</h4>
                                    <p>Developed and maintained Banking Applications, in Java, microservices, spring, springBoot on cloud-based platforms.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Sofware Engineer at Applied Materials (2009 - 2013)</h4>
                                    <p>Developed and maintained Banking Applications, in Java, microservices, spring, springBoot on cloud-based platforms.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}