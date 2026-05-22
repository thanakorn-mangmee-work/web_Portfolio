import { createContext, useContext, useEffect, useState } from 'react'

const THEME_KEY = 'portfolio-theme'
const LANG_KEY = 'portfolio-lang'

const ThemeContext = createContext()
const LangContext = createContext()

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within AppProvider')
  return ctx
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within AppProvider')
  return ctx
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem(LANG_KEY) === 'th' ? 'th' : 'en'
}

export function AppProvider({ children }) {
  const [theme, setThemeState] = useState('light')
  const [lang, setLangState] = useState('en')

  useEffect(() => {
    setThemeState(getInitialTheme())
    setLangState(getInitialLang())
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.lang = lang
    localStorage.setItem(THEME_KEY, theme)
    localStorage.setItem(LANG_KEY, lang)
  }, [theme, lang])

  const setTheme = (value) => setThemeState(value === 'dark' ? 'dark' : 'light')
  const toggleTheme = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))
  const setLang = (value) => setLangState(value === 'th' ? 'th' : 'en')
  const toggleLang = () => setLangState((l) => (l === 'en' ? 'th' : 'en'))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <LangContext.Provider value={{ lang, setLang, toggleLang }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}
