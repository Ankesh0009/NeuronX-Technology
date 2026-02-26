import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Home() {
    const [revealImage, setRevealImage] = useState('');
    const [isRevealOpen, setIsRevealOpen] = useState(false);

    useEffect(() => {
        // REVEAL ANIMATION
        const revealElements = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealElements.forEach(el => revealObserver.observe(el));

        // STATS COUNTER
        const statNumbers = document.querySelectorAll(".stat-number");
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

        // TIMELINE STEPS
        const steps = document.querySelectorAll(".timeline-step");
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    steps.forEach(s => s.classList.remove("is-active"));
                    entry.target.classList.add("is-active");
                }
            });
        }, { rootMargin: "-30% 0px -40% 0px", threshold: 0.3 });
        steps.forEach(step => timelineObserver.observe(step));

        return () => {
            revealObserver.disconnect();
            statObserver.disconnect();
            timelineObserver.disconnect();
        };
    }, []);

    const openReveal = (img) => {
        setRevealImage(img);
        setIsRevealOpen(true);
    };

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden -mt-16">

                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

                {/* Hero Container */}
                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-20 pt-24 pb-16 lg:pt-32 lg:pb-24">

                    {/* ================= MAIN HERO GRID ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

                        {/* ================= LEFT CONTENT ================= */}
                        <div className="lg:col-span-7 flex flex-col gap-10 reveal">

                            {/* Availability */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 w-fit">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                                    Available for new projects
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-[2.75rem] sm:text-5xl xl:text-7xl font-black tracking-tight leading-[1.05]">
                                Websites & apps that turn
                                <span className="relative inline-block text-primary mx-2">
                                    ideas
                                    <svg className="absolute left-0 bottom-1 w-full h-3 text-primary/20 -z-10"
                                        viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                                into products.
                            </h1>

                            {/* Subheading */}
                            <p className="max-w-xl text-lg sm:text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-6">
                                Design + Development under one roof — we build digital products that convert.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link to="/contact" className="group inline-flex items-center justify-center h-14 px-8 bg-primary text-white hover:bg-primary-dark transition-colors font-bold rounded border-2 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
                                    Start Your Project
                                    <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                        arrow_forward
                                    </span>
                                </Link>
                                <Link to="/work" className="group flex items-center justify-center h-14 px-8 bg-transparent font-bold border-2 border-gray-200 hover:border-black rounded transition-all duration-300 hover:-translate-y-1">
                                    See Our Work
                                </Link>
                            </div>
                        </div>

                        {/* ================= RIGHT VISUAL ================= */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end reveal">
                            <div className="relative w-full max-w-[480px]">

                                {/* GRID */}
                                <div id="visual-grid" className="grid grid-cols-3 grid-rows-3 gap-5 aspect-square">
                                    {[
                                        "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?w=800",
                                        "https://images.unsplash.com/photo-1553181001-f9cf6c45afca?w=800",
                                        "https://plus.unsplash.com/premium_photo-1664297869562-099dmd?w=800",
                                        "https://images.unsplash.com/photo-1584005679717-7dda5e88bb52?w=800",
                                        "https://images.unsplash.com/photo-1599385549907-a8a47fb6e402?w=800",
                                        "https://images.unsplash.com/photo-1638140481609-ec648a2edbea?w=800",
                                        "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?w=800",
                                        "https://images.unsplash.com/photo-1553181001-f9cf6c45afca?w=800",
                                        "https://plus.unsplash.com/premium_photo-1664297869562-099dmd?w=800"
                                    ].map((src, i) => (
                                        <button key={i} className="visual-tile" onClick={() => openReveal(src)}>
                                            <img src={src} className="w-full h-full object-cover rounded-lg" alt="" />
                                        </button>
                                    ))}
                                </div>

                                {/* PRODUCT REVEAL */}
                                {isRevealOpen && (
                                    <div id="product-reveal" className="absolute inset-0 z-20 flex items-center justify-center">
                                        <div className="relative w-[85%] aspect-square bg-black rounded-2xl shadow-2xl overflow-hidden animate-[scaleIn_0.35s_ease-out]">

                                            <img id="reveal-image" src={revealImage} alt="Product preview" className="absolute inset-0 w-full h-full object-cover" />

                                            <div className="absolute top-0 right-0 h-20 w-20 bg-primary rounded-bl-full"></div>

                                            <div className="absolute bottom-4 left-4 text-white text-base font-bold">
                                                The Product
                                            </div>

                                            <button id="reveal-close" onClick={() => setIsRevealOpen(false)} className="absolute top-3 left-3 h-8 w-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition" aria-label="Close">
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ================= TRUSTED BY ================= */}
                        <div className=" border-t border-gray-100 lg:col-span-12 w-full mt-10 reveal">
                            <div className="mx-auto w-full max-w-[1000px]">
                                <p className="mb-2 text-[12px] font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                                    Trusted by
                                </p>
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    slidesPerView="auto"
                                    spaceBetween={64}
                                    speed={6000}
                                    freeMode={true}
                                    autoplay={{ delay: 0, disableOnInteraction: false }}
                                    className="trusted-swiper w-full"
                                >
                                    {["brand-1.svg", "brand-2.svg", "brand-3.svg", "brand-4.svg"].map((brand, i) => (
                                        <SwiperSlide key={i} className="flex justify-center w-auto">
                                            <img src={`/assets/brands/${brand}`}
                                                className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-5 bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 max-w-3xl reveal">
                            <span className="relative inline-flex items-center mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary rounded-full bg-primary/10 ring-1 ring-primary/20">
                                About NueroNex
                            </span>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-main">
                                We build digital products<br className="hidden sm:block" />
                                with purpose and precision.
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed text-text-muted">
                                NueroNex is a team of designers and engineers focused on outcomes.
                                We don’t chase trends or awards — we design and build software that
                                solves real problems and drives measurable business growth.
                            </p>
                            <Link to="/about" className="group relative inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
                                <span className="relative">
                                    Learn more about us
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left">
                                    </span>
                                </span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                        </div>

                        {/* RIGHT STATS */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-6 reveal">
                            {[
                                { label: "Products delivered", val: "30", sign: "+" },
                                { label: "Industry experience", val: "5", sign: "yrs" },
                                { label: "Avg. client growth", val: "145", sign: "%" },
                                { label: "Long-term focus", val: "100", sign: "%" }
                            ].map((stat, i) => (
                                <div key={i} className="group relative rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <span className="absolute top-4 right-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                                        {stat.sign}
                                    </span>
                                    <p className="stat-number text-4xl font-black text-text-main" data-target={stat.val}>
                                        0
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-text-muted">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="expertise" className="relative py-32 bg-white overflow-hidden">
                {/* soft background glow */}
                <div className="absolute -top-32 -right-32 h-96 w-96 bg-primary/10 rounded-full blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    {/* HEADER */}
                    <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal">
                        <div className="max-w-2xl">
                            <span className="relative inline-flex items-center mb-5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary rounded-full bg-primary/10 ring-1 ring-primary/20">
                                Our Expertise
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                                What we build
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                We don’t just write code. We engineer digital products and systems that
                                scale with your business and feel great to use.
                            </p>
                        </div>
                        <Link to="/services" className="group relative inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
                            <span className="relative">
                                View all services
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left">
                                </span>
                            </span>
                            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </Link>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 reveal">
                        {[
                            { title: "Conversion-focused websites", icon: "language", desc: "High-performance marketing and corporate websites designed to convert. Built with speed, SEO, and clarity at the core.", list: ["Marketing landing pages", "Corporate websites", "Headless CMS integration"] },
                            { title: "Full-stack app development", icon: "code", desc: "Scalable, secure applications built with modern stacks. From MVPs to production-ready SaaS platforms.", list: ["React / Next.js apps", "API development", "Database architecture"] },
                            { title: "Product UI/UX & systems", icon: "layers", desc: "Intuitive interfaces and design systems that improve usability and accelerate development across teams.", list: ["Design systems", "UX strategy", "Interactive prototyping"] }
                        ].map((card, i) => (
                            <article key={i} className="group relative flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-xl">
                                <div className="mb-6">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-900 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">{card.icon}</span>
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{card.desc}</p>
                                <ul className="mt-auto space-y-2 text-sm text-gray-500">
                                    {card.list.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-sm bg-primary"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="relative bg-gray-50 py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="lg:sticky lg:top-32 max-w-xl reveal">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                                    How we work
                                </span>
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

                        <div className="relative flex flex-col border-l-2 border-gray-200 pl-8 ml-4 lg:ml-0 reveal">
                            {[
                                { num: "01", title: "Discover", sub: "Define the problem & outcomes", desc: "We align on goals, constraints, and success metrics before design or development begins." },
                                { num: "02", title: "Design", sub: "Create structure & systems", desc: "We design flows, wireframes, and scalable systems that prevent rework and technical debt." },
                                { num: "03", title: "Build", sub: "Engineer with precision", desc: "Clean, semantic, production-ready code with performance, accessibility, and maintainability baked in." },
                                { num: "04", title: "Launch", sub: "Deliver & iterate", desc: "We ship polished products and continue iterating based on real user feedback and data." }
                            ].map((step, i) => (
                                <div key={i} className={`relative timeline-step ${i !== 3 ? 'pb-16' : ''}`}>
                                    <div className="timeline-dot absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-gray-50">
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

            {/* Works Section */}
            <section id="work" className="relative bg-white py-20 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-primary/10 blur-[120px] rounded-full"></div>
                    <div className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-end reveal">
                        <div className="md:col-span-7 max-w-2xl">
                            <span className="inline-flex items-center mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary rounded-full bg-primary/10 ring-1 ring-primary/20">
                                Our Work
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                                Recent projects<br className="hidden sm:block" />
                                we’ve shipped.
                            </h2>
                        </div>
                        <div className="md:col-span-5">
                            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-primary pl-6">
                                A curated selection of real-world products we’ve built across web,
                                mobile, and digital platforms — focused on outcomes, not noise.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 reveal">
                        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all duration-500 hover:border-primary hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400"
                                    alt="InspireLeap Learning Platform" className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    EdTech • Learning Platform
                                </span>
                                <h3 className="mt-2 text-xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                    InspireLeap – Online Learning Platform
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">Next.js</span>
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">Tailwind</span>
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">CMS</span>
                                </div>
                            </div>
                        </article>

                        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all duration-500 hover:border-primary hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1400"
                                    alt="PR Fitness Gym App" className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Fitness • Mobile App
                                </span>
                                <h3 className="mt-2 text-xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                    PR Fitness – Gym & Training App
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">React Native</span>
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">Firebase</span>
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">Stripe</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="mt-28 flex justify-center reveal">
                        <Link to="/work" className="group relative inline-flex items-center justify-center focus-visible:outline-none">
                            <span className="absolute inset-0 rounded bg-black translate-x-2 translate-y-2 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-active:translate-x-1 group-active:translate-y-1"></span>
                            <span className="relative inline-flex items-center gap-3 bg-primary text-white hover:bg-primary-dark transition-colors font-bold py-4 px-12 rounded border-2 border-black transition-all duration-300 group-active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-black">
                                See full portfolio
                                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="relative overflow-hidden py-28 bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#061a12]"></div>
                <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[160px]"></div>
                <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[180px]"></div>
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center reveal">
                    <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        Have a project that needs to work — <br className="hidden sm:block" />
                        not just look good?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
                        Let’s build something clear, scalable, and engineered for real results.
                    </p>
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/contact" className="group relative inline-flex items-center justify-center">
                            <span className="absolute inset-0 rounded bg-primary/40 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black/40 rounded transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="relative inline-flex items-center gap-2 rounded bg-primary px-10 py-4 text-sm font-bold text-white hover:bg-primary-dark border-2 border-black transition-transform duration-200 group-hover:-translate-y-1">
                                Start a project
                                <span className="relative inline-flex items-center">
                                    <span className="material-symbols-outlined transition-all duration-200 group-hover:opacity-0 group-hover:scale-75">arrow_outward</span>
                                    <span className="material-symbols-outlined absolute opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1">arrow_forward</span>
                                </span>
                            </span>
                        </Link>

                        <Link to="/work" className="group relative text-sm font-semibold text-white/80 transition-colors hover:text-primary">
                            <span className="relative">
                                See our work
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                            </span>
                            →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
