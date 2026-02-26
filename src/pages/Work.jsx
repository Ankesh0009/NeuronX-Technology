import { useState } from 'react';

export default function Work() {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "InspireLeap",
            category: "Website",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
            description: "Learning platform website built for clarity & scale.",
            typeTag: "Website"
        },
        {
            id: 2,
            title: "PR Fitness",
            category: "App", // Mapped to 'Web Apps' or separate? Let's assume 'Web Apps' covers apps or create specific logic
            image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1200",
            description: "Gym & workout tracking mobile application.",
            typeTag: "App"
        },
        {
            id: 3,
            title: "Dashboard Pro",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
            description: "Internal analytics web application.",
            typeTag: "Web App"
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => {
            if (filter === 'Websites') return p.category === 'Website';
            if (filter === 'Web Apps') return p.category === 'Web App' || p.category === 'App';
            if (filter === 'Brand & Identity') return p.category === 'Brand';
            return true;
        });

    return (
        <main className="flex-grow">
            {/* ================= WORK HERO ================= */}
            <section className="relative overflow-hidden">
                {/* subtle background grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20">
                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                            Case studies
                        </span>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-text-main dark:text-white mb-6">
                            Work that shipped,
                            <br className="hidden sm:block" />
                            <span className="text-primary">not just designed.</span>
                        </h1>

                        {/* Subtext */}
                        <p className="max-w-2xl text-lg md:text-xl text-text-muted dark:text-gray-400 leading-relaxed border-l-4 border-primary pl-6">
                            A selection of products we’ve built, designed, and shipped —
                            focused on clarity, performance, and real business outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= WORK FILTERS ================= */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
                <div className="flex flex-wrap gap-3 items-center">
                    {['All', 'Websites', 'Web Apps', 'Brand & Identity'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`h-9 px-5 rounded-full text-sm font-medium border transition-all duration-300
                ${filter === f
                                    ? 'bg-text-main text-white border-text-main'
                                    : 'bg-transparent text-text-main dark:text-gray-300 border-gray-200 hover:border-text-main hover:-translate-y-[1px] hover:shadow-sm'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* ================= PROJECT GRID ================= */}
            <section className="mx-auto max-w-[1280px] px-6 py-10 lg:px-12">
                <div id="projectGrid" className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="group cursor-pointer flex flex-col gap-4">
                                <div className="overflow-hidden rounded-xl border border-gray-100 aspect-[4/3] relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${project.image}")` }}
                                    ></div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-text-main">{project.title}</h3>
                                    <p className="text-sm text-text-secondary mt-1">
                                        {project.description}
                                    </p>
                                    <span className="inline-block mt-3 text-xs font-semibold rounded-full px-3 py-1 bg-gray-100">
                                        {project.typeTag}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ================= CASE STUDY PREVIEW ================= */}
            <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-12">
                <div className="group relative rounded-3xl border border-gray-200 bg-white p-6 lg:p-10 transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:border-primary/30 overflow-hidden">
                    {/* subtle glow */}
                    <div className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"></div>

                    <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                        {/* ================= IMAGE ================= */}
                        <div className="lg:w-3/5 w-full relative overflow-hidden rounded-2xl aspect-video">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0b5GBdAcREA6wmTk6UouLUeNa9nh6tCy0Tbh2K6vrmZaOL0UflldhHZewZfkBsGfLk-Ekof6EcUTmRKIApq538CbZxsNkap3nYlJSsKjShySjrRFk1J-dIk9FbDc3U9Gt9UBsn87c52wYW5eWqIzqxlLw3fHYhGhWNEVLG5tvXLaDALLrBE9bwybT5FmWRNpDGjui5SOZvPF-GazUxL6HA-qggiIEaFcNfFb-WWCn7CGUx3OvQGw74sqZ8Ci17lUepMgDUbEicpQ")' }}
                            ></div>
                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                            {/* label */}
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-black/60 text-white backdrop-blur">
                                Case Study
                            </span>
                        </div>

                        {/* ================= CONTENT ================= */}
                        <div className="lg:w-2/5 flex flex-col justify-center">
                            <span className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                                Featured project
                            </span>
                            <h2 className="mb-5 text-3xl md:text-4xl font-extrabold tracking-tight text-text-main">
                                Alpha Logistics
                            </h2>
                            <p className="mb-10 text-lg text-text-secondary leading-relaxed">
                                We redefined the supply-chain interface with clarity and precision,
                                reducing operational overhead by <strong>15%</strong> within the
                                first quarter post-launch.
                            </p>

                            {/* CTA (locked) */}
                            <div className="flex flex-col gap-2">
                                <button className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-400 cursor-not-allowed">
                                    View full case study
                                    <span className="material-symbols-outlined text-sm">lock</span>
                                </button>
                                <span className="text-xs text-gray-400 font-medium">
                                    Detailed breakdown coming soon
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= USP / HOW WE BUILD ================= */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* ================= LEFT ================= */}
                    <div className="lg:col-span-5">
                        <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 ring-1 ring-primary/20">
                            Our Approach
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main dark:text-white mb-6">
                            How we build
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                            Great software isn’t the result of decoration.
                            It comes from disciplined thinking, strong systems,
                            and execution that holds up over time.
                        </p>
                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: "visibility", title: "Clarity before visuals", desc: "We solve the problem first — visuals come after the logic is right." },
                            { icon: "grid_view", title: "Systems before screens", desc: "Scalable foundations that prevent rework and future debt." },
                            { icon: "bolt", title: "Execution before opinions", desc: "Decisions backed by data, testing, and real outcomes." },
                            { icon: "forum", title: "Structured communication", desc: "Clear milestones, honest updates, no guessing games." }
                        ].map((item, i) => (
                            <div key={i} className="group rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-text-main dark:text-white text-lg mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="relative overflow-hidden py-28 bg-black text-white">
                <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8">
                        Have a project that needs to work —
                        <br className="hidden sm:block" />
                        <span className="text-primary">not just look good?</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-gray-400 leading-relaxed mb-12">
                        Let’s build something clear, scalable, and engineered
                        for real-world results.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="/contact" className="group relative inline-flex items-center justify-center">
                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary/30 rounded-lg transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="relative inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-base font-bold text-white hover:bg-primary-dark border-2 border-black">
                                Start a project
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </span>
                        </a>
                        <a href="/about" className="text-sm font-semibold text-gray-300 hover:text-primary transition-colors underline underline-offset-4">
                            Read about us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
