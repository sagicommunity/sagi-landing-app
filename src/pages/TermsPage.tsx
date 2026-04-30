import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import LangToggle from '../components/LangToggle'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.terms.title}</h1>
        <p className="text-sm text-gray-400 mb-10">{t.terms.updated}</p>

        <h3 className={h3}>{t.terms.s1h}</h3>
        <p className={p}>{t.terms.s1p}</p>

        <h3 className={h3}>{t.terms.s2h}</h3>
        <p className={p}>{t.terms.s2p}</p>

        <h3 className={h3}>{t.terms.s3h}</h3>
        <p className={p}>{t.terms.s3p}</p>
        <ul className={ul}>
          {t.terms.s3items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <p className={`${p} mt-3`}>{t.terms.s3note}</p>

        <h3 className={h3}>{t.terms.s4h}</h3>
        <p className={p}>{t.terms.s4p}</p>
        <ul className={ul}>
          {t.terms.s4items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3 className={h3}>{t.terms.s5h}</h3>
        <p className={p}>{t.terms.s5p}</p>
        <ul className={ul}>
          {t.terms.s5items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3 className={h3}>{t.terms.s6h}</h3>
        <p className={p}>{t.terms.s6p}</p>
        <ul className={ul}>
          {t.terms.s6items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3 className={h3}>{t.terms.s7h}</h3>
        <p className={p}>{t.terms.s7p}</p>

        <h3 className={h3}>{t.terms.s8h}</h3>
        <p className={p}>
          {t.terms.s8p}{' '}
          <Link to="/privacy" style={{ color: GREEN_DARK }}>{t.terms.s8link}</Link>
          {t.terms.s8p2}
        </p>

        <h3 className={h3}>{t.terms.s9h}</h3>
        <p className={p}>{t.terms.s9p}</p>
        <ul className={ul}>
          {t.terms.s9items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3 className={h3}>{t.terms.s10h}</h3>
        <p className={p}>{t.terms.s10p}</p>

        <h3 className={h3}>{t.terms.s11h}</h3>
        <p className={p}>{t.terms.s11p}</p>

        <h3 className={h3}>{t.terms.s12h}</h3>
        <p className={p}>{t.terms.s12p}</p>
        <ul className={`${ul} not-italic`}>
          <li>{t.terms.s12email}: <a href="mailto:business@sagibonus.com" style={{ color: GREEN_DARK }}>business@sagibonus.com</a></li>
          <li>{t.terms.s12support}: <a href="mailto:business@sagibonus.com" style={{ color: GREEN_DARK }}>business@sagibonus.com</a></li>
        </ul>
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
