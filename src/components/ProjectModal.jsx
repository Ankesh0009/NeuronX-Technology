import { useEffect, useState } from 'react';

export default function ProjectModal({ isOpen, onClose, project }) {
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        } else {
            // Delay unmounting to allow exit animation to run if we add one later
            const timer = setTimeout(() => setIsRendered(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isRendered || !project) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <div
                className={`relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative aspect-video w-full overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Close modal"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                <div className="p-6 md:p-8">
                    <p className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary uppercase tracking-widest border border-primary/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                        Project Details
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">{project.name}</h3>

                    <div className="flex justify-end border-t border-gray-100 dark:border-gray-700 pt-6">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:shadow-none hover:-translate-y-0.5 hover:bg-primary-dark transition-all duration-300 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:border-gray-900"
                        >
                            Open Project
                            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
