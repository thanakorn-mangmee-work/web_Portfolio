import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLang } from '../context/AppContext'
import { translations } from '../data/translations'
import { projectsData } from '../data/projects'

const SKILLS = [
  { icon: 'html', label: 'React.js' },
  { icon: 'javascript', label: 'Node.js' },
  { icon: 'database', label: 'MySQL' },
  { icon: 'dns', label: 'Prisma / TypeORM' },
  { icon: 'bolt', label: 'Socket.IO' },
  { icon: 'style', label: 'Tailwind' },
  { icon: 'smartphone', label: 'React Native' },
  { icon: 'terminal', label: 'Git/CLI' },
  { icon: 'webhook', label: 'Webhooks' },
  { icon: 'api', label: 'REST API' },
  { icon: 'psychology', label: 'AI Integration' },
  { icon: 'security', label: 'Auth/JWT' },
]

const PROJECTS = [
  { id: 'boxify', filterType: 'web', icon: 'shopping_bag', catKey: 'project1_cat', titleKey: 'project1_title', descKey: 'project1_desc', tags: ['React 18', 'Express 5', 'Prisma', 'MySQL', 'Socket.IO', 'React Native'] },
  { id: 'gtxshop', filterType: 'app', icon: 'storefront', catKey: 'project4_cat', titleKey: 'project4_title', descKey: 'project4_desc', tags: ['NestJS 11', 'React Native', 'Expo', 'FastAPI'] },
]

export function HomePage() {
  const { lang } = useLang()
  const location = useLocation()
  const [projectFilter, setProjectFilter] = useState('all') // 'all' | 'app' | 'web'
  const t = translations[lang] || translations.en

  const filteredProjects = projectFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterType === projectFilter)

  useEffect(() => {
    const hash = location.hash || window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])

  // Scroll reveal: add .in to .stagger and .reveal when in viewport (re-run when filter changes so new cards get observed)
  useEffect(() => {
    let observer
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.stagger, .reveal, .heading-underline')
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.01, rootMargin: '40px 0px 40px 0px' }
      )
      els.forEach((el) => observer.observe(el))
    }, 50)
    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [projectFilter])

  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 scroll-mt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="hero-anim">
                <span className="badge-pulse inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary dark:bg-primary/20">
                  {t.hero_badge}
                </span>
              </div>
              <div className="hero-anim">
                <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                  {t.hero_title} <span className="text-primary">{t.hero_title_highlight}</span> {t.hero_title_suffix}
                </h1>
              </div>
              <div className="hero-anim">
                <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {t.hero_sub}
                </p>
              </div>
            </div>
            <div className="hero-btn-anim flex flex-wrap gap-4">
              <a href="#projects" className="btn-shine inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all">
                {t.hero_view_work}
              </a>
            </div>
          </div>
          <div className="hero-img-anim relative">
            <div className="hero-float aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 lg:max-w-none">
              <div className="h-full w-full rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  className="h-full w-full object-cover opacity-90 mix-blend-overlay"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-9xl opacity-20">code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 py-20" id="projects">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <h2 className="heading-underline text-3xl font-black tracking-tight md:text-4xl">
                {t.projects_heading}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">{t.projects_sub}</p>
            </div>
            <span className="group flex items-center gap-2 text-sm font-bold text-primary">
              {t.projects_see_all}
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              type="button"
              onClick={() => setProjectFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                projectFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.filter_all}
            </button>
            <button
              type="button"
              onClick={() => setProjectFilter('app')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                projectFilter === 'app'
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.filter_app}
            </button>
            <button
              type="button"
              onClick={() => setProjectFilter('web')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                projectFilter === 'web'
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.filter_web}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="project-card stagger group flex flex-col overflow-hidden rounded-xl bg-[#f6f6f8] dark:bg-[#101322] border border-slate-200 dark:border-slate-800 block text-inherit no-underline"
              >
                <div
                  className={`project-card-tab flex items-center justify-center py-1.5 text-[10px] font-bold uppercase tracking-widest text-white ${
                    p.filterType === 'web'
                      ? 'bg-primary'
                      : 'bg-emerald-600 dark:bg-emerald-500'
                  }`}
                >
                  {p.filterType === 'web' ? t.filter_web : t.filter_app}
                </div>
                <div className="aspect-video w-full overflow-hidden bg-[#f6f6f8] dark:bg-[#101322] flex items-center justify-center">
                  {projectsData[p.id]?.img ? (
                    <img
                      src={projectsData[p.id].img}
                      alt={t[p.titleKey]}
                      className="h-full w-full object-contain object-center"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-6xl text-slate-600">{p.icon}</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    {t[p.catKey]}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{t[p.titleKey]}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {t[p.descKey]}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 scroll-mt-20" id="skills">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-underline text-3xl font-black tracking-tight md:text-4xl">
              {t.skills_heading}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">{t.skills_sub}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {SKILLS.map((s) => (
              <div
                key={s.label}
                className="skill-card stagger flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 p-8 hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                </div>
                <span className="text-sm font-bold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 scroll-mt-20" id="contact">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="heading-underline text-3xl font-black tracking-tight md:text-4xl">
              {t.contact_heading}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{t.contact_sub}</p>
          </div>
          <div className="rounded-2xl bg-[#f6f6f8] dark:bg-[#101322] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="name">
                  {t.contact_name}
                </label>
                <input
                  className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  id="name"
                  placeholder={t.contact_placeholder_name}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
                  {t.contact_email}
                </label>
                <input
                  className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  id="email"
                  placeholder={t.contact_placeholder_email}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="subject">
                  {t.contact_subject}
                </label>
                <input
                  className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  id="subject"
                  placeholder={t.contact_placeholder_subject}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="message">
                  {t.contact_message}
                </label>
                <textarea
                  className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  id="message"
                  placeholder={t.contact_placeholder_message}
                  rows={5}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="btn-shine w-full inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white hover:bg-primary/90 transition-all"
                >
                  {t.contact_send}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="text-sm font-medium">thanakornmangmee188@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-sm font-medium">{t.contact_location}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
