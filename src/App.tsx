import React from 'react';
import { Wine } from 'lucide-react';
import { TripForm } from './components/form/TripForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 h-20 bg-[var(--color-surface)] border-b border-gray-200 shadow-[var(--shadow-sm)]">
        <div className="container h-full flex items-center">
          <div className="flex items-center gap-3">
            <Wine className="text-[var(--color-primary)]" size={32} />
            <div>
              <h1 className="text-xl font-bold text-[var(--color-text)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Гастро-выходные
              </h1>
              <p className="text-xs text-[var(--color-muted)]">
                Маршруты по Московской области
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          {/* Hero Section */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Спланируйте идеальные гастро-выходные
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Укажите параметры — и мы создадим для вас уникальный маршрут с фермами, сыроварнями, винодельнями и уютными глэмпингами
            </p>
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)]">
            <TripForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-surface)] border-t border-gray-200 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Wine className="text-[var(--color-primary)]" size={24} />
              <span className="font-semibold text-[var(--color-text)]">Гастро-выходные</span>
            </div>
            <div className="flex gap-6 text-sm text-[var(--color-muted)]">
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                О проекте
              </a>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                Контакты
              </a>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-[var(--color-muted)]">
            © 2026 Гастро-выходные. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
