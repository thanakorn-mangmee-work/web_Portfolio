import { Link, useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/AppContext'
import { projectsData } from '../data/projects'
import MobileMockup from '../components/MobileMockup'

function ProjectInfoPanel({ data, onOpenDemo }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15192b] p-6 shadow-sm">
      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
        Project Info
      </h4>
      <div className="space-y-4">
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase">Role</span>
          <span className="text-base font-medium">Full-stack Developer</span>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase">Year</span>
          <span className="text-base font-medium">2026</span>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase">Team Size</span>
          <span className="text-base font-medium">Solo Project</span>
        </div>
      </div>
      <hr className="my-6 border-slate-100 dark:border-slate-700" />
      <div className="space-y-3">
        {data.liveDemoUrl ? (
          data.id === 'gtxshop' ? (
            <button
              type="button"
              onClick={onOpenDemo}
              className="btn-shine w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-lg mr-2">rocket_launch</span>
              Live Demo
            </button>
          ) : (
            <a
              href={data.liveDemoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-shine w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-lg mr-2">rocket_launch</span>
              Live Demo
            </a>
          )
        ) : (
          <span
            className="w-full inline-flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 px-6 py-3 text-sm font-bold text-slate-500 dark:text-slate-400 cursor-not-allowed"
            title="ยังไม่มีลิงก์ Demo"
          >
            <span className="material-symbols-outlined text-lg mr-2">rocket_launch</span>
            Live Demo
          </span>
        )}
        {data.codeUrl ? (
          <a
            href={data.codeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            <span className="material-symbols-outlined text-lg mr-2">code</span>
            View Code
          </a>
        ) : (
          <span
            className="w-full inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-bold text-slate-400 dark:text-slate-500 cursor-not-allowed"
            title="ยังไม่มีลิงก์ Repo"
          >
            <span className="material-symbols-outlined text-lg mr-2">code</span>
            View Code
          </span>
        )}
      </div>
    </div>
  )
}

export function ProjectDetailPage() {
  const { id } = useParams()
  const { theme, toggleTheme } = useTheme()
  const data = projectsData[id]
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    if (data) document.title = `${data.title} | Project Details`
    return () => { document.title = 'Thanakorn | Full-stack Developer Portfolio' }
  }, [data])

  if (!data) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101322] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-[#f6f6f8]/80 dark:bg-[#101322]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span className="text-lg font-bold">Back to Portfolio</span>
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="mb-8 lg:hidden">
          <ProjectInfoPanel data={data} onOpenDemo={() => setShowDemo(true)} />
        </div>

        <div className="mb-10 space-y-4">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary dark:bg-primary/20">
            {data.category}
          </span>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
            {data.desc}
          </p>
        </div>

        {data.img && (
          <div className="w-full overflow-hidden rounded-2xl bg-[#f6f6f8] dark:bg-[#101322] mb-12 flex items-center justify-center">
            <img
              src={data.img}
              alt={data.title}
              className="w-full max-h-[min(28rem,70vh)] object-contain object-center"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">
                Key Features
              </h3>
              <ul className="space-y-3 list-disc list-inside text-slate-600 dark:text-slate-300 text-lg">
                {data.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">
                The Challenge & Solution
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                {data.challenge}
              </p>
            </div>
          </div>

          <div className="hidden lg:block space-y-8">
            <ProjectInfoPanel data={data} onOpenDemo={() => setShowDemo(true)} />
          </div>
        </div>
        {showDemo && data.id === 'gtxshop' && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDemo(false)}
          >
            <button
              type="button"
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 hover:bg-slate-800 shadow-lg"
              aria-label="Close demo overlay"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
            <div
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Ecom App — Live Demo</h3>
                <a
                  href={data.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-500 px-3 py-1.5 text-xs font-bold text-slate-100 hover:bg-slate-800 transition-colors"
                >
                  Open in new tab
                </a>
              </div>
              <MobileMockup url={data.liveDemoUrl} />
            </div>
          </div>
        )}

      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-10 mt-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500 text-sm">
          © 2026 Thanakorn Developer Portfolio.
        </div>
      </footer>
    </div>
  )
}
