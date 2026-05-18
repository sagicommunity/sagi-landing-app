import { useLang, type Lang } from '../i18n'

const LANGS: Lang[] = ['en', 'ru', 'kk']

export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {LANGS.map((l, i) => (
        <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {i > 0 && <span style={{ color: '#d1d5db', fontSize: 13 }}>·</span>}
          <button
            onClick={() => setLang(l)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, padding: 0,
              color: lang === l ? '#111827' : '#9ca3af',
              fontWeight: lang === l ? 600 : 400,
            }}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
