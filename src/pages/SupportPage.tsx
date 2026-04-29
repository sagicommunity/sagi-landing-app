import { Link } from 'react-router-dom'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'
const GREEN_LIGHT = '#EDFAF3'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-gray-100"
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold select-none"
            style={{ color: GREEN, letterSpacing: '-0.5px', textDecoration: 'none' }}
          >
            sagi
          </Link>
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            style={{ textDecoration: 'none' }}
          >
            Назад
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="max-w-xl mx-auto px-6 py-20 text-center">

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: GREEN_LIGHT }}
        >
          {/* WhatsApp icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.34.627 4.533 1.72 6.427L2.667 29.333l7.12-1.693A13.267 13.267 0 0016 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667z" fill={GREEN}/>
            <path d="M21.827 18.88c-.307-.153-1.813-.893-2.093-.995-.28-.107-.484-.16-.687.16-.2.32-.773.995-.947 1.2-.173.2-.347.227-.653.08-.307-.16-1.293-.48-2.467-1.52-.907-.813-1.52-1.813-1.7-2.12-.173-.307-.013-.467.133-.62.134-.133.307-.347.453-.52.147-.173.2-.293.307-.493.107-.2.053-.373-.027-.52-.08-.147-.68-1.653-.933-2.267-.24-.587-.493-.507-.68-.52-.173-.013-.373-.013-.573-.013a1.1 1.1 0 00-.8.373c-.28.307-1.04 1.013-1.04 2.48s1.067 2.88 1.213 3.08c.147.2 2.08 3.2 5.08 4.48.707.307 1.253.493 1.68.627.707.227 1.347.2 1.853.12.56-.08 1.733-.707 1.973-1.387.24-.68.24-1.267.173-1.387-.067-.12-.253-.187-.56-.333z" fill="white"/>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Поддержка</h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          Есть вопросы? Напишите нам в WhatsApp — ответим быстро.
        </p>

        <a
          href="https://wa.me/77757000030"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all"
          style={{
            background: GREEN,
            boxShadow: '0 8px 24px rgba(42,187,111,0.35)',
            textDecoration: 'none',
          }}
          onMouseOver={e => (e.currentTarget.style.background = GREEN_DARK)}
          onMouseOut={e => (e.currentTarget.style.background = GREEN)}
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.34.627 4.533 1.72 6.427L2.667 29.333l7.12-1.693A13.267 13.267 0 0016 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667z" fill="white"/>
            <path d="M21.827 18.88c-.307-.153-1.813-.893-2.093-.995-.28-.107-.484-.16-.687.16-.2.32-.773.995-.947 1.2-.173.2-.347.227-.653.08-.307-.16-1.293-.48-2.467-1.52-.907-.813-1.52-1.813-1.7-2.12-.173-.307-.013-.467.133-.62.134-.133.307-.347.453-.52.147-.173.2-.293.307-.493.107-.2.053-.373-.027-.52-.08-.147-.68-1.653-.933-2.267-.24-.587-.493-.507-.68-.52-.173-.013-.373-.013-.573-.013a1.1 1.1 0 00-.8.373c-.28.307-1.04 1.013-1.04 2.48s1.067 2.88 1.213 3.08c.147.2 2.08 3.2 5.08 4.48.707.307 1.253.493 1.68.627.707.227 1.347.2 1.853.12.56-.08 1.733-.707 1.973-1.387.24-.68.24-1.267.173-1.387-.067-.12-.253-.187-.56-.333z" fill={GREEN}/>
          </svg>
          Написать в WhatsApp
        </a>

        <p className="mt-6 text-sm text-gray-400">+7 775 700 00 30</p>

        <div className="mt-16 pt-10 border-t border-gray-100 text-sm text-gray-400">
          Или напишите на{' '}
          <a href="mailto:business@sagibonus.com" style={{ color: GREEN_DARK }}>
            business@sagibonus.com
          </a>
        </div>
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
          <p className="text-sm text-gray-400 order-last sm:order-none">
            © 2026 Sagi Community. Все права защищены.
          </p>
          <a href="mailto:business@sagibonus.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            business@sagibonus.com
          </a>
        </div>
      </footer>
    </div>
  )
}
