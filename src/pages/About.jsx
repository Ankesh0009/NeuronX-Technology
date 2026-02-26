import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        // STATS COUNTER
        const statNumbers = document.querySelectorAll(".counter");
        const statObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = +el.dataset.target;
                let current = 0;
                const step = Math.ceil(target / 40);
                const animate = () => {
                    current += step;
                    if (current >= target) {
                        el.textContent = target;
                    } else {
                        el.textContent = current;
                        requestAnimationFrame(animate);
                    }
                };
                animate();
                observer.unobserve(el);
            });
        }, { threshold: 0.4 });
        statNumbers.forEach(stat => statObserver.observe(stat));

        return () => {
            statObserver.disconnect();
        };
    }, []);

    return (
        <main className="flex-grow">
            {/* ================= ABOUT HERO ================= */}
            <section className="relative overflow-hidden pt-15 pb-28 md:pt-10 md:pb-15 border-b border-[#f0f4f2] dark:border-white/5 bg-white dark:bg-black">
                {/* subtle grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.35] pointer-events-none"></div>

                <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        {/* ================= LEFT CONTENT ================= */}
                        <div className="lg:col-span-6">
                            {/* Eyebrow */}
                            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                                About NueroNex
                            </span>

                            {/* Heading */}
                            <h1 className="text-text-main dark:text-white text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.04em] leading-[1.05] mb-8">
                                We build digital products
                                <span className="text-primary mx-2">with clarity</span>,
                                not chaos.
                            </h1>

                            {/* Copy */}
                            <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                                NueroNex is a digital product agency focused on execution.
                                We design and engineer systems that scale, perform, and make sense —
                                without fluff or over-engineering.
                            </p>

                            {/* ================= STATS ================= */}
                            <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
                                {[
                                    { val: 30, label: "Products shipped" },
                                    { val: 5, label: "Years experience" },
                                    { val: 145, label: "Avg growth %" }
                                ].map((stat, i) => (
                                    <div key={i} className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                                        <p className="text-4xl font-black text-text-main dark:text-white counter" data-target={stat.val}>
                                            0
                                        </p>
                                        <div className="mt-2 h-px w-10 bg-primary"></div>
                                        <p className="mt-3 text-sm text-gray-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ================= RIGHT VISUAL ================= */}
                        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[560px]">
                                {/* Images Wrapper */}
                                <div className="relative flex gap-8">
                                    {/* Image 1 (Back / Left) */}
                                    <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl w-[260px] h-[360px]">
                                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>

                                    {/* Image 2 (Front / Right) */}
                                    <div className="relative z-20 overflow-hidden rounded-3xl shadow-2xl w-[260px] h-[360px] mt-16">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200" alt="Product strategy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>

                                    {/* Floating Philosophy Card */}
                                    <div className="absolute z-30 top-[370px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-6 w-[270px]">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                                            Philosophy
                                        </p>
                                        <p className="mt-2 text-lg font-extrabold text-text-main dark:text-white">
                                            Systems &gt; Screens
                                        </p>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            We build foundations, not just visuals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE DO ================= */}
            <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
                {/* subtle accent */}
                <div className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"></div>

                <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        {/* ================= LEFT INTRO ================= */}
                        <div className="lg:col-span-4">
                            <span className="inline-flex items-center mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                                What we do
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                                We design, build & ship
                                <span className="text-primary mx-2">digital products</span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-sm">
                                From strategy to execution, we help teams turn ideas into
                                scalable, production-ready products.
                            </p>
                            {/* CTA */}
                            <Link to="/services" className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
                                <span className="relative">
                                    View all services
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                                </span>
                                <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>

                        {/* ================= RIGHT SERVICES ================= */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Website development", icon: "language", desc: "High-performance marketing and product websites built for speed, SEO, and conversion." },
                                { title: "App & SaaS development", icon: "code", desc: "Scalable web and mobile applications built with modern, production-ready stacks." },
                                { title: "UI/UX & design systems", icon: "layers", desc: "Clean interfaces and scalable design systems that reduce friction and tech debt." },
                                { title: "Product strategy", icon: "trending_up", desc: "MVP planning, audits, and technical direction to avoid costly mistakes early." }
                            ].map((item, i) => (
                                <div key={i} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:border-primary">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOW WE WORK ================= */}
            <section id="process" className="relative bg-gray-50 py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* ================= STICKY INTRO ================= */}
                        <div className="lg:sticky lg:top-32 max-w-xl">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">How we work</span>
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                Clear thinking.<br />
                                Structured execution.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-primary pl-6">
                                We don’t follow bloated frameworks or agency theatre.
                                Our workflow is opinionated, lightweight, and built
                                to reduce risk while increasing clarity at every step.
                            </p>
                        </div>

                        {/* ================= TIMELINE ================= */}
                        <div className="relative flex flex-col border-l-2 border-gray-200 pl-8 ml-4 lg:ml-0">
                            {[
                                { num: "01", title: "Discover", sub: "Understand the real problem", desc: "We question assumptions, clarify constraints, and align on outcomes before anything is designed or built." },
                                { num: "02", title: "Design", sub: "Create structure before screens", desc: "We design flows, systems, and logic first — visuals come later, once the foundation is solid." },
                                { num: "03", title: "Build", sub: "Engineer with discipline", desc: "Clean, readable, production-ready code — written with performance, accessibility, and scale in mind." },
                                { num: "04", title: "Launch & Iterate", sub: "Ship, learn, improve", desc: "We launch with confidence, measure real usage, and iterate based on feedback — not opinions." }
                            ].map((step, i) => (
                                <div key={i} className={`relative timeline-step ${i !== 3 ? 'pb-16' : ''}`}>
                                    <div className={`timeline-dot absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-gray-50 ${i > 0 ? 'bg-gray-300' : ''}`}>
                                        <span className="h-2 w-2 rounded-full bg-white"></span>
                                    </div>
                                    <span className="timeline-label text-sm font-bold uppercase tracking-wider">
                                        {step.num}. {step.title}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-2">{step.sub}</h3>
                                    <p className="text-gray-600 mt-1">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE BELIEVE ================= */}
            <section className="relative w-full py-24 md:py-32 bg-[#f9fafb] dark:bg-white/5 border-y border-[#f0f4f2] dark:border-white/5 overflow-hidden">
                {/* background accents */}
                <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"></div>

                <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">
                        {/* ================= LEFT : WHAT WE BELIEVE ================= */}
                        <div>
                            <span className="inline-flex items-center mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                                Principles
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                                What we believe
                            </h2>
                            <p className="mb-12 text-lg text-gray-600 leading-relaxed max-w-xl">
                                Our work is guided by a few non-negotiable principles.
                                They shape how we think, design, and build products.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: "visibility", title: "Clarity before visuals", desc: "We don’t design for decoration. We design to communicate clearly and effectively." },
                                    { icon: "bolt", title: "Execution is everything", desc: "Great ideas die without rigorous execution. We are builders first." },
                                    { icon: "sync", title: "Structure creates freedom", desc: "Strong systems and logic enable creativity where it actually matters." }
                                ].map((principle, i) => (
                                    <div key={i} className="group flex items-start gap-6 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                            <span className="material-symbols-outlined">{principle.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{principle.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ================= RIGHT : WHAT SETS US APART ================= */}
                        <div>
                            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                                Difference
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                                What sets us apart
                            </h2>
                            <p className="mb-12 text-lg text-gray-600 leading-relaxed max-w-xl">
                                Not buzzwords. Not process theatre.
                                Structural differences in how we think and execute.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: "grid_view", title: "Systematic design", desc: "We build scalable design systems — not fragile, one-off screens." },
                                    { icon: "code_blocks", title: "Code-first thinking", desc: "Designers who understand code. Developers who respect design." },
                                    { icon: "person_cancel", title: "No middlemen", desc: "You work directly with the builders. No dilution. No translation loss." },
                                ].map((item, i) => (
                                    <div key={i} className="group relative p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                            </div>
                                            <h3 className="text-lg font-extrabold text-gray-900">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="relative w-full py-28 md:py-40 overflow-hidden">
                {/* subtle background accents */}
                <div className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl"></div>

                <div className="relative max-w-[960px] mx-auto px-6 md:px-10 text-center">
                    {/* Eyebrow */}
                    <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                        Let’s work together
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-black tracking-[-0.035em] leading-tight text-gray-900 mb-8">
                        Have a project that needs
                        <br className="hidden md:block" />
                        <span className="text-primary mx-2">clarity</span> and
                        <span className="text-primary mx-2">execution</span>?
                    </h2>

                    {/* Supporting copy */}
                    <p className="mx-auto mb-12 max-w-xl text-lg text-gray-600 leading-relaxed">
                        We partner with teams who want things built right —
                        not rushed, not bloated, not fragile.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="group relative inline-flex items-center justify-center focus-visible:outline-none">
                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black rounded-lg transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-active:translate-x-1 group-active:translate-y-1"></span>
                            <span className="relative inline-flex items-center gap-3 px-9 py-4 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors font-bold text-lg border-2 border-black transition-all duration-200 group-hover:-translate-y-0.5 group-active:translate-y-0 focus-visible:ring-2 focus-visible:ring-black">
                                Start a project
                                <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </span>
                        </Link>

                        <Link to="/work" className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors underline underline-offset-4">
                            See our work
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
