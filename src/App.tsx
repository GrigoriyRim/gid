import { useState } from 'react'

type Section = 'overview' | 'screens' | 'stack' | 'database' | 'api' | 'roles' | 'decisions' | 'progress'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'overview', label: 'Обзор', icon: '🏠' },
    { id: 'screens', label: 'Экраны', icon: '🖥️' },
    { id: 'stack', label: 'Стек', icon: '⚙️' },
    { id: 'database', label: 'База данных', icon: '🗄️' },
    { id: 'api', label: 'API', icon: '🔌' },
    { id: 'roles', label: 'Роли', icon: '👥' },
    { id: 'decisions', label: 'Решения', icon: '📝' },
    { id: 'progress', label: 'Прогресс', icon: '📊' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍷</span>
              <div>
                <h1 className="text-lg font-bold text-white">Гастро-выходные</h1>
                <p className="text-xs text-gray-400">Документация проекта v1.0</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
              <span className="px-2 py-1 rounded bg-emerald-900/30 text-emerald-400 text-xs font-medium">
                Архитектура завершена
              </span>
              <span className="text-gray-600">|</span>
              <span>20.01.2026</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <nav className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all w-full text-left ${
                        activeSection === item.id
                          ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/50'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Quick Info */}
              <div className="hidden lg:block mt-6 p-4 rounded-xl bg-gray-900 border border-gray-800">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Быстрые факты</h3>
                <dl className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Экранов</dt>
                    <dd className="text-gray-300">3</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Таблиц БД</dt>
                    <dd className="text-gray-300">3</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">API-роутов</dt>
                    <dd className="text-gray-300">6</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Ролей</dt>
                    <dd className="text-gray-300">7</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Решений</dt>
                    <dd className="text-gray-300">8</dd>
                  </div>
                </dl>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {activeSection === 'overview' && <OverviewSection />}
            {activeSection === 'screens' && <ScreensSection />}
            {activeSection === 'stack' && <StackSection />}
            {activeSection === 'database' && <DatabaseSection />}
            {activeSection === 'api' && <ApiSection />}
            {activeSection === 'roles' && <RolesSection />}
            {activeSection === 'decisions' && <DecisionsSection />}
            {activeSection === 'progress' && <ProgressSection />}
          </main>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white">{children}</h2>
      {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
    </div>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-gray-900 border border-gray-800 p-6 ${className}`}>
      {children}
    </div>
  )
}

function OverviewSection() {
  return (
    <div className="space-y-8">
      <SectionTitle subtitle="Конституция проекта «Гастро-выходные»">Обзор проекта</SectionTitle>

      {/* Product Description */}
      <Card>
        <h3 className="text-lg font-semibold text-emerald-400 mb-3">📌 О продукте</h3>
        <p className="text-gray-300 leading-relaxed">
          «Гастро-выходные» — веб-приложение, которое генерирует готовые маршруты на 1–2 дня по Московской области 
          с фокусом на гастрономический туризм. Пользователь указывает город старта, бюджет, длительность поездки 
          и свои интересы (сыроварни, винодельни, фермы, глэмпинги и т.д.), а ИИ-агент формирует детальный маршрут 
          с картой, таймингом, ссылками на бронирование и рекомендациями.
        </p>
      </Card>

      {/* Target Audience */}
      <Card>
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">🎯 Целевая аудитория</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h4 className="font-medium text-white mb-2">Основная</h4>
            <p className="text-sm text-gray-400">
              Жители Москвы и Подмосковья, 25–45 лет, с автомобилем, доход средний и выше, 
              ценят опыт и впечатления больше вещей.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h4 className="font-medium text-white mb-2">Дополнительная</h4>
            <p className="text-sm text-gray-400">
              Пары, семьи с детьми, компании друзей, ищущие нестандартный отдых на выходных.
            </p>
          </div>
        </div>
      </Card>

      {/* Scenarios */}
      <Card>
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">🚀 Ключевые сценарии</h3>
        <div className="space-y-4">
          <ScenarioCard
            number={1}
            title="Спонтанные выходные"
            description="Пользователь в пятницу вечером хочет уехать на 1 день, бюджет 5 000 ₽. Вводит параметры → получает маршрут с 3–4 точками."
          />
          <ScenarioCard
            number={2}
            title="Планирование с ночёвкой"
            description="Семья планирует 2 дня, бюджет 20 000 ₽. Получает маршрут с глэмпингом, винодельней, фермерским рестораном."
          />
          <ScenarioCard
            number={3}
            title="Шеринг с друзьями"
            description="Пользователь нашёл маршрут, хочет отправить компании. Генерирует уникальную ссылку, делится в Telegram."
          />
        </div>
      </Card>

      {/* Monetization */}
      <Card>
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">💰 Монетизация (будущее)</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-gray-800/50 text-center">
            <div className="text-2xl mb-1">🔗</div>
            <p className="text-sm text-gray-300">Партнёрские ссылки на фермы и глэмпинги</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-800/50 text-center">
            <div className="text-2xl mb-1">⭐</div>
            <p className="text-sm text-gray-300">Премиум-подписка с расширенными маршрутами</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-800/50 text-center">
            <div className="text-2xl mb-1">💳</div>
            <p className="text-sm text-gray-300">Комиссия за бронирование</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ScenarioCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-gray-800/50">
      <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center text-emerald-400 font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  )
}

function ScreensSection() {
  return (
    <div className="space-y-8">
      <SectionTitle subtitle="Три экрана минимально жизнеспособного продукта">Экраны MVP</SectionTitle>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 rounded bg-blue-900/30 text-blue-400 text-xs font-mono">Экран 1</span>
          <h3 className="text-lg font-semibold text-white">Форма ввода параметров</h3>
          <span className="text-xs text-gray-500 font-mono">/</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <ElementItem label="Город старта" desc="Выпадающий список: Москва, Зеленоград, Подольск..." />
          <ElementItem label="Бюджет" desc="Слайдер 2 000 – 50 000 ₽" />
          <ElementItem label="Длительность" desc="Переключатель: 1 день / 2 дня" />
          <ElementItem label="Интересы" desc="Чекбоксы: сыроварни, винодельни, фермы..." />
          <ElementItem label="Кнопка CTA" desc="«Сгенерировать маршрут»" />
          <ElementItem label="Загрузка" desc="Анимация 10–30 сек" />
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 rounded bg-purple-900/30 text-purple-400 text-xs font-mono">Экран 2</span>
          <h3 className="text-lg font-semibold text-white">Страница маршрута</h3>
          <span className="text-xs text-gray-500 font-mono">/route/[id]</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <ElementItem label="Карта Leaflet" desc="Интерактивная карта с маркерами и маршрутом" />
          <ElementItem label="Таймлайн" desc="Вкладки «День 1» / «День 2» с хронологией" />
          <ElementItem label="Карточки точек" desc="Фото, название, время, описание, ссылка" />
          <ElementItem label="Блок «Итого»" desc="Стоимость, расстояние, время в пути" />
          <ElementItem label="Поделиться" desc="Переход к Экрану 3" />
          <ElementItem label="Перегенерировать" desc="Новая версия маршрута" />
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 rounded bg-amber-900/30 text-amber-400 text-xs font-mono">Экран 3</span>
          <h3 className="text-lg font-semibold text-white">Сохранение и шеринг</h3>
          <span className="text-xs text-gray-500 font-mono">/route/[id]/share</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <ElementItem label="Уникальная ссылка" desc="gastro-weekend.ru/r/abc123" />
          <ElementItem label="Telegram / WhatsApp / VK" desc="Кнопки «Поделиться»" />
          <ElementItem label="Сохранить" desc="В избранное (требует auth)" />
          <ElementItem label="Скачать PDF" desc="Маршрут для офлайн-доступа" />
        </div>
      </Card>
    </div>
  )
}

function ElementItem({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="p-3 rounded-lg bg-gray-800/50">
      <div className="text-sm font-medium text-white">{label}</div>
      <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
    </div>
  )
}

function StackSection() {
  const stack = [
    { layer: 'Фреймворк', tech: 'Next.js 14+ (App Router)', reason: 'SSR/SSG, server actions, API routes' },
    { layer: 'Язык', tech: 'TypeScript', reason: 'Типобезопасность, рефакторинг' },
    { layer: 'Стили', tech: 'Tailwind CSS', reason: 'Быстрая разработка, консистентность' },
    { layer: 'База данных', tech: 'Supabase (PostgreSQL)', reason: 'Auth, Realtime, REST API из коробки' },
    { layer: 'ИИ', tech: 'OpenRouter API', reason: 'GPT-4, Claude, Mistral через единый API' },
    { layer: 'Карты', tech: 'Leaflet + OpenStreetMap', reason: 'Бесплатно, без API-ключей' },
    { layer: 'Хостинг', tech: 'Vercel', reason: 'Нативная поддержка Next.js' },
    { layer: 'Валидация', tech: 'Zod', reason: 'Схема-валидация для форм и API' },
    { layer: 'Состояние', tech: 'Zustand', reason: 'Лёгкий стор (~1 KB)' },
  ]

  return (
    <div className="space-y-8">
      <SectionTitle subtitle="Технологии, которые мы используем">Технический стек</SectionTitle>
      <Card>
        <div className="space-y-3">
          {stack.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg bg-gray-800/50">
              <div className="sm:w-32 shrink-0">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.layer}</span>
              </div>
              <div className="sm:w-56 shrink-0">
                <span className="text-sm font-semibold text-emerald-400">{item.tech}</span>
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-400">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Folder Structure */}
      <Card>
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">📁 Структура папок</h3>
        <pre className="text-xs text-gray-300 overflow-x-auto bg-gray-950 rounded-lg p-4 font-mono leading-relaxed">
{`gastro-weekends/
├── PROJECT.md
├── ROLES.md
├── DECISIONS.md
├── PROGRESS.md
├── data/
│   └── points.json
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── route/[id]/
│   │   │   ├── page.tsx
│   │   │   └── share/page.tsx
│   │   ├── api/
│   │   │   ├── generate/route.ts
│   │   │   ├── routes/route.ts
│   │   │   ├── routes/[id]/route.ts
│   │   │   └── share/route.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   ├── form/
│   │   ├── route/
│   │   └── share/
│   ├── lib/
│   │   ├── supabase/
│   │   ├── ai/
│   │   └── maps/
│   ├── hooks/
│   ├── stores/
│   └── types/
├── supabase/migrations/
├── .env.local
├── next.config.ts
├── tailwind.config.ts
└── package.json`}
        </pre>
      </Card>
    </div>
  )
}

function DatabaseSection() {
  return (
    <div className="space-y-8">
      <SectionTitle subtitle="PostgreSQL через Supabase">Схема базы данных</SectionTitle>

      <Card>
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          <span className="font-mono text-sm bg-blue-900/30 px-2 py-0.5 rounded mr-2">table</span>
          points
        </h3>
        <p className="text-sm text-gray-400 mb-4">Каталог гастрономических точек и мест отдыха</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Поле</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Тип</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Описание</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <DbRow field="id" type="uuid (PK)" desc="Уникальный идентификатор" />
              <DbRow field="name" type="text NOT NULL" desc="Название места" />
              <DbRow field="type" type="text NOT NULL" desc="cheese_farm, winery, glamping..." />
              <DbRow field="city" type="text NOT NULL" desc="Ближайший город" />
              <DbRow field="lat" type="numeric(10,7)" desc="Широта" />
              <DbRow field="lon" type="numeric(10,7)" desc="Долгота" />
              <DbRow field="website" type="text" desc="URL сайта" />
              <DbRow field="description" type="text" desc="Описание" />
              <DbRow field="price_estimate" type="integer" desc="Стоимость на человека (₽)" />
              <DbRow field="rating" type="numeric(2,1)" desc="Рейтинг 0.0–5.0" />
              <DbRow field="images" type="text[]" desc="Массив URL изображений" />
              <DbRow field="tags" type="text[]" desc="Теги: сыр, вино, дети..." />
              <DbRow field="working_hours" type="jsonb" desc="Часы работы по дням" />
              <DbRow field="is_active" type="boolean" desc="Актуально ли место" />
              <DbRow field="created_at" type="timestamptz" desc="Дата добавления" />
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-purple-400 mb-4">
          <span className="font-mono text-sm bg-purple-900/30 px-2 py-0.5 rounded mr-2">table</span>
          routes
        </h3>
        <p className="text-sm text-gray-400 mb-4">Сгенерированные маршруты пользователей</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Поле</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Тип</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Описание</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <DbRow field="id" type="uuid (PK)" desc="Уникальный идентификатор" />
              <DbRow field="user_id" type="uuid (FK → users)" desc="Автор (null = аноним)" />
              <DbRow field="share_slug" type="text UNIQUE" desc="Короткий URL-слаг" />
              <DbRow field="start_city" type="text NOT NULL" desc="Город отправления" />
              <DbRow field="duration_days" type="integer NOT NULL" desc="1 или 2" />
              <DbRow field="budget" type="integer NOT NULL" desc="Бюджет в ₽" />
              <DbRow field="interests" type="text[] NOT NULL" desc="Выбранные интересы" />
              <DbRow field="days_data" type="jsonb NOT NULL" desc="Данные по дням и точкам" />
              <DbRow field="total_cost" type="integer" desc="Итоговая стоимость" />
              <DbRow field="status" type="text" desc="draft / generated / shared" />
              <DbRow field="ai_model" type="text" desc="Использованная модель" />
              <DbRow field="created_at" type="timestamptz" desc="Дата создания" />
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-amber-400 mb-4">
          <span className="font-mono text-sm bg-amber-900/30 px-2 py-0.5 rounded mr-2">table</span>
          users
        </h3>
        <p className="text-sm text-gray-400 mb-4">Пользователи (через Supabase Auth)</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Поле</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Тип</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Описание</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <DbRow field="id" type="uuid (PK)" desc="ID из Supabase Auth" />
              <DbRow field="email" type="text UNIQUE NOT NULL" desc="Email" />
              <DbRow field="name" type="text" desc="Имя" />
              <DbRow field="avatar_url" type="text" desc="URL аватара" />
              <DbRow field="saved_route_ids" type="uuid[]" desc="Сохранённые маршруты" />
              <DbRow field="created_at" type="timestamptz" desc="Дата регистрации" />
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

function DbRow({ field, type, desc }: { field: string; type: string; desc: string }) {
  return (
    <tr>
      <td className="py-2 px-3 font-mono text-xs text-emerald-400">{field}</td>
      <td className="py-2 px-3 font-mono text-xs text-gray-400">{type}</td>
      <td className="py-2 px-3 text-gray-300">{desc}</td>
    </tr>
  )
}

function ApiSection() {
  const routes = [
    { method: 'POST', path: '/api/generate', desc: 'Генерация маршрута через ИИ', body: '{ startCity, budget, duration, interests }' },
    { method: 'GET', path: '/api/routes', desc: 'Список маршрутов пользователя', body: 'Auth required' },
    { method: 'GET', path: '/api/routes/[id]', desc: 'Получить маршрут по ID', body: '' },
    { method: 'POST', path: '/api/share', desc: 'Создать публичную ссылку', body: '{ routeId }' },
    { method: 'GET', path: '/api/share/[slug]', desc: 'Получить маршрут по share-слагу', body: '' },
    { method: 'DELETE', path: '/api/routes/[id]', desc: 'Удалить маршрут', body: 'Auth required' },
  ]

  const methodColors: Record<string, string> = {
    GET: 'bg-emerald-900/30 text-emerald-400',
    POST: 'bg-blue-900/30 text-blue-400',
    DELETE: 'bg-red-900/30 text-red-400',
  }

  return (
    <div className="space-y-8">
      <SectionTitle subtitle="REST API для приложения">API-роуты</SectionTitle>
      <Card>
        <div className="space-y-3">
          {routes.map((route, i) => (
            <div key={i} className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono w-16 text-center ${methodColors[route.method]}`}>
                  {route.method}
                </span>
                <code className="text-sm text-white font-mono">{route.path}</code>
                <span className="text-sm text-gray-400 flex-1">{route.desc}</span>
              </div>
              {route.body && (
                <div className="mt-2 ml-20">
                  <span className="text-xs text-gray-500">Body: </span>
                  <code className="text-xs text-gray-400 font-mono">{route.body}</code>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function RolesSection() {
  const roles = [
    { role: 'Data Engineer', icon: '📊', task: 'Собрать 50+ точек (фермы, сыроварни, винодельни, глэмпинги). Обогащить координатами, описаниями, ценами. Написать скрипт импорта в Supabase.' },
    { role: 'UI/UX Дизайнер', icon: '🎨', task: 'Создать wireframes трёх экранов MVP. Определить дизайн-систему (цвета, типографика). Подготовить UI-kit в Figma.' },
    { role: 'Frontend Developer', icon: '💻', task: 'Реализовать три экрана на Next.js + Tailwind. Интегрировать Leaflet-карту. Настроить Zustand-стор. Подключить API.' },
    { role: 'Backend/AI Developer', icon: '🤖', task: 'Реализовать API-роуты. Настроить промпт для ИИ через OpenRouter. Интегрировать Supabase (auth, БД). Server actions.' },
    { role: 'QA Engineer', icon: '🧪', task: 'Написать тест-кейсы для всех сценариев. Ручное тестирование. E2E-тесты (Playwright). Проверка на мобильных.' },
    { role: 'DevOps', icon: '🚀', task: 'Настроить Vercel-деплой. Конфигурировать Supabase (миграции, RLS). Мониторинг, алерты, CI/CD.' },
    { role: 'Маркетолог', icon: '📣', task: 'Подготовить лендинг. SEO-мета-теги. Контент для соцсетей. Каналы привлечения.' },
  ]

  return (
    <div className="space-y-8">
      <SectionTitle subtitle="Кто будет работать над проектом после архитектора">Команда и роли</SectionTitle>
      <Card>
        <div className="space-y-4">
          {roles.map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-gray-800/50">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-white">{item.role}</h4>
                <p className="text-sm text-gray-400 mt-1">{item.task}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function DecisionsSection() {
  const decisions = [
    {
      title: 'Next.js App Router',
      decision: 'Используем Next.js 14+ с App Router',
      why: 'Server Actions, SSR/SSG для SEO, API Routes, Vercel — нативный хостинг, экосистема из коробки.'
    },
    {
      title: 'Supabase вместо Firebase',
      decision: 'PostgreSQL через Supabase',
      why: 'Реляционная БД для структурированных данных, JSONB для гибкости, встроенный Auth, RLS, open source, нет vendor lock-in.'
    },
    {
      title: 'Leaflet вместо Mapbox',
      decision: 'Leaflet + OpenStreetMap',
      why: 'Бесплатно, без API-ключей и лимитов. Лёгкая библиотека (~42 KB). Достаточно данных по МО. Можно мигрировать позже.'
    },
    {
      title: 'OpenRouter для ИИ',
      decision: 'Единый шлюз к LLM',
      why: 'Один API-ключ для GPT-4, Claude, Mistral. Легко переключать модели. Fallback при недоступности. Прозрачная стоимость.'
    },
    {
      title: 'Zustand для стейта',
      decision: 'Zustand вместо Redux/Context',
      why: 'Минимальный boilerplate, работает вне React-дерева, TypeScript из коробки, ~1 KB.'
    },
    {
      title: 'JSONB для days_data',
      decision: 'Данные по дням в JSONB-поле',
      why: 'Структура может меняться, не нужна сложная фильтрация, один запрос = весь маршрут. Можно вынести позже.'
    },
    {
      title: 'Share-слаг вместо UUID',
      decision: 'Короткий slug для публичных ссылок',
      why: 'Удобнее для шеринга в мессенджерах: /r/x7k2m vs /route/550e8400-e29b-41d4...'
    },
    {
      title: 'Анонимная генерация',
      decision: 'Без обязательной авторизации',
      why: 'Снижает барьер входа. Маршрут сохраняется с user_id=null. Auth только для «избранного» и истории.'
    },
  ]

  return (
    <div className="space-y-8">
      <SectionTitle subtitle="Архитектурные решения и их обоснование">Журнал решений</SectionTitle>
      <div className="space-y-4">
        {decisions.map((d, i) => (
          <Card key={i}>
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center text-emerald-400 font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <h4 className="font-semibold text-white">{d.title}</h4>
                <p className="text-sm text-emerald-400 mt-1">{d.decision}</p>
                <p className="text-sm text-gray-400 mt-2">
                  <span className="text-gray-500 font-medium">Почему: </span>{d.why}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ProgressSection() {
  return (
    <div className="space-y-8">
      <SectionTitle subtitle="Текущее состояние проекта">Трекер прогресса</SectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-emerald-800/50">
          <h3 className="text-sm font-semibold text-emerald-400 mb-3">✅ Готово</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Архитектура проекта</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Схема базы данных</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Структура папок</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> API-роуты</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Распределение ролей</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Журнал решений</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Пример данных</li>
          </ul>
        </Card>

        <Card className="border-blue-800/50">
          <h3 className="text-sm font-semibold text-blue-400 mb-3">🔄 В работе</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-blue-400 animate-pulse"></span>
              Архитектура — финализация
            </li>
          </ul>
        </Card>

        <Card className="border-amber-800/50">
          <h3 className="text-sm font-semibold text-amber-400 mb-3">➡️ Дальше</h3>
          <ol className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">1)</span>
              Собрать базу точек (Data Engineer)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">2)</span>
              Согласовать дизайн (UI/UX)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">3)</span>
              Собрать Экран 1 (Frontend)
            </li>
          </ol>
        </Card>
      </div>

      {/* Timeline */}
      <Card>
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">📅 Хронология</h3>
        <div className="space-y-3">
          <TimelineItem date="2026-01-20" stage="Архитектура" status="done" />
          <TimelineItem date="—" stage="Данные (база точек)" status="pending" />
          <TimelineItem date="—" stage="Дизайн" status="pending" />
          <TimelineItem date="—" stage="Frontend (Экран 1)" status="pending" />
          <TimelineItem date="—" stage="Backend/AI" status="pending" />
          <TimelineItem date="—" stage="Frontend (Экран 2–3)" status="pending" />
          <TimelineItem date="—" stage="Интеграция" status="pending" />
          <TimelineItem date="—" stage="QA" status="pending" />
          <TimelineItem date="—" stage="Деплой" status="pending" />
        </div>
      </Card>
    </div>
  )
}

function TimelineItem({ date, stage, status }: { date: string; stage: string; status: 'done' | 'pending' }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs text-gray-500 w-24 shrink-0 font-mono">{date}</span>
      <div className={`w-3 h-3 rounded-full shrink-0 ${status === 'done' ? 'bg-emerald-500' : 'bg-gray-700 border border-gray-600'}`}></div>
      <span className={`text-sm ${status === 'done' ? 'text-gray-200' : 'text-gray-500'}`}>{stage}</span>
      {status === 'done' && <span className="text-xs text-emerald-500 ml-auto">✓ Завершён</span>}
      {status === 'pending' && <span className="text-xs text-gray-600 ml-auto">⏳ Ожидает</span>}
    </div>
  )
}

export default App
