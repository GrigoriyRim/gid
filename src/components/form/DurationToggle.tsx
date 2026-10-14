import React from 'react';
import { DurationDays } from '../../types/trip';

interface DurationToggleProps {
  value: DurationDays;
  onChange: (value: DurationDays) => void;
}

export const DurationToggle: React.FC<DurationToggleProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-[var(--color-text)]">
        Длительность
      </label>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onChange(1)}
          className={`flex-1 h-12 px-4 rounded-[var(--radius-md)] border-2 transition-all duration-[var(--transition-fast)] font-medium ${
            value === 1
              ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
              : 'bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-primary)]'
          }`}
        >
          1 день
        </button>
        <button
          type="button"
          onClick={() => onChange(2)}
          className={`flex-1 h-12 px-4 rounded-[var(--radius-md)] border-2 transition-all duration-[var(--transition-fast)] font-medium ${
            value === 2
              ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
              : 'bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-primary)]'
          }`}
        >
          2 дня с ночёвкой
        </button>
      </div>
    </div>
  );
};
