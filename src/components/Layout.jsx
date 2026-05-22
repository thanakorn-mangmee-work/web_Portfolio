import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/AppContext'
import { useLang } from '../context/AppContext'
import { translations } from '../data/translations'
import { useState, useEffect, useRef } from 'react'

const NAV = [
  { href: '/#about', key: 'nav_about' },
  { href: '/#projects', key: 'nav_projects' },
  { href: '/#skills', key: 'nav_skills' },
  { href: '/#contact', key: 'nav_contact' },
]

export function Layout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const location = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [navHidden, setNavHidden] = useState(false)
  const lastScrollY = useRef(0)

  const t = translations[lang] || translations.en

  useEffect(() => {
    const THRESHOLD = 80
    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(h > 0 ? (y / h) * 100 : 0)
      const y2 = y + 120
      for (const id of ['about', 'projects', 'skills', 'contact']) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y2) setActiveSection(id)
      }
      if (y <= THRESHOLD) setNavHidden(false)
      else if (y > lastScrollY.current) setNavHidden(true)
      else setNavHidden(false)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (e, hash) => {
    if (location.pathname !== '/') {
      return
    }
    e.preventDefault()
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f6f6f8] dark:bg-[#101322] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Mobile drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="mobile-backdrop"
          onClick={() => setMobileOpen(false)}
        />
        <div className="mobile-panel">
          {NAV.map(({ href, key }) => (
            <Link
              key={key}
              className="mobile-nav-link text-slate-900 dark:text-slate-100 no-underline"
              to={href}
              onClick={(e) => scrollTo(e, href.startsWith('/#') ? href.slice(1) : '#about')}
            >
              <span>{t[key]}</span>
              <span className="material-symbols-outlined text-primary text-xl">arrow_forward</span>
            </Link>
          ))}
        </div>
      </div>

      <header className={`header-scroll sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-[#f6f6f8]/80 dark:bg-[#101322]/80 backdrop-blur-md transition-transform duration-300 ease-out ${navHidden ? 'header-scroll--hidden' : ''}`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:-rotate-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Thanakorn.dev</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1 relative px-2 py-1">
              {NAV.map(({ href, key }) => (
                <div key={key} className="inline-block">
                  <Link
                    to={href}
                    onClick={(e) => scrollTo(e, href === '/' ? '#' : href.slice(1))}
                    className={`nav-link text-sm font-medium px-4 py-2 block text-slate-600 dark:text-slate-400 ${activeSection === href.replace('/#', '') ? 'active text-primary' : ''}`}
                  >
                    {t[key]}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLang}
                className="flex h-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 px-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                TH/EN
              </button>
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
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 hidden md:block">
                <img
                  className="h-full w-full object-cover"
                  src="https://ui-avatars.com/api/?name=Thanakorn+Mangmee&background=1337ec&color=fff"
                  alt=""
                />
              </div>
              <button
                type="button"
                className={`md:hidden flex flex-col items-center justify-center gap-[5px] h-10 w-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ${mobileOpen ? 'hamburger-open' : ''}`}
                aria-label="Open menu"
                onClick={() => setMobileOpen((o) => !o)}
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
          </div>
        </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-sm">terminal</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Thanakorn.dev</span>
            </div>
            <p className="text-xs text-slate-500">{t.footer_copyright}</p>
            <div className="flex gap-4">
              <a
                className="social-icon h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
    </div>
  )
}
