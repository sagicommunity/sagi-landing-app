import { useLang } from '../i18n'

export default function LangToggle() {
  const { lang, toggle } = useLang()
  return (
    <button
      onClick={toggle}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: 13, display: 'flex', alignItems: 'center', gap: 4,
        color: '#9ca3af', padding: 0,
      }}
    >
      <span style={{ color: lang === 'en' ? '#111827' : '#9ca3af', fontWeight: lang === 'en' ? 600 : 400 }}>en</span>
      <span style={{ color: '#d1d5db' }}>·</span>
      <span style={{ color: lang === 'ru' ? '#111827' : '#9ca3af', fontWeight: lang === 'ru' ? 600 : 400 }}>ru</span>
    </button>
  )
}
