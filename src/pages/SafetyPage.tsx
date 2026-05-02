import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import LangToggle from '../components/LangToggle'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'

export default function SafetyPage() {
  const t = useT()
  const h3 = 'text-base font-semibold text-gray-900 mt-8 mb-2'
  const p = 'text-gray-600 leading-relaxed'
  const ul = 'list-disc list-inside text-gray-600 space-y-1 mt-2 ml-2'

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-gray-100"
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold select-none" style={{ color: GREEN, letterSpacing: '-0.5px', textDecoration: 'none' }}>
            sagi
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors" style={{ textDecoration: 'none' }}>
              {t.nav.back}
            </Link>
            <a href="/support" className="text-gray-500 hover:text-gray-900 transition-colors">{t.nav.support}</a>
            <LangToggle />
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.safety.title}</h1>
        <p className="text-sm text-gray-400 mb-10">{t.safety.updated}</p>

        <h2 className="text-xl font-bold text-gray-900 mb-6">{t.safety.heading}</h2>

        <h3 className={h3}>{t.safety.prohibitedH}</h3>
        <ul className={ul}>
          {t.safety.prohibitedItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3 className={h3}>{t.safety.measuresH}</h3>
        <ul className={ul}>
          {t.safety.measuresItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <p className={`${p} mt-8`}>
          {t.safety.reportP}{' '}
          <a href="mailto:business@sagi.kz" style={{ color: GREEN_DARK }}>business@sagi.kz</a>
        </p>

        <p className={`${p} mt-4`}>{t.safety.cooperation}</p>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link
            to="/"
            className="text-2xl font-bold"
            style={{ color: GREEN, letterSpacing: '-0.5px', textDecoration: 'none' }}
          >
            sagi
          </Link>
          <p className="text-sm text-gray-400 order-last sm:order-none">{t.footer.copy}</p>
          <a href="mailto:business@sagibonus.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">business@sagibonus.com</a>
        </div>
      </footer>
    </div>
  )
}
