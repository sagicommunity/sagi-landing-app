import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'ru' | 'en'

function storedLang(): Lang {
  try { return localStorage.getItem('sagi_lang') === 'en' ? 'en' : 'ru' } catch { return 'ru' }
}

const Ctx = createContext<{ lang: Lang; toggle: () => void }>({ lang: 'ru', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(storedLang)
  const toggle = () => {
    const next: Lang = lang === 'ru' ? 'en' : 'ru'
    setLang(next)
    try { localStorage.setItem('sagi_lang', next) } catch {}
  }
  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>
}

export function useLang() { return useContext(Ctx) }

// ─── Translations ─────────────────────────────────────────────────────────────
export const TRANS = {
  ru: {
    nav: {
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      support: 'Поддержка',
      back: 'Назад',
    },
    footer: {
      copy: '© 2026 Sagi Community. Все права защищены.',
    },
    landing: {
      badge: 'Экосистема лояльности для сообществ',
      title: 'Sagi Community',
      subtitle: 'Твои сообщества в одном приложении.',
      rating: '5.0 · более 1 000 участников',
      free: 'Бесплатная загрузка',
      downloadOn: 'Загрузить в',
      getItOn: 'Скачать в',
      rolesTitle: 'Три роли. Одно приложение.',
      rolesSubtitle: 'Sagi объединяет организаторов, участников и бизнес-партнёров в единой экосистеме',
      featuresTitle: 'Всё необходимое в одном приложении',
      featuresSubtitle: 'Мощный функционал для каждого участника экосистемы',
      ctaTitle: 'Начните прямо сейчас',
      ctaSubtitle: 'Ваши сообщества, бонусы и привилегии - всё в одном приложении',
      badge_member: 'Участник',
      roles: [
        {
          badge: 'Для участника',
          title: 'Ваши привилегии',
          desc: 'Цифровое членство и бонусы в смартфоне',
          bullets: ['Единая карта лояльности', 'Каталог скидок и предложений', 'Verified Networking', 'Лента событий сообщества'],
        },
        {
          badge: 'Для администратора',
          title: 'Управляйте сообществом',
          desc: 'Полный контроль над участниками и партнёрами',
          bullets: ['Верификация новых участников', 'Аналитика в реальном времени', 'Автоблокировка просроченных карт', 'Управление партнёрской сетью'],
        },
        {
          badge: 'Для бизнеса',
          title: 'Будьте ближе к аудитории',
          desc: 'Прямой канал связи с вашими клиентами',
          bullets: ['Публикуйте предложения и акции', 'Получайте аналитику визитов', 'Общайтесь с участниками напрямую', 'Персональный менеджер Sagi'],
        },
      ],
      features: [
        { title: 'Персонализированный доступ',     desc: 'Присоединяйся к закрытым сообществам - ЖК, офисы, клубы - и получай эксклюзивные предложения, недоступные другим.' },
        { title: 'Единая карта лояльности',         desc: 'Забудь о десятках пластиковых карт. Все бонусы любимых мест собраны в одном цифровом кошельке.' },
        { title: 'Для команд крупных компаний',     desc: 'Специальные условия для сотрудников и их клиентов - закрытые предложения, недоступные широкой аудитории.' },
        { title: 'Уведомления от сообщества',       desc: 'Получай push-уведомления от своих сообществ - новые предложения, важные объявления и обновления.' },
        { title: 'Кешбэк и бонусы',                 desc: 'Реальный кешбэк и бонусы, которые работают и экономят твой бюджет в каждом касании.' },
        { title: 'Цифровой пропуск',                desc: 'Личный QR-код для мгновенного подтверждения статуса - без пластика и очередей.' },
        { title: 'Verified Networking',              desc: 'Обмен контактами с доверенными участниками сообщества с взаимным согласием.' },
        { title: 'Лента событий',                   desc: 'Мероприятия и новости сообщества в одном месте, всегда под рукой.' },
        { title: 'Профили на глобусе',              desc: 'Каждый профиль - это пин на глобусе. Укажи город, и твоя точка появится на карте. Глобус крутится - пин стоит на месте.' },
      ],
    },
    support: {
      title: 'Поддержка',
      subtitle: 'Есть вопросы? Напишите нам в WhatsApp - ответим быстро.',
      btnLabel: 'Написать в WhatsApp',
      orEmail: 'Или напишите на',
    },
    network: {
      subtitle: 'Глобальная сеть участников',
      members: 'участников',
      hint: 'Нажмите на участника чтобы открыть профиль · Тяните для вращения',
      search: 'Найти участника...',
    },
    privacy: {
      title: 'Политика конфиденциальности',
      updated: 'Последнее обновление: 1 января 2026 г.',
      sections: [
        {
          h: '1. Общие положения',
          body: 'Настоящая Политика конфиденциальности описывает, как Sagi Community собирает, использует и защищает персональные данные пользователей мобильного приложения Sagi Community (далее - "Приложение"). Используя Приложение, вы соглашаетесь с условиями данной Политики.',
        },
        {
          h: '2. Собираемые данные',
          body: null,
        },
        { h: '3. Использование данных', body: 'Мы используем собранные данные для:' },
        { h: '4. Передача данных третьим лицам', body: 'Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением следующих случаев:' },
        { h: '5. Безопасность данных', body: 'Мы применяем технические и организационные меры защиты:' },
        { h: '6. Хранение данных', body: 'Мы храним ваши данные в течение всего срока вашего членства и ещё 3 года после его окончания, если иное не требуется законодательством или не запрошено вами.' },
        { h: '7. Ваши права', body: 'В соответствии с применимым законодательством вы имеете право:' },
        { h: '8. Дети', body: 'Приложение не предназначено для лиц младше 18 лет. Мы не собираем намеренно данные несовершеннолетних.' },
        { h: '9. Изменения в политике', body: 'Мы можем обновлять данную Политику. При существенных изменениях мы уведомим вас через Приложение или электронную почту.' },
        { h: '10. Контакты', body: 'По вопросам конфиденциальности обращайтесь:' },
      ],
    },
    terms: {
      title: 'Условия использования',
      updated: 'Последнее обновление: 1 января 2026 г.',
    },
  },

  en: {
    nav: {
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      back: 'Back',
    },
    footer: {
      copy: '© 2026 Sagi Community. All rights reserved.',
    },
    landing: {
      badge: 'Loyalty ecosystem for communities',
      title: 'Sagi Community',
      subtitle: 'Your communities in one app.',
      rating: '5.0 · over 1,000 members',
      free: 'Free download',
      downloadOn: 'Download on',
      getItOn: 'Get it on',
      rolesTitle: 'Three roles. One app.',
      rolesSubtitle: 'Sagi brings together organizers, members and business partners in a unified ecosystem',
      featuresTitle: 'Everything you need in one app',
      featuresSubtitle: 'Powerful features for every ecosystem participant',
      ctaTitle: 'Get started now',
      ctaSubtitle: 'Your communities, bonuses and privileges - all in one app',
      badge_member: 'Member',
      roles: [
        {
          badge: 'For Member',
          title: 'Your Privileges',
          desc: 'Digital membership and bonuses in your smartphone',
          bullets: ['Unified loyalty card', 'Catalog of discounts and offers', 'Verified Networking', 'Community events feed'],
        },
        {
          badge: 'For Administrator',
          title: 'Manage Your Community',
          desc: 'Full control over members and partners',
          bullets: ['New member verification', 'Real-time analytics', 'Auto-block expired cards', 'Partner network management'],
        },
        {
          badge: 'For Business',
          title: 'Get Closer to Your Audience',
          desc: 'Direct communication channel with your clients',
          bullets: ['Publish offers and promotions', 'Get visit analytics', 'Communicate with members directly', 'Personal Sagi manager'],
        },
      ],
      features: [
        { title: 'Personalized Access',         desc: 'Join exclusive communities - residential complexes, offices, clubs - and get exclusive offers unavailable to others.' },
        { title: 'Unified Loyalty Card',         desc: 'Forget dozens of plastic cards. All your favorite places\' bonuses in one digital wallet.' },
        { title: 'For Corporate Teams',          desc: 'Special conditions for employees and their clients - exclusive offers not available to the general public.' },
        { title: 'Community Notifications',      desc: 'Get push notifications from your communities - new offers, important announcements and updates.' },
        { title: 'Cashback and Bonuses',         desc: 'Real cashback and bonuses that work and save your budget with every purchase.' },
        { title: 'Digital Pass',                 desc: 'Personal QR code for instant status verification - no plastic, no queues.' },
        { title: 'Verified Networking',          desc: 'Exchange contacts with trusted community members with mutual consent.' },
        { title: 'Events Feed',                  desc: 'Community events and news in one place, always at hand.' },
        { title: 'Profiles on the Globe',        desc: 'Each profile is a pin on the globe. Set your city and your point appears on the map. The globe rotates - the pin stays in place.' },
      ],
    },
    support: {
      title: 'Support',
      subtitle: 'Have questions? Message us on WhatsApp - we\'ll respond quickly.',
      btnLabel: 'Message on WhatsApp',
      orEmail: 'Or email us at',
    },
    network: {
      subtitle: 'Global member network',
      members: 'members',
      hint: 'Click a member to open their profile · Drag to rotate',
      search: 'Find a member...',
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: January 1, 2026',
      sections: [
        {
          h: '1. General Provisions',
          body: 'This Privacy Policy describes how Sagi Community collects, uses and protects personal data of users of the Sagi Community mobile application (the "App"). By using the App, you agree to the terms of this Policy.',
        },
        {
          h: '2. Data We Collect',
          body: null,
        },
        { h: '3. Use of Data', body: 'We use the collected data to:' },
        { h: '4. Sharing Data with Third Parties', body: 'We do not sell or transfer your personal data to third parties, except in the following cases:' },
        { h: '5. Data Security', body: 'We apply technical and organizational security measures:' },
        { h: '6. Data Retention', body: 'We retain your data for the duration of your membership and 3 years after it ends, unless otherwise required by law or requested by you.' },
        { h: '7. Your Rights', body: 'In accordance with applicable law, you have the right to:' },
        { h: '8. Children', body: 'The App is not intended for persons under 18. We do not knowingly collect data from minors.' },
        { h: '9. Policy Changes', body: 'We may update this Policy. For material changes we will notify you via the App or email.' },
        { h: '10. Contact', body: 'For privacy inquiries, please contact:' },
      ],
    },
    terms: {
      title: 'Terms of Use',
      updated: 'Last updated: January 1, 2026',
    },
  },
} as const

export function useT() {
  const { lang } = useLang()
  return TRANS[lang]
}
