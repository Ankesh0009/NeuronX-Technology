import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-[380px] w-[380px]
              rounded-full bg-primary/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-10">

                {/* ================= TOP GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="mb-6">
                            <img src="/assets/logo/NueroNex Technology Logo.png" alt="NueroNex Technology"
                                className="h-12 sm:h-14 lg:h-16 w-auto object-contain" loading="lazy" />
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                            We design and build digital products that are clear, scalable,
                            and engineered to perform in the real world.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">
                            Company
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="footer-link">About</Link>
                            </li>
                            <li>
                                <Link to="/work" className="footer-link">Work</Link>
                            </li>
                            <li>
                                <a href="/#process" className="footer-link">Process</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">
                            Services
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/services" className="footer-link">Website Development</Link>
                            </li>
                            <li>
                                <Link to="/services" className="footer-link">App Development</Link>
                            </li>
                            <li>
                                <Link to="/services" className="footer-link">UI/UX & Design Systems</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-5">
                            Contact
                        </h4>

                        <a href="mailto:hello@digicraft.in" className="block text-sm font-semibold text-gray-900
                  hover:text-primary transition-colors mb-3">
                            hello@digicraft.in
                        </a>

                        <p className="text-sm text-gray-600">
                            Mumbai, India
                        </p>
                    </div>

                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="border-t border-gray-100 pt-8
                flex flex-col md:flex-row
                items-center justify-between gap-4">

                    <p className="text-xs text-gray-400">
                        © 2024 NueroNex Technology. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-gray-400
                  hover:text-gray-900 transition-colors">
                            Privacy Policy
                        </a>

                        <a href="#" className="text-xs text-gray-400
                  hover:text-gray-900 transition-colors">
                            Terms of Service
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}
