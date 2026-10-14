# 🍷 Гастро-выходные — Конституция проекта

## Описание продукта

«Гастро-выходные» — веб-приложение, которое генерирует готовые маршруты на 1–2 дня по Московской области с фокусом на гастрономический туризм. Пользователь указывает город старта, бюджет, длительность поездки и свои интересы (сыроварни, винодельни, фермы, глэмпинги и т.д.), а ИИ-агент формирует детальный маршрут с картой, таймингом, ссылками на бронирование и рекомендациями. Продукт решает проблему «не знаю, куда поехать на выходные» для жителей Москвы и Подмосковья.

---

## Целевая аудитория

- **Основная:** Жители Москвы и Подмосковья, 25–45 лет, с автомобилем, доход средний и выше, ценят опыт и впечатления больше вещей.
- **Дополнительная:** Пары, семьи с детьми, компании друзей, ищущие нестандартный отдых.

### Ключевые сценарии использования

1. **Спонтанные выходные.** Пользователь в пятницу вечером хочет уехать на 1 день, бюджет 5 000 ₽. Вводит параметры → получает маршрут с 3–4 точками (завтрак на ферме → сыроварня → обед → возвращение).

2. **Планирование с ночёвкой.** Семья планирует выходные на 2 дня, бюджет 20 000 ₽. Получает маршрут с глэмпингом на ночь, винодельней, фермерским рестораном и активностями для детей.

3. **Шеринг с друзьями.** Пользователь нашёл классный маршрут, хочет отправить компании. Генерирует уникальную ссылку, делится в Telegram — друзья видят карту и тайминг.

---

## Экраны MVP

### Экран 1: Форма ввода параметров

**URL:** `/`

| Элемент | Описание |
|---------|----------|
| Поле «Город старта» | Выпадающий список: Москва, Зеленоград, Подольск, Одинцово и др. |
| Поле «Бюджет» | Слайдер или числовое поле (₽), диапазон 2 000 – 50 000 |
| Поле «Длительность» | Переключатель: 1 день / 2 дня (с ночёвкой) |
| Чекбоксы интересов | Сыроварни, Винодельни, Фермы, Глэмпинги, Кемпинги, Кафе, Мастер-классы, Природа |
| Кнопка «Сгенерировать маршрут» | Основная CTA, запускает ИИ-генерацию |
| Индикатор загрузки | Анимация во время генерации (10–30 сек) |

---

### Экран 2: Страница маршрута

**URL:** `/route/[id]`

| Элемент | Описание |
|---------|----------|
| Карта (Leaflet) | Интерактивная карта с маркерами точек маршрута, линиями между ними |
| Таймлайн по дням | Вкладки «День 1» / «День 2», внутри — хронологический список точек |
| Карточка точки | Фото, название, тип, время прибытия, описание, ссылка на сайт/бронь |
| Блок «Итого» | Общая стоимость, расстояние, время в пути |
| Кнопка «Сохранить / Поделиться» | Переход к Экрану 3 |
| Кнопка «Перегенерировать» | Запрос новой версии маршрута с теми же параметрами |

---

### Экран 3: Сохранение и шеринг

**URL:** `/route/[id]/share`

| Элемент | Описание |
|---------|----------|
| Уникальная ссылка | Копируемый URL вида `gastro-weekend.ru/r/abc123` |
| Кнопки «Поделиться» | Telegram, WhatsApp, VK, скопировать ссылку |
| Кнопка «Сохранить в избранное» | Требует авторизацию (опционально) |
| Кнопка «Скачать PDF» | Маршрут в формате PDF для офлайн-доступа |
| Превью маршрута | Мини-карта и список точек |

---

## Технический стек

| Слой | Технология | Обоснование |
|------|-----------|-------------|
| Фреймворк | React 18 + Vite + TypeScript | Быстрая разработка, HMR, статический билд |
| Язык | TypeScript | Типобезопасность, рефакторинг |
| Стили | Tailwind CSS | Быстрая разработка, консистентность |
| База данных | Supabase (PostgreSQL) | Auth, Realtime, REST API из коробки |
| Бэкенд | Supabase Edge Functions (Deno) | API-ключи на сервере, 500k вызовов/мес бесплатно |
| ИИ | OpenRouter API | Доступ к GPT-4, Claude, Mistral через единый API |
| Карты | Leaflet + OpenStreetMap | Бесплатно, без API-ключей, достаточно для MVP |
| Хостинг | Vercel (статика) + Supabase Edge Functions | Vercel для фронта, Supabase для бэкенда |
| Валидация | Zod | Схема-валидация для форм и API |
| Состояние | Zustand | Лёгкий стор для клиента |

---

## Структура папок проекта

```
gastro-weekends/
├── PROJECT.md
├── ROLES.md
├── DECISIONS.md
├── PROGRESS.md
├── DESIGN.md
├── data/
│   └── points.json
├── public/
│   ├── images/
│   │   ├── og-image.png
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── App.tsx                         # Главная страница (Экран 1)
│   ├── index.css                       # Глобальные стили + CSS-токены
│   ├── main.tsx                        # Точка входа
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Slider.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   ├── form/
│   │   │   ├── TripForm.tsx
│   │   │   ├── CitySelect.tsx
│   │   │   ├── BudgetSlider.tsx
│   │   │   ├── DurationToggle.tsx
│   │   │   └── InterestCheckboxes.tsx
│   │   ├── route/
│   │   │   ├── RouteMap.tsx
│   │   │   ├── DayTimeline.tsx
│   │   │   ├── PointCard.tsx
│   │   │   └── RouteSummary.tsx
│   │   └── share/
│   │       ├── ShareButtons.tsx
│   │       ├── CopyLink.tsx
│   │       └── RoutePreview.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   └── types.ts
│   │   ├── ai/
│   │   │   ├── openrouter.ts
│   │   │   ├── prompts.ts
│   │   │   └── types.ts
│   │   ├── maps/
│   │   │   └── utils.ts
│   │   ├── validation/
│   │   │   └── trip.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── useGenerateRoute.ts
│   │   ├── useRoute.ts
│   │   └── useShare.ts
│   ├── stores/
│   │   └── tripStore.ts
│   └── types/
│       ├── trip.ts
│       ├── point.ts
│       └── route.ts
├── supabase/
│   ├── migrations/
│   │   ├── 001_create_points.sql
│   │   ├── 002_create_routes.sql
│   │   ├── 003_create_profiles.sql
│   │   └── 004_create_saved_routes.sql
│   └── functions/
│       ├── generate-route/
│       │   └── index.ts                # POST /functions/v1/generate-route
│       ├── get-routes/
│       │   └── index.ts                # GET /functions/v1/get-routes
│       └── share-route/
│           └── index.ts                # POST /functions/v1/share-route
├── .env.local
├── .env.example
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Схема базы данных

### Таблица `points`

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | `uuid` (PK, default: gen_random_uuid()) | Уникальный идентификатор |
| `name` | `text` (NOT NULL) | Название места |
| `type` | `text` (NOT NULL) | Тип: 'cheese_farm', 'winery', 'camping', 'glamping', 'cafe', 'farm', 'workshop' |
| `city` | `text` (NOT NULL) | Ближайший город / район |
| `lat` | `numeric(10, 7)` (NOT NULL) | Широта |
| `lon` | `numeric(10, 7)` (NOT NULL) | Долгота |
| `address` | `text` | Полный адрес |
| `website` | `text` | URL сайта |
| `phone` | `text` | Телефон |
| `description` | `text` | Описание места |
| `price_estimate` | `integer` | Примерная стоимость на человека (₽) |
| `rating` | `numeric(2, 1)` | Рейтинг 0.0–5.0 |
| `images` | `text[]` | Массив URL изображений |
| `tags` | `text[]` | Теги: ['сыр', 'вино', 'дети', 'животные'] |
| `working_hours` | `jsonb` | Часы работы по дням |
| `is_active` | `boolean` (default: true) | Актуально ли место |
| `created_at` | `timestamptz` (default: now()) | Дата добавления |
| `updated_at` | `timestamptz` (default: now()) | Дата обновления |

**Индексы:** `type`, `city`, `is_active`, GIN на `tags`

---

### Таблица `routes`

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | `uuid` (PK, default: gen_random_uuid()) | Уникальный идентификатор |
| `user_id` | `uuid` (FK → auth.users(id), nullable) | Автор (null = аноним) |
| `share_slug` | `text` (UNIQUE) | Короткий URL-слаг для шеринга |
| `start_city` | `text` (NOT NULL) | Город отправления |
| `duration_days` | `integer` (NOT NULL) | 1 или 2 |
| `budget` | `integer` (NOT NULL) | Бюджет в ₽ |
| `interests` | `text[]` (NOT NULL) | Выбранные интересы |
| `days_data` | `jsonb` (NOT NULL) | Структурированные данные по дням |
| `total_cost` | `integer` | Итоговая стоимость |
| `total_distance_km` | `numeric(8, 2)` | Общее расстояние |
| `status` | `text` (default: 'draft') | 'draft', 'generated', 'shared' |
| `ai_model` | `text` | Какая модель использовалась |
| `ai_prompt_tokens` | `integer` | Токены промпта |
| `ai_completion_tokens` | `integer` | Токены ответа |
| `created_at` | `timestamptz` (default: now()) | Дата создания |

**Пример `days_data`:**
```json
{
  "days": [
    {
      "day_number": 1,
      "points": [
        {
          "point_id": "uuid",
          "arrival_time": "10:00",
          "departure_time": "12:00",
          "order": 1,
          "notes": "Записаться на экскурсию заранее"
        }
      ]
    }
  ]
}
```

**Индексы:** `share_slug` (UNIQUE), `user_id`, `status`, `created_at`

---

### Таблица `profiles`

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | `uuid` (PK, FK → auth.users(id) ON DELETE CASCADE) | ID из Supabase Auth |
| `name` | `text` | Имя |
| `avatar_url` | `text` | URL аватара |
| `created_at` | `timestamptz` (default: now()) | Дата регистрации |
| `last_login_at` | `timestamptz` | Последний вход |

**Индексы:** нет дополнительных (PK по id)

---

### Таблица `saved_routes`

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | `uuid` (PK, default: gen_random_uuid()) | Уникальный идентификатор |
| `user_id` | `uuid` (FK → auth.users(id) ON DELETE CASCADE, NOT NULL) | Пользователь |
| `route_id` | `uuid` (FK → routes(id) ON DELETE CASCADE, NOT NULL) | Сохранённый маршрут |
| `created_at` | `timestamptz` (default: now()) | Дата сохранения |

**Ограничения:** `UNIQUE(user_id, route_id)` — один пользователь не может сохранить один маршрут дважды.

**Индексы:** `user_id`, `route_id`

---

## API-роуты (Supabase Edge Functions)

| Метод | Путь | Описание |
|-------|------|----------|
| `POST` | `/functions/v1/generate-route` | Генерация маршрута через ИИ. Body: `{ startCity, budget, duration, interests }`. Response: `{ routeId, data }` |
| `GET` | `/functions/v1/get-routes` | Список маршрутов пользователя (требует auth) |
| `GET` | `/functions/v1/get-route?id=...` | Получить маршрут по ID |
| `POST` | `/functions/v1/share-route` | Создать публичную ссылку. Body: `{ routeId }`. Response: `{ shareUrl }` |
| `GET` | `/functions/v1/get-shared-route?slug=...` | Получить маршрут по share-слагу |
| `DELETE` | `/functions/v1/delete-route` | Удалить маршрут (требует auth). Body: `{ routeId }` |

---

## Роли и их задачи

| Роль | Что должна сделать |
|------|-------------------|
| **Data Engineer** | Собрать базу из 50+ точек (фермы, сыроварни, винодельни, глэмпинги) в data/points.json. Обогатить координатами, описаниями, ценами. Написать скрипт импорта в Supabase. Обязательные поля для MVP: id, name, type, city, coordinates, description. Остальные — nullable, заполнять только если есть достоверные данные. |
| **UI/UX Дизайнер** | Создать wireframes трёх экранов MVP. Определить дизайн-систему (цвета, типографика, компоненты). Подготовить UI-kit в Figma. |
| **Frontend Developer** | Реализовать три экрана MVP на Next.js + Tailwind. Интегрировать Leaflet-карту. Настроить Zustand-стор. Подключить API. |
| **Backend/AI Developer** | Реализовать API-роуты. Настроить промпт для ИИ-генерации маршрутов через OpenRouter. Интегрировать Supabase (auth, БД). Написать server actions. |
| **QA Engineer** | Написать тест-кейсы для всех сценариев. Провести ручное тестирование. Настроить E2E-тесты (Playwright). Проверить на мобильных. |
| **DevOps** | Настроить Vercel-деплой. Конфигурировать Supabase (миграции, RLS). Настроить мониторинг и алерты. Настроить CI/CD. |
| **Маркетолог** | Подготовить лендинг с описанием продукта. Написать SEO-мета-теги. Подготовить контент для соцсетей. Определить каналы привлечения. |
