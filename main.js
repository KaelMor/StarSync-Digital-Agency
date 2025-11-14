// StarSync: минимальные интерактивы без фреймворков

(function() {
  // I18N словари
  const i18n = {
    uk: {
      brand: 'DIGITAL AGENCY',
      nav: { about: 'Про Нас', home: 'Головна', advantages: 'Переваги', services: 'Послуги', team: 'Команда', contact: 'Контакти' },
      hero: { kicker: 'Ефективні digital-рішення для вашого бізнесу', text: 'Космічна синхронізація з клієнтом — це про точність, системність і результат.', text2: 'Ми створюємо стратегії, рекламу і бренди, які ростуть разом із вашими цілями.', cta: { consult: 'Замовити консультацію', cases: 'Подивитись кейси' } },
      about: { kicker: 'Що таке StarSync Tech?', t1: 'Ми — команда професіоналів,', t2: 'яка присвятила своє <em class="soft">життя маркетингу.</em>', t3: 'У світі, де конкуренція завжди на висоті,', t4: '<em class="soft">маркетинг є ключовим</em> фактором успіху.', r1: { title: 'Працюємо за договором', text: 'Юридичні гарантії, чіткі умови та прозорий процес.' }, r2: { title: 'Індивідуальний підхід', text: 'Стратегії, що відповідають цілям і етапу росту.' }, r3: { title: 'Точно в терміни', text: 'Планування, контроль і здача в дедлайн.' } },
      advantages: { title: 'Чому StarSync', system: { title: 'Системний підхід', text: 'Дослідження → стратегія → дизайн/продукт → перформанс. Єдина воронка та метрики.' }, it: { title: 'Маркетинг × IT', text: 'Поєднуємо брендинг, SMM, рекламу і розробку: від айдентики до UI/UX та CRM.' }, growth: { title: 'Передбачуване зростання', text: 'Ставимо цілі, формуємо гіпотези, перевіряємо даними і масштабуємо з ROI‑контролем.' }, custom: { title: 'Індивідуальні рішення', text: 'Не шаблони — під задачі бізнесу: аудит, позиціонування, креативні платформи.' } },
      who: { title: 'Хто ми', t1: 'StarSync — digital агентство повного циклу,', t2: 'яке поєднує маркетинг, креатив і технології.', t3: 'Ми допомагаємо бізнесам системно зростати:', t4: 'залучати клієнтів, підвищувати впізнаваність бренду та отримувати передбачуваний результат у цифрах.', r1: { title: 'Аналітика', text: 'Наш підхід — це стратегія, побудована на аналітиці, досвіді та глибокому розумінні вашої ніші.' }, r2: { title: 'Стратегія', text: 'Ми не шукаємо універсальних рішень — ми створюємо індивідуальні маркетингові системи, де кожен канал працює на ваш бізнес.' }, r3: { title: 'Синхронізація', text: 'Ми не просто запускаємо рекламу — ми будуємо стабільну екосистему росту вашого бренду.' } },
      services: { title: 'Послуги', target: { title: 'Таргетована реклама', text: 'Розробляємо й оптимізуємо рекламні кампанії у Meta, TikTok, LinkedIn. Фокус — на залученні лідів, збільшенні продажів і зниженні вартості заявки. Performance, який приносить прибуток.' }, google: { title: 'Google реклама', text: 'Search, Display, YouTube, Performance Max — будуємо стабільно ефективні кампанії, які працюють довгостроково. Контроль аналітики, структура акаунтів, постійна оптимізація.' }, smm: { title: 'SMM-просування', text: 'Розвиваємо бренди в соцмережах через якісний контент, чіткий tone of voice і аналітику. Плануємо, створюємо, публікуємо, залучаємо. SMM, який перетворює підписників на клієнтів.' }, strategy: { title: 'Маркетингова стратегія', text: 'Дослідження ринку, позиціонування, аналіз аудиторії, розробка media mix. Будуємо системний фундамент вашого digital-маркетингу.' }, brand: { title: 'Фірмовий стиль та айдентика', text: 'Розробляємо впізнаваний бренд: логотип, кольори, шрифти, візуальні патерни. Від концепції до готового брендбуку — усе в єдиній стилістиці.' }, it: { title: 'IT-розробка разом з Ampersand IT', text: 'Розробка сайтів, CRM, аналітичних систем і внутрішніх інструментів. Ми поєднуємо маркетинг і технології, щоб бізнес ріс швидше.' } },
      approach: { title: 'Наш підхід', intro: 'Ми працюємо системно й прозоро. Кожен проєкт проходить чотири етапи:', step1: { title: 'Аналіз:', text: 'дослідження ринку, аудиторії, конкурентів.' }, step2: { title: 'Стратегія:', text: 'план просування, KPI, канали комунікації.' }, step3: { title: 'Запуск:', text: 'налаштування реклами, контент, технічна реалізація.' }, step4: { title: 'Оптимізація:', text: 'аналітика, корекція, масштабування.' }, outro: 'Ми не просто виконуємо задачі — ми будуємо маркетинг, який працює стабільно.' },
      projects: { title: 'Кейси', viewAll: 'Дивитись усі кейси', case1: { name: 'Anri De Collo', niche: 'Ніша: взуттєва фабрика преміум-класу', services: 'Послуги: розробка сайту, створення візуальної айдентики, контент-зйомка, розробка графічних матеріалів.', task: { title: 'Завдання', text: 'Anri De Collo — компанія, що виготовляє взуття, який потребував повного digital-оновлення перед виходом на нові ринки. Клієнт звернувся до StarSync із запитом на створення фірмового стилю, нового сайту та візуального контенту, який би підкреслював діяльність та надійність, як партнера по виготовленню взуття — елегантність, ручну роботу та якість матеріалів.' }, results: { title: 'Результати', r1: 'Новий сайт Anri De Collo', r2: 'Розроблений фірмовий стиль', r3: 'Розробленій каталог матеріалів та референсів виготовлення (що доступен до завантаження на сайті клієнта)', r4: 'Відзнято понад 100 пар взуття з моделями' } }, case2: { name: 'M.Kids', niche: 'Ніша: приватні дитячі садочки та школи по всій Україні', services: 'Послуга: таргетована реклама та Google Ads для набору дітей', task: { title: 'Завдання', text: 'Клієнт звернувся до StarSync із запитом на залучення нових заявок у приватні садочки та школи перед початком навчального року. Основна мета — заповнення груп і класів у різних містах України при встановленому рекламному бюджеті.' }, results: { title: 'Результат', text: 'Понад 2 757 заявок/місяць', outro: 'Ми любимо M.Kids бо це вже більше ніж співпраця — це любов' } }, case3: { name: '[Case 3]', niche: 'Комплексна стратегія просування для освітньої компанії — приріст лідів на 210%.' } },
      team: { title: 'Команда', intro: 'StarSync — це команда digital-фахівців, які поєднують маркетинг, креатив і технології. Ми працюємо як єдиний механізм, щоб кожен клієнт отримував прогнозований результат.', participants: '(8 учасників)', principle: 'Наш принцип: кожен клієнт має відчувати синхронізацію на кожному етапі співпраці.', m1: { name: 'Борис Наумов', role: 'CEO & Founder' }, m2: { name: 'Ангеліна Гроссу', role: 'COO & Co-Founder' }, m3: { name: 'Євгеній Кашперук', role: 'Head of Tech Department' }, m4: { name: 'Ярослава Фіщук', role: 'Meta Ads Specialist' }, m5: { name: 'Нікіта Нехай', role: 'Google Ads Specialist' }, m6: { name: 'Артур Крижанівський', role: 'Business Partners Manager' }, m7: { name: 'Юліана Незборецька', role: 'Office Assistant' }, m8: { name: 'Вікторія Кошул', role: 'Ui/Ux Designer' } },
      partners: { title: 'Партнери', intro: 'Ми співпрацюємо з компаніями, які прагнуть росту:', p1: 'Ampersand IT', p2: 'AMM Production' },
      mission: { p1: 'Справжній результат народжується там, де є повна синхронізація з клієнтом — і це головний принцип StarSync.', p2: 'Наша місія — працювати в одному ритмі з бізнесом, роблячи складні процеси простими та керованими.\nМи вирівнюємо цілі, комунікацію та очікування, щоб створювати передбачуваний і якісний результат.', author: 'Борис Наумов', role: 'CEO / Founder компанії StarSync Tech' },
      advice: { title: 'Потрібна порада?', text: 'Ви не впевнені, як покращити ваш бізнес?', cta: 'Замовити консультацію' },
      contact: { title: 'Готові синхронізуватись?', lead: 'Залишайте заявку — перетворимо ваш запит у вимірюваний результат.', formLabel: 'Форма' },
      form: {
        contactInfo: 'Контактна інформація',
        fullName: "Ім'я та прізвище",
        phone: 'Номер телефону',
        email: 'Email',
        telegram: 'Telegram',
        interested: 'Ви зацікавлені в*',
        interest: {
          webDesign: 'Web Design',
          branding: 'Branding',
          target: 'Таргетована реклама',
          google: 'Google реклама',
          smm: 'SMM-просування',
          strategy: 'Маркетингова стратегія',
          identity: 'Фірмовий стиль та айдентика',
          dev: 'IT-розробка',
          other: 'Інше'
        },
        message: { label: 'Повідомлення', placeholder: 'Будь ласка, залиште ваше запитання чи коментар' },
        send: 'Надіслати',
        ok: '✓ Заявка надіслана. Ми звʼяжемось з вами протягом дня.'
      },
      footer: { copyright: 'StarSync Digital Agency © 2023', developed: 'Developed by StarSync x Ampersand IT', location: 'Odessa · Remote Worldwide', social: { instagram: 'Instagram', linkedin: 'LinkedIn', telegram: 'Telegram' } }
    },
    en: {
      brand: 'DIGITAL AGENCY',
      nav: { about: 'About', home: 'Home', advantages: 'Advantages', services: 'Services', team: 'Team', contact: 'Contact' },
      hero: { kicker: 'Effective digital solutions for your business', text: 'Cosmic synchronization with the client — it\'s about precision, systematic approach and results.', text2: 'We create strategies, advertising and brands that grow together with your goals.', cta: { consult: 'Order a consultation', cases: 'View cases' } },
      about: { kicker: 'What is StarSync Tech?', t1: 'We are a team of professionals', t2: 'who devoted our <em class="soft">lives to marketing.</em>', t3: 'In a world where competition is always high,', t4: '<em class="soft">marketing is key</em> to success.', r1: { title: 'Contract‑based', text: 'Legal guarantees, clear terms and transparent process.' }, r2: { title: 'Tailored approach', text: 'Strategies aligned to goals and stage of growth.' }, r3: { title: 'On time', text: 'Planning, control and on‑deadline delivery.' } },
      advantages: { title: 'Why StarSync', system: { title: 'System approach', text: 'Research → strategy → design/product → performance. Single funnel and metrics.' }, it: { title: 'Marketing × IT', text: 'Branding, SMM, ads and development — from identity to UI/UX and CRM.' }, growth: { title: 'Predictable growth', text: 'Goals, hypotheses, data validation and scaling with ROI control.' }, custom: { title: 'Tailored solutions', text: 'No templates — tailor‑made: audit, positioning, creative platforms.' } },
      who: { title: 'Who we are', t1: 'StarSync is a full-cycle digital agency,', t2: 'that combines marketing, creativity and technology.', t3: 'We help businesses achieve systematic growth:', t4: 'attracting customers, increasing brand recognition and securing predictable results in numbers.', r1: { title: 'Analytics', text: 'Our approach is a strategy built on analytics, experience and deep understanding of your niche.' }, r2: { title: 'Strategy', text: 'We don\'t look for universal solutions — we create individual marketing systems where every channel works for your business.' }, r3: { title: 'Synchronization', text: 'We don\'t just launch advertising — we build a stable growth ecosystem for your brand.' } },
      services: { title: 'Our Services', target: { title: 'Targeted advertising', text: 'We develop and optimize advertising campaigns on Meta, TikTok, LinkedIn. Focus on lead generation, sales increase and reducing application cost. Performance that brings profit.' }, google: { title: 'Google advertising', text: 'Search, Display, YouTube, Performance Max — we build consistently effective campaigns that work long‑term. Analytics control, account structure, constant optimization.' }, smm: { title: 'SMM promotion', text: 'We develop brands in social networks through quality content, clear tone of voice and analytics. Plan, create, publish, engage. SMM that converts followers into clients.' }, strategy: { title: 'Marketing strategy', text: 'Market research, positioning, audience analysis, media mix development. We build a systematic foundation for your digital marketing.' }, brand: { title: 'Corporate style and identity', text: 'We develop a recognizable brand: logo, colors, fonts, visual patterns. From concept to finished brand book — everything in a unified style.' }, it: { title: 'IT development with Ampersand IT', text: 'Website development, CRM, analytics systems and internal tools. We combine marketing and technology so business grows faster.' } },
      approach: { title: 'Our approach', intro: 'We work systematically and transparently. Every project goes through four stages:', step1: { title: 'Analysis:', text: 'market research, audience, competitors.' }, step2: { title: 'Strategy:', text: 'promotion plan, KPI, communication channels.' }, step3: { title: 'Launch:', text: 'advertising setup, content, technical implementation.' }, step4: { title: 'Optimization:', text: 'analytics, correction, scaling.' }, outro: 'We don\'t just execute tasks — we build marketing that works steadily.' },
      projects: { title: 'Cases', viewAll: 'View all cases', case1: { name: 'Anri De Collo', niche: 'Niche: premium‑class shoe factory', services: 'Services: website development, visual identity creation, content shooting, graphic materials development.', task: { title: 'Task', text: 'Anri De Collo — a company that manufactures shoes, needed a complete digital update before entering new markets. The client approached StarSync with a request to create a corporate style, new website and visual content that would emphasize activity and reliability as a shoe manufacturing partner — elegance, handmade work and material quality.' }, results: { title: 'Results', r1: 'New Anri De Collo website', r2: 'Developed corporate style', r3: 'Developed catalog of materials and manufacturing references (available for download on client website)', r4: 'Shot over 100 pairs of shoes with models' } }, case2: { name: 'M.Kids', niche: 'Niche: private kindergartens and schools across Ukraine', services: 'Service: targeted advertising and Google Ads for child enrollment', task: { title: 'Task', text: 'The client approached StarSync with a request to attract new applications to private kindergartens and schools before the start of the school year. The main goal — filling groups and classes in different cities of Ukraine with a set advertising budget.' }, results: { title: 'Result', text: 'Over 2,757 applications/month', outro: 'We love M.Kids because it\'s already more than cooperation — it\'s love' } }, case3: { name: '[Case 3]', niche: 'Comprehensive promotion strategy for an education company — 210% lead growth.' } },
      team: { title: 'Team', intro: 'StarSync is a team of digital professionals who combine marketing, creativity and technology. We work as a single mechanism so that every client gets a predictable result.', participants: '(8 participants)', principle: 'Our principle: every client should feel synchronization at every stage of cooperation.', m1: { name: 'Borys Naumov', role: 'CEO & Founder' }, m2: { name: 'Angelina Grosu', role: 'COO & Co-Founder' }, m3: { name: 'Evgeniy Kashperuk', role: 'Head of Tech Department' }, m4: { name: 'Yaroslava Fishchuk', role: 'Meta Ads Specialist' }, m5: { name: 'Nikita Nekhai', role: 'Google Ads Specialist' }, m6: { name: 'Artur Kryzhanivskyi', role: 'Business Partners Manager' }, m7: { name: 'Yuliana Nezboretska', role: 'Office Assistant' }, m8: { name: 'Viktoriia Koshul', role: 'Ui/Ux Designer' } },
      partners: { title: 'Partners', intro: 'We cooperate with companies that strive for growth:', p1: 'Ampersand IT', p2: 'AMM Production' },
      mission: { p1: 'True results emerge where there is complete synchronization with the client — this is the core principle of StarSync.', p2: 'Our mission is to work in harmony with your business, making complex processes simple and manageable.\nWe align goals, communication and expectations to deliver predictable and quality results.', author: 'Borys Naumov', role: 'CEO & Founder' },
      advice: { title: 'Need advice?', text: 'Not sure how to improve your business?', cta: 'Order a consultation' },
      contact: { title: 'Ready to synchronize?', lead: 'Leave your request — we will transform it into measurable results.', formLabel: 'Form' },
      form: {
        contactInfo: 'Contact information',
        fullName: 'Full name',
        phone: 'Phone number',
        email: 'Email',
        telegram: 'Telegram',
        interested: 'You are interested in*',
        interest: {
          webDesign: 'Web Design',
          branding: 'Branding',
          target: 'Targeted advertising',
          google: 'Google advertising',
          smm: 'SMM promotion',
          strategy: 'Marketing strategy',
          identity: 'Corporate identity and branding',
          dev: 'IT development',
          other: 'Other'
        },
        message: { label: 'Message', placeholder: 'Please leave your question or comment' },
        send: 'Send',
        ok: '✓ Request sent. We will contact you within a day.'
      },
      footer: { copyright: 'StarSync Digital Agency © 2023', developed: 'Developed by StarSync x Ampersand IT', location: 'Odessa · Remote Worldwide', social: { instagram: 'Instagram', linkedin: 'LinkedIn', telegram: 'Telegram' } }
    }
  };

  function setActiveLangButton(lang) {
    document.querySelectorAll('.js-lang').forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
  }

  function translate(lang) {
    const dict = i18n[lang] || i18n.uk;
    document.documentElement.setAttribute('lang', lang);
    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n').split('.');
      let val = dict;
      for (const p of path) { val = val?.[p]; }
      if (typeof val === 'string') {
        el.innerHTML = val; // допускаем span в заголовку
      }
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const path = el.getAttribute('data-i18n-placeholder').split('.');
      let val = dict;
      for (const p of path) { val = val?.[p]; }
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });
    setActiveLangButton(lang);
    localStorage.setItem('lang', lang);
  }

  // Инициализация языка
  const saved = localStorage.getItem('lang') || 'uk';
  translate(saved);
  document.querySelectorAll('.js-lang').forEach(btn => btn.addEventListener('click', () => translate(btn.dataset.lang)));
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  // Кнопка «наверх»
  const toTopBtn = document.getElementById('backToTop');
  const adviceWidget = document.querySelector('.advice-widget');
  if (toTopBtn) {
    const toggleToTop = () => {
      toTopBtn.classList.toggle('is-visible', window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleToTop, { passive: true });
    toggleToTop();
    toTopBtn.addEventListener('click', () => {
      if (toTopBtn.classList.contains('is-launching')) return;
      toTopBtn.classList.add('is-launching');
      adviceWidget && adviceWidget.classList.add('is-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        toTopBtn.classList.remove('is-launching');
        adviceWidget && adviceWidget.classList.remove('is-hidden');
      }, 1200);
    });
  }

  // Активная ссылка в навигации
  const sections = ['projects','advantages','services','team','contact'];
  const links = new Map(Array.from(document.querySelectorAll('.nav__menu a')).map(a => [a.getAttribute('href')?.replace('#',''), a]));

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = links.get(id);
      if (!link) return;
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav__menu a').forEach(a => a.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(id => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });

  // Advice widget visibility between sections
  if (adviceWidget) {
    const startSection = document.getElementById('who-we-are');
    const endSection = document.getElementById('team');
    if (startSection && endSection) {
      let startLimit = 0;
      let endLimit = 0;

      const recalcLimits = () => {
        const startRect = startSection.getBoundingClientRect();
        const endRect = endSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        startLimit = startRect.top + scrollTop - (window.innerHeight * 0.25);
        endLimit = endRect.top + scrollTop - (window.innerHeight * 0.25);
      };

      const handleScroll = () => {
        const y = window.scrollY;
        const isVisible = y >= startLimit && y <= endLimit;
        adviceWidget.classList.toggle('is-active', isVisible);
      };

      recalcLimits();
      handleScroll();

      const onResize = () => {
        recalcLimits();
        handleScroll();
      };

      window.addEventListener('resize', onResize);
      window.addEventListener('scroll', handleScroll, { passive: true });

      // перестраховка после загрузки изображений
      window.addEventListener('load', () => {
        recalcLimits();
        handleScroll();
      });
    }
  }

  // Форма: имитация отправки
  const btn = document.getElementById('sendBtn');
  const ok = document.getElementById('formOk');
  if (btn && ok) {
    btn.addEventListener('click', () => {
      const lang = localStorage.getItem('lang') || 'uk';
      ok.textContent = i18n[lang].form.ok;
      setTimeout(() => ok.textContent = '', 5000);
    });
  }

  // Выбор чипов (interests multi, budget single)
  document.querySelectorAll('[data-chip-group]').forEach(group => {
    const multi = group.getAttribute('data-multi') === 'true';
    group.addEventListener('click', (e) => {
      const target = e.target.closest('[data-chip]');
      if (!target) return;
      if (multi) {
        target.classList.toggle('is-selected');
      } else {
        group.querySelectorAll('[data-chip]').forEach(b => b.classList.remove('is-selected'));
        target.classList.add('is-selected');
      }
    });
  });

  // кастомный курсор отключен — используем системный

  // Слайдер команды
  const teamSection = document.getElementById('team');
  if (teamSection) {
    const viewport = teamSection.querySelector('.team__viewport');
    const track = teamSection.querySelector('.team__track');
    const prevBtn = teamSection.querySelector('.team__nav .nav-btn[aria-label="prev"]');
    const nextBtn = teamSection.querySelector('.team__nav .nav-btn[aria-label="next"]');
    const cards = Array.from(teamSection.querySelectorAll('.team-card'));
    let index = 0;

    function visibleCount() {
      const w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 1024) return 2;
      return 3;
    }

    function getStep() {
      const card = cards[0];
      if (!card) return 0;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.gap || style.columnGap || '24') || 24;
      return card.getBoundingClientRect().width + gap;
    }

    function update() {
      const vis = visibleCount();
      const max = Math.max(0, cards.length - vis);
      index = Math.max(0, Math.min(index, max));
      const offset = getStep() * index;
      track.style.transform = `translateX(${-offset}px)`;
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === max;
    }

    prevBtn && prevBtn.addEventListener('click', () => { index -= 1; update(); });
    nextBtn && nextBtn.addEventListener('click', () => { index += 1; update(); });
    window.addEventListener('resize', update, { passive: true });
    update();
  }
})();


