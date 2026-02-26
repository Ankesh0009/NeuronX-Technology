export default function Contact() {
    return (
        <main className="flex-grow">
            {/* ================= CONTACT HERO ================= */}
            <section className="relative overflow-hidden -mt-20">
                {/* Background glow */}
                <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]"></div>

                <div className="relative max-w-[1280px] mx-auto px-6 py-20 md:py-28">
                    <div className="max-w-4xl">
                        {/* Eyebrow */}
                        <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                            Start a project
                        </span>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[1.04] text-text-main dark:text-white mb-8">
                            Let’s build something
                            <span className="text-primary mx-2">that actually works</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-text-main dark:text-gray-300 font-medium leading-relaxed max-w-3xl mb-10">
                            No pitches. No buzzwords.
                            Just clear thinking, structured execution,
                            and honest timelines.
                        </p>

                        {/* Divider */}
                        <div className="h-1 w-24 bg-primary rounded-full mb-10"></div>

                        {/* Supporting copy */}
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-14">
                            If you’re serious about building a website, app, or digital product
                            that delivers real outcomes — let’s talk.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href="#contact-form" className="inline-flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-white hover:bg-primary-dark transition-colors font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 active:scale-95">
                                Start the conversation
                            </a>
                            <a href="/process" className="inline-flex items-center justify-center rounded-lg h-14 px-8 border border-gray-300 dark:border-gray-700 text-text-main dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                See how we work →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section id="contact-form" className="relative w-full bg-white border-t border-[#f0f4f2]">
                <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* ================= LEFT : CONTACT FORM ================= */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            <form id="contactForm" className="flex flex-col gap-8" noValidate onSubmit={(e) => e.preventDefault()}>
                                {/* ================= ROW 1 ================= */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                            Name <span className="text-primary">*</span>
                                        </span>
                                        <input id="name" name="name" type="text" required minLength="2" autoComplete="name" placeholder="Your full name" className="w-full h-14 px-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
                                    </label>

                                    {/* Email */}
                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                            Email <span className="text-primary">*</span>
                                        </span>
                                        <input id="email" name="email" type="email" required autoComplete="email" placeholder="name@company.com" className="w-full h-14 px-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
                                    </label>
                                </div>

                                {/* ================= ROW 2 ================= */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Company */}
                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                            Company <span className="text-text-muted text-xs">(Optional)</span>
                                        </span>
                                        <input id="company" name="company" type="text" autoComplete="organization" placeholder="Company name" className="w-full h-14 px-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
                                    </label>

                                    {/* Website */}
                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                            Website <span className="text-text-muted text-xs">(Optional)</span>
                                        </span>
                                        <input id="website" name="website" type="url" placeholder="https://" autoComplete="url" className="w-full h-14 px-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
                                    </label>
                                </div>

                                {/* ================= ROW 3 ================= */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Project Type */}
                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                            Project Type
                                        </span>
                                        <div className="relative">
                                            <select id="projectType" name="projectType" required className="w-full h-14 px-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none appearance-none cursor-pointer">
                                                <option value="" disabled selected>Select type…</option>
                                                <option>Website</option>
                                                <option>Web App</option>
                                                <option>Brand & Digital Presence</option>
                                                <option>Mixed</option>
                                            </select>
                                        </div>
                                    </label>

                                    {/* Budget */}
                                    <label className="flex flex-col gap-2 group">
                                        <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                            Budget Range
                                        </span>
                                        <div className="relative">
                                            <select id="budget" name="budget" className="w-full h-14 px-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none appearance-none cursor-pointer">
                                                <option value="" selected>Not decided</option>
                                                <option>50k – 1.5L</option>
                                                <option>1.5L – 4L</option>
                                                <option>4L+</option>
                                            </select>
                                        </div>
                                    </label>
                                </div>

                                {/* ================= MESSAGE ================= */}
                                <label className="flex flex-col gap-2 group">
                                    <span className="text-sm font-semibold text-text-main group-focus-within:text-primary">
                                        Project Details / Goals
                                    </span>
                                    <textarea id="message" name="message" rows="6" required minLength="20" placeholder="What are you building? Timeline? Success criteria?" className="w-full p-4 rounded-sm border border-[#dbe6e1] bg-white text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none resize-y"></textarea>
                                    <span className="text-xs text-text-muted">
                                        Minimum 20 characters. Be specific.
                                    </span>
                                </label>

                                {/* ================= SUBMIT ================= */}
                                <div className="pt-10 mt-6 border-t border-[#f0f4f2]">
                                    <h3 className="text-3xl font-black text-text-main mb-8 tracking-tight">
                                        Ready when you are.
                                    </h3>
                                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                                        <button type="submit" className="h-14 px-10 bg-primary text-white font-bold rounded-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                                            Send Message
                                        </button>
                                        <a href="/work" className="h-14 flex items-center gap-2 font-semibold text-text-main hover:text-primary transition-colors">
                                            See Our Work →
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* ================= RIGHT : EXPECTATIONS ================= */}
                        <div className="lg:col-span-5 order-1 lg:order-2">
                            <div className="sticky top-24 bg-background-light border border-[#f0f4f2] rounded-lg p-8 md:p-10 shadow-sm">
                                <h3 className="text-2xl font-black text-text-main mb-3 tracking-tight">
                                    Before we begin
                                </h3>
                                <p className="text-text-muted text-base mb-10">
                                    We value clear goals and direct communication.
                                </p>
                                <ul className="flex flex-col gap-7">
                                    {[
                                        { icon: "check_circle", title: "Clear goals, clear outcomes", desc: "We define success early so everyone is aligned." },
                                        { icon: "chat_bubble", title: "Direct communication", desc: "No middle-men, just makers talking to clients." },
                                        { icon: "package_2", title: "Predictable delivery", desc: "No surprises, just shipping on schedule." },
                                        { icon: "rate_review", title: "Structured feedback", desc: "Iterative and honest loops to improve fast." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main">{item.title}</h4>
                                                <p className="text-text-muted text-sm">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="w-full h-px bg-[#dbe6e1] my-12"></div>
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                                            Direct Contact
                                        </h4>
                                        <a href="mailto:hello@digicraft.in" className="text-xl md:text-2xl font-black text-text-main hover:text-primary border-b-2 border-transparent hover:border-primary inline-block pb-1">
                                            hello@digicraft.in
                                        </a>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                                            Location
                                        </h4>
                                        <div className="flex items-center gap-2 font-medium">
                                            <span className="material-symbols-outlined text-primary">public</span>
                                            Remote-first, India based.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
