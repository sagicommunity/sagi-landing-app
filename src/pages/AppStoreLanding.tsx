import {
  CreditCard, QrCode, Tag, Calendar, Users, ShieldCheck,
  MessageCircle, Star, Check, Building2, Globe,
} from 'lucide-react'
import { useT } from '../i18n'
import LangToggle from '../components/LangToggle'

const GREEN = '#2ABB6F'
const GREEN_DARK = '#1E9E5A'
const GREEN_LIGHT = '#EDFAF3'

const FEATURE_ICONS = [ShieldCheck, CreditCard, Building2, MessageCircle, Tag, QrCode, Users, Calendar, Globe]
const ROLE_BADGE_CLASSES = [
  'bg-[#EEF2FF] text-[#4338CA]',
  'bg-[#EDFAF3] text-[#1E9E5A]',
  'bg-[#FFF7ED] text-[#C2410C]',
]
const ROLE_SCREENS = ['/profile.png', '/analytics.png', '/business.png']

function AppIcon() {
  return (
    <img
      src="/logo.svg"
      alt="Sagi"
      width={96}
      height={96}
      style={{ borderRadius: 22, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
    />
  )
}

function PhoneFrame({ src, label }: { src: string; label: string }) {
  return (
    <div style={{ width: 220, position: 'relative', flexShrink: 0 }}>
      <div style={{
        borderRadius: '2.8rem',
        background: '#1A1A1A',
        padding: '10px',
        boxShadow: '0 0 0 1px #3a3a3a, 0 32px 64px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>
        <div style={{ borderRadius: '2.2rem', overflow: 'hidden', background: '#000', aspectRatio: '9/19.5' }}>
          <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', left: -3, top: 72,  width: 3, height: 28, borderRadius: '2px 0 0 2px', background: '#2a2a2a' }} />
      <div style={{ position: 'absolute', left: -3, top: 108, width: 3, height: 28, borderRadius: '2px 0 0 2px', background: '#2a2a2a' }} />
      <div style={{ position: 'absolute', left: -3, top: 144, width: 3, height: 28, borderRadius: '2px 0 0 2px', background: '#2a2a2a' }} />
      <div style={{ position: 'absolute', right: -3, top: 96,  width: 3, height: 52, borderRadius: '0 2px 2px 0', background: '#2a2a2a' }} />
    </div>
  )
}

function AppleStoreBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
      style={{ background: '#000', color: '#fff', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      onMouseOver={e => (e.currentTarget.style.background = '#1a1a1a')}
      onMouseOut={e => (e.currentTarget.style.background = '#000')}
    >
      <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor">
        <path d="M14.94 11.38c-.02-2.24 1.83-3.31 1.91-3.37-1.04-1.52-2.66-1.73-3.24-1.75-1.38-.14-2.69.81-3.39.81-.7 0-1.79-.79-2.94-.77-1.51.02-2.9.88-3.68 2.23-1.57 2.73-.4 6.77 1.13 8.99.75 1.08 1.64 2.3 2.82 2.25 1.13-.04 1.56-.73 2.94-.73 1.37 0 1.76.73 2.97.71 1.22-.02 1.99-1.1 2.73-2.18.86-1.24 1.22-2.46 1.24-2.52-.03-.01-2.46-.95-2.49-3.67z" />
        <path d="M12.53 4.71c.62-.76 1.04-1.83.93-2.88-.9.04-1.98.6-2.62 1.35-.58.67-1.08 1.73-.94 2.75.99.08 2.01-.5 2.63-1.22z" />
      </svg>
      <div className="text-left">
        <div style={{ fontSize: 10, opacity: 0.7, lineHeight: 1.2 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{sub}</div>
      </div>
    </a>
  )
}

function GooglePlayBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
      style={{ background: '#fff', color: '#111827', border: '1.5px solid #e5e7eb', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)')}
      onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}
    >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M.5 17.9V2.1C.5 1.27 1.44.8 2.1 1.3l13 7.9c.6.37.6 1.23 0 1.6l-13 7.9c-.66.5-1.6.03-1.6-.8z" fill="#4285F4" />
        <path d="M.5 2.1l8.2 8.2-8.2 8.2V2.1z" fill="#4285F4" />
        <path d="M.5 2.1l8.2 8.2 3.8-3.8L4.5.8C3 .05 1.2.4.5 2.1z" fill="#34A853" />
        <path d="M.5 17.9l8.2-8.2 3.8 3.8-8 4.5c-1.5.75-3.3.4-4-.1z" fill="#EA4335" />
        <path d="M12.5 6.5l3.1 1.9c.6.37.6 1.23 0 1.6l-3.1 1.9-3.8-2.7 3.8-2.7z" fill="#FBBC05" />
      </svg>
      <div className="text-left">
        <div style={{ fontSize: 10, color: '#6b7280', lineHeight: 1.2 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{sub}</div>
      </div>
    </a>
  )
}

export default function AppStoreLanding() {
  const t = useT()
  const l = t.landing

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-gray-100"
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold select-none" style={{ color: GREEN, letterSpacing: '-0.5px' }}>
            sagi
          </span>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">{t.nav.privacy}</a>
            <a href="/terms"   className="text-gray-500 hover:text-gray-900 transition-colors">{t.nav.terms}</a>
            <a href="/support" className="text-gray-500 hover:text-gray-900 transition-colors">{t.nav.support}</a>
            <a href="/safety"  className="text-gray-500 hover:text-gray-900 transition-colors">{t.nav.safety}</a>
            <LangToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-24" style={{ background: 'linear-gradient(160deg, #F2FDF7 0%, #FFFFFF 60%)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-7"><AppIcon /></div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: GREEN_LIGHT, color: GREEN_DARK }}>
            {l.badge}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-1px', lineHeight: 1.1 }}>
            {l.title}
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">{l.subtitle}</p>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[0,1,2,3,4].map(i => <Star key={i} size={18} fill={GREEN} stroke="none" />)}
          </div>
          <p className="text-sm text-gray-400 mb-10">{l.rating}</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <AppleStoreBadge label={l.downloadOn} sub="App Store" />
            <GooglePlayBadge label={l.getItOn}   sub="Google Play" />
          </div>
          <p className="mt-6 text-xs text-gray-400">{l.free}</p>
        </div>
      </section>

      {/* 3 ROLES */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{l.rolesTitle}</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">{l.rolesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {l.roles.map((role, i) => (
              <div key={i} className="flex flex-col items-center gap-6">
                <PhoneFrame src={ROLE_SCREENS[i]} label={role.badge} />
                <div className="text-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${ROLE_BADGE_CLASSES[i]}`}>{role.badge}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{role.desc}</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left inline-block">
                    {role.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0" style={{ color: GREEN }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{l.featuresTitle}</h2>
            <p className="text-lg text-gray-500">{l.featuresSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {l.features.map(({ title, desc }, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-gray-200 transition-all duration-200 hover:shadow-lg"
                  style={{ borderColor: '#e5e7eb' }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = '#B6EDD2')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: GREEN_LIGHT }}>
                    <Icon size={20} style={{ color: GREEN }} />
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#4338CA]`}>{l.badge_member}</span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-3 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div
          className="max-w-3xl mx-auto rounded-3xl px-8 py-16 text-center"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
        >
          <div className="flex justify-center mb-6">
            <img src="/logo.svg" alt="Sagi" width={72} height={72} style={{ borderRadius: 18, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">{l.ctaTitle}</h2>
          <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>{l.ctaSubtitle}</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <AppleStoreBadge label={l.downloadOn} sub="App Store" />
            <GooglePlayBadge label={l.getItOn}   sub="Google Play" />
          </div>
          <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{l.free}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <span className="text-2xl font-bold" style={{ color: GREEN, letterSpacing: '-0.5px' }}>sagi</span>
          <p className="text-sm text-gray-400 order-last sm:order-none">{t.footer.copy}</p>
          <a href="mailto:business@sagibonus.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            business@sagibonus.com
          </a>
        </div>
      </footer>
    </div>
  )
}
