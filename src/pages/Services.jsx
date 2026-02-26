import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <>
            <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 lg:px-20 bg-white border-b border-neutral-100">
                {/* subtle grid */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.35]"></div>

                {/* accent glow */}
                <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* ================= LEFT CONTENT ================= */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            {/* Eyebrow */}
                            <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                                Services
                            </span>

                            {/* Heading */}
                            <h1 className="text-neutral-900 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-[-0.04em]">
                                Digital services built for
                                <span className="text-primary mx-2">clarity</span>,
                                scale & execution.
                            </h1>

                            {/* Description */}
                            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                                We design, build, and maintain digital products end-to-end —
                                focusing on systems, performance, and outcomes instead of noise.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <a href="#services-list" className="group relative inline-flex items-center justify-center focus-visible:outline-none">
                                    {/* subtle depth shadow */}
                                    <span className="absolute inset-0 translate-x-1 translate-y-1 bg-black rounded-lg transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                    {/* button */}
                                    <span className="relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary-dark border-2 border-black transition-all duration-200 group-hover:-translate-y-0.5 group-active:translate-y-0 focus-visible:ring-2 focus-visible:ring-black">
                                        View services
                                        <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">
                                            arrow_forward
                                        </span>
                                    </span>
                                </a>

                                <Link to="/contact" className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-8 py-4 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition">
                                    Start a project
                                </Link>
                            </div>
                        </div>

                        {/* ================= RIGHT STATS ================= */}
                        <div className="lg:col-span-5">
                            <div className="grid grid-cols-2 gap-6 max-w-md">
                                {[
                                    { val: "30+", label: "Products shipped" },
                                    { val: "5+", label: "Years experience" },
                                    { val: "145%", label: "Avg client growth" },
                                    { val: "100%", label: "Delivery ownership" }
                                ].map((stat, i) => (
                                    <div key={i} className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-sm">
                                        <p className="text-4xl font-black text-neutral-900">{stat.val}</p>
                                        <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES OVERVIEW ================= */}
            <section id="services-list" className="relative py-24 lg:py-32 bg-white overflow-hidden">
                {/* subtle accent */}
                <div className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-3xl mb-20">
                        <span className="inline-flex items-center mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                            Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-main">
                            What we do
                        </h2>
                        <p className="mt-6 text-lg text-text-muted leading-relaxed">
                            We don’t offer everything.
                            We focus on the few things that actually move products forward.
                        </p>
                    </div>

                    {/* ================= CARDS ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { title: "Website Development", icon: "web", desc: "High-performance marketing and product websites built to convert, scale, and load fast on every device.", list: ["Landing pages & marketing sites", "SEO-first architecture", "Performance & accessibility optimization"] },
                            { title: "App Development", icon: "phone_iphone", desc: "Scalable mobile and web applications engineered for long-term growth, not quick demos.", list: ["Android & iOS apps", "Web apps & dashboards", "API & backend integration"] },
                            { title: "Graphic Design", icon: "brush", desc: "Visual systems that support branding, communication, and consistency across platforms.", list: ["Brand & identity design", "Marketing creatives", "UI visual systems"] },
                            { title: "Video Editing", icon: "movie", desc: "Clean, purposeful video edits designed to hold attention and communicate fast.", list: ["Promotional & brand videos", "Social media content", "Motion graphics & cuts"] }
                        ].map((service, i) => (
                            <article key={i} className="group relative p-10 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:border-primary">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                    <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-text-main mb-4">{service.title}</h3>
                                <p className="text-text-muted leading-relaxed mb-6">{service.desc}</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {service.list.map((item, j) => (
                                        <li key={j}>• {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                                    View service
                                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                                        arrow_forward
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOW WE DELIVER ================= */}
            <section className="relative px-6 py-24 md:px-10 lg:px-20 bg-white border-y border-neutral-100">
                <div className="mx-auto max-w-3xl flex flex-col gap-12">
                    {/* Header */}
                    <div>
                        <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                            Delivery
                        </span>
                        <h2 className="text-neutral-900 text-3xl md:text-4xl font-extrabold tracking-tight">
                            How we deliver
                        </h2>
                        <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
                            Clear process. No confusion.
                            Here’s how we handle each service end-to-end.
                        </p>
                    </div>

                    {/* ================= ACCORDIONS ================= */}
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                title: "Website Development",
                                subtitle: "Marketing sites • business websites • landing pages",
                                desc: "We build fast, conversion-focused websites with clean structure and zero bloat.",
                                list: ["SEO-first structure", "Mobile & performance optimized", "Clear messaging & CTAs"]
                            },
                            {
                                title: "App Development",
                                subtitle: "Web apps • mobile apps • dashboards",
                                desc: "From MVP to production-ready apps — built with scale in mind, not shortcuts.",
                                list: ["Clean frontend + backend architecture", "API & database integration", "Maintainable, readable codebase"]
                            },
                            {
                                title: "Graphic Design",
                                subtitle: "Brand visuals • marketing creatives • UI assets",
                                desc: "Visuals that support your product and brand — not random decoration.",
                                list: ["Brand identity & design systems", "Social & marketing creatives", "Consistent visual language"]
                            },
                            {
                                title: "Video Editing",
                                subtitle: "Promo videos • social content • motion edits",
                                desc: "Clean, sharp edits that keep attention and communicate fast.",
                                list: ["Short-form & long-form edits", "Motion graphics & transitions", "Platform-ready exports"]
                            }
                        ].map((item, i) => (
                            <details key={i} className="group rounded-2xl border border-neutral-200 bg-white open:bg-neutral-50/60 open:border-primary/40 transition-all duration-300">
                                <summary className="flex cursor-pointer items-center justify-between p-6 md:p-7 list-none">
                                    <div>
                                        <p className="text-neutral-900 text-lg font-bold">{item.title}</p>
                                        <p className="text-sm text-neutral-500">{item.subtitle}</p>
                                    </div>
                                    <span className="material-symbols-outlined text-neutral-400 transition-transform duration-300 group-open:rotate-180">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 md:px-7 pb-6 pt-0 text-neutral-600 leading-relaxed space-y-3">
                                    <p>{item.desc}</p>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        {item.list.map((li, j) => <li key={j}>{li}</li>)}
                                    </ul>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROCESS SNAPSHOT ================= */}
            <section className="relative px-6 py-24 md:px-10 lg:px-20 bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl flex flex-col gap-14">
                    {/* Header */}
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                            Process
                        </span>
                        <h2 className="text-neutral-900 text-3xl md:text-4xl font-extrabold tracking-tight">
                            How we work
                        </h2>
                        <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
                            Simple, structured, and outcome-driven — from idea to launch.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute top-[52px] left-0 w-full h-[2px] bg-neutral-200"></div>

                        {/* Steps */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                            {[
                                { num: "01", title: "Discover", desc: "Understand the problem, users, constraints, and success metrics before any design or development." },
                                { num: "02", title: "Design", desc: "Create structure, flows, and systems first — visuals come after the foundation is clear." },
                                { num: "03", title: "Build", desc: "Engineer clean, scalable, production-ready code with performance and maintainability in mind." },
                                { num: "04", title: "Deliver", desc: "Launch with confidence. We handle deployment, testing, and handoff so you’re ready to grow." }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col gap-5 group">
                                    <div className="size-24 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-4xl font-black text-neutral-300 shadow-sm transition-all duration-300 group-hover:text-primary group-hover:border-primary group-hover:-translate-y-1">
                                        {step.num}
                                    </div>
                                    <div className="flex flex-col gap-2 pt-1">
                                        <h3 className="text-neutral-900 text-xl font-bold">{step.title}</h3>
                                        <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
