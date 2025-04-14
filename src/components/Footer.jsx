export const Footer = () => {
    return (
        <footer className="text-sm text-gray-400 border-t border-pink-500/20 bg-[rgba(15,15,30,0.85)] backdrop-blur-xs shadow-[0_0_60px_rgba(255,105,180,0.3)]">
            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center justify-center text-center space-y-4">
                
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/andreas8888"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            width="60"
                            className="invert hover:brightness-150 transition-transform hover:scale-110"
                        />

                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Andreas.</p>
            </div>
        </footer>
    );
};
