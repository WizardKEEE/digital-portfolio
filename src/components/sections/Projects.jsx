import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Slot Machine</h3>
                            <p className="text-gray-400 mb-4">A slot machine I made for a Game Project at West-MEC in my first year</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://wizardkeee.github.io/Game-project/ " className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Song finder</h3>
                            <p className="text-gray-400 mb-4">A capstone project I made for first year coding at West-MEC with some songs I like</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500-20 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://wizardkeee.github.io/Capstone/" className="text-blue-400 hover:text-blue-300 tranistion-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Guess A Number</h3>
                            <p className="text-gray-400 mb-4">A mini project from my first year at West-MEC</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500-20 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://wizardkeee.github.io/Guess-A-Number/" className="text-blue-400 hover:text-blue-300 tranistion-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Emoji Memory Game</h3>
                            <p className="text-gray-400 mb-4">A mini project from my first year at West-MEC</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500-20 hover:shadow-[0_2px_8px_rgba(59,130, 246,0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://wizardkeee.github.io/Emoji-Memory-Game/" className="text-blue-400 hover:text-blue-300 tranistion-colors my-4">View Project →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>    
        </section>
    )
}