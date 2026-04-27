import { useState, useEffect, useRef } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    id: 1,
    title: "Myntra E-Commerce",
    description:
      "I build 1st project a E-Commerce website using HTML, CSS, with morden UI Responsive and hover annimation. ",
    image: "/img/unnamed.webp",
    tech: ["HTML", "CSS",],
    github: "https://github.com/mahendrasaini1249/myntra-clone",
    demo: "https://mintra-website.netlify.app/",
  },
  {
    id: 2,
    title: "Packshifts Shifting-Partner",
    description:
      "I create a order-shifting website using HTML, CSS, JavaScript a fully responsive website and focus smooth user experience fast loading speed and using annimation ",
    image: "/img/maxresdefault.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mahendrasaini1249/packshift",
    demo: "https://transport-service-website.netlify.app/",
  },
  {
    id: 3,
    title: "Blinkit Quick-E-Commerce ",
    description:
      "I created blinkit e-Commerce websiteb a fully responsive and clean UI using HTML, CSS, JavaScript, and Bootstarp",
    image: "/img/download.png",
    tech: ["HTML", "CSS", "JavaScript", "Bootstarp"],
    github: "https://github.com/mahendrasaini1249/blinkit-website",
    demo: "https://instent-blinkit-web.netlify.app/",
  },
  {
    id: 4,
    title: "Food service - Restorent",
    description:
      "This is a morden responsive restorent website creating using Next.js, Tailwind CSS & JavaScript it includes a hero section , menu section , about section, reservation from c, and a clean UI for a smooth user experience.  ",
    image: "/img/78860384.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "next.js"],
    github: "https://github.com/mahendrasaini1249/Food-service-website",
    demo: "https://restoransproject.netlify.app/",
  },
  {
    id: 5,
    title: "Mini E-com - Website",
    description:
      "I created the Dynamic Mini-ecom website using HTML, CSS, JavaScript, react.js and dummy JSON API a fully responsive and Components base website ",
    image: "/img/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.avif",
    tech: ["HTML", "CSS", "React.js", , "Tailwind CSS", "Dummy API",],
    github: "https://github.com/mahendrasaini1249/miniecom_react  ",
    demo: "https://mini-ecommrace-website.netlify.app/",
  },
  {
    id: 6,
    title: "Blinkit E-Commerce ",
    description:
      "Built a fully responsive **Blinkit Clone** using **HTML, CSS, JavaScript, React.js, Tailwind CSS, Media Queries, Dynamic Routing, Reusable Components, Dummy API Integration, and Slick Slider for smooth product sliders**, focusing on **fast rendering, clean UI, and optimized frontend performance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndQbZfhTaEfvaihfBNLR8_2su03x747tCzw&s",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "dummy api"],
    github: "https://github.com/mahendrasaini1249/blinkit-ecom-dummyapi/tree/master",
    demo: "https://blinkit-ecom.netlify.app/",
  },

];

const SKILLS = [
  { name: "React / Next.js", level: 90 },
  { name: "JavaScript ", level: 90 },
  { name: "HTML & CSS", level: 98 },
  { name: "Tailwind CSS / Bootstarp ", level: 92 },
  { name: "Node.js / Express", level: 78 },
  { name: "Git & CI/CD", level: 82 },
  { name: "REST & APIs", level: 85 },
  { name: "UI/UX Design", level: 90 },
];

const BADGES = [
  "React", "Next.js", "JavaScript", "Tailwind CSS", "Bootstarp",
  "HTML5", "CSS3", "Node.js", "Express", "REST APIs",
  "Git", "Figma", "MongoDB",
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useScrollSpy() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      let current = "Home";
      sections.forEach((s) => {
        if (s && window.scrollY >= s.offsetTop - 120) current = s.id.charAt(0).toUpperCase() + s.id.slice(1);
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/60 transition-all duration-300">
            MK
          </span>
          <span className="text-white font-semibold tracking-tight text-sm">
            Mahendra <span className="text-violet-400">Kumar</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${active === link
                  ? "text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {active === link && (
                  <span className="absolute inset-0 rounded-lg bg-violet-500/15 border border-violet-500/30" />
                )}
                <span className="relative">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40"
          >
            Hire Me
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Menu"
          >
            <span className={`w-5 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          } bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active === link
                  ? "text-white bg-violet-500/15 border border-violet-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mb-8"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4"
          style={{ animation: "fadeSlideUp 0.6s 0.1s ease both" }}
        >
          Mahendra Kumar
          <br />
          <span
            className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Saini
          </span>
        </h1>

        {/* Title */}
        <p
          className="text-lg sm:text-xl text-slate-400 font-medium mb-4 tracking-widest uppercase"
          style={{ animation: "fadeSlideUp 0.6s 0.2s ease both" }}
        >
          Frontend & Mern Stack Developer
        </p>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeSlideUp 0.6s 0.3s ease both" }}
        >
          I am a passionate Frontend & MERN Stack Developer skilled in building
          responsive, high-performance web applications using React, JavaScript,
          and modern UI technologies. I love creating clean, user-friendly
          interfaces and continuously learning new technologies to improve my
          development skills.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeSlideUp 0.6s 0.4s ease both" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-violet-600/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            View Projects
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 mt-16 pt-10 border-t border-white/5"
          style={{ animation: "fadeSlideUp 0.6s 0.5s ease both" }}
        >
          {[["Fresher", "Years Exp."], ["12+", "Projects"],].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-black text-white">{n}</div>
              <div className="text-xs text-slate-500 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-600">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="bg-[#0d0d14] py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <SectionLabel>About Me</SectionLabel>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Section */}
          <div className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 blur-2xl opacity-30" />

            {/* Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/img/image.png"
                alt="Mahendra Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Open to work badge */}
            <div className="absolute -top-4 -left-4 px-3 py-1 rounded-lg bg-violet-600 text-white text-xs shadow-lg">
              Open to Work
            </div>

            {/* Location */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-[#0d0d14] border border-white/10 shadow-2xl">
              <p className="text-xs text-slate-500">Based in</p>
              <p className="text-sm font-semibold text-white">Jaipur, India</p>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Building modern web experiences{" "}
              <span className="text-violet-400">with clean code</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-4">
              I'm Mahendra Kumar, a passionate Frontend & MERN Stack Developer
              who loves building responsive, high-performance web applications.
              I specialize in React.js and modern JavaScript to create clean,
              user-friendly interfaces.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              I enjoy solving real-world problems through code and continuously
              improving my skills. Currently, I'm exploring full-stack
              development and working on projects that enhance user experience
              and performance.
            </p>

            {/* Highlight line */}
            <p className="text-violet-400 font-medium text-sm mb-6">
              🚀 Focused on building real-world projects and improving daily.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap  gap-2">
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Git",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg hover:bg-violet-500/40 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Projects ────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-[#111118] hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-900/30 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms", transitionDuration: "600ms" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs font-medium border border-white/8">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-slate-300 text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-200"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-300 text-sm font-medium hover:bg-violet-600/40 transition-all duration-200"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0f] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Things I've <span className="text-violet-400">built</span>
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-1"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="bg-[#0d0d14] py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-12">
          What I <span className="text-violet-400">work with</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Progress Bars */}
          <div className="space-y-5">
            {SKILLS.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-violet-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-1000"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Badges grid */}
          <div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Technologies and tools I use regularly to build modern, scalable
              applications — from ideation to deployment.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {BADGES.map((b, i) => (
                <span
                  key={b}
                  className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-sm font-medium hover:bg-violet-500/15 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200 cursor-default"
                  style={{
                    opacity: inView ? 1 : 0,
                    transitionDelay: `${i * 40}ms`,
                    transitionProperty: "opacity",
                    transitionDuration: "500ms",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-violet-600/10 to-cyan-500/10 border border-white/8">
              <p className="text-white font-semibold mb-1">Always learning</p>
              <p className="text-slate-400 text-sm">
                Currently exploring AI/ML integration in web apps and advanced
                animation patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real form submission
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0a0a0f] py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
          Let's <span className="text-violet-400">work together</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg">
          Have a project in mind or want to chat about opportunities? I'd love
          to hear from you. Drop me a message and I'll get back within 24 hours.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter The Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-violet-600/30 hover:shadow-violet-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { label: "Email", value: "sainimahendra1249@gmail.com", icon: "✉" },
              { label: "Location", value: "Jaipur India ", icon: "📍" },
              { label: "Availability", value: "Open to opportunities", icon: "⚡" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                <span className="text-lg mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-sm text-slate-300 font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <SocialLink href="https://github.com/mahendrasaini1249" label="GitHub" icon={<GithubIcon />} />
              <SocialLink href="https://www.linkedin.com/in/mahendra-kumar-saini-7b4b17369/" label="LinkedIn" icon={<LinkedinIcon />} />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#07070c] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Mahendra Kumar. Crafted with ☕ & React.
        </p>
        <div className="flex gap-4">
          <SocialLink href="https://github.com/mahendrasaini1249" label="GitHub" icon={<GithubIcon />} small />
          <SocialLink href="https://www.linkedin.com/in/mahendra-kumar-saini-7b4b17369/" label="LinkedIn" icon={<LinkedinIcon />} small />
        </div>
      </div>
    </footer>
  );
}

// ─── Shared Components ────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-transparent" />
      <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">{children}</span>
    </div>
  );
}

function SocialLink({ href, label, icon, small }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${small ? "w-8 h-8 text-slate-600 hover:text-slate-300" : "w-10 h-10 text-slate-400 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/5"
        } rounded-lg flex items-center justify-center transition-all duration-200`}
    >
      {icon}
    </a>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function GithubIcon() {
  return (
    <div>
      <FaGithubSquare />
    </div>
  );
}

function LinkedinIcon() {
  return (
    <div>
      <FaLinkedin/>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;900&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #3d2b6e; border-radius: 2px; }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}