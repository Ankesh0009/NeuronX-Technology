import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/assets/logo/NueroNex Technology Logo.png" alt="NueroNex Technology"
                            className="h-10 w-auto sm:h-12 object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 ml-auto mr-6" aria-label="Primary navigation">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/work" className="nav-link">Work</Link>
                    </nav>

                    {/* Desktop CTA */}
                    <Link to="/contact" className="hidden md:inline-flex h-10 items-center justify-center
                rounded-lg bg-black px-5 text-sm font-semibold text-white
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:bg-gray-900
                hover:text-primary
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-black">
                        Let’s Talk
                    </Link>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden inline-flex h-10 w-10 items-center justify-center
                rounded-lg border border-gray-200
                text-gray-700 hover:bg-gray-100
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
                dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800" aria-label="Toggle menu">
                        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-900">
                    <nav className="flex flex-col gap-3 px-6 py-6">
                        <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/services" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link to="/work" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Work</Link>

                        {/* Mobile CTA */}
                        <Link to="/contact" className="mt-3 inline-flex h-11 w-fit px-5 items-center justify-center
                rounded-lg bg-black text-white font-semibold
                transition hover:bg-gray-900" onClick={() => setIsMenuOpen(false)}>
                            Let’s Talk
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
