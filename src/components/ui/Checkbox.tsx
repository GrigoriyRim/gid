import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  id,
}) => {
  const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <label
      htmlFor={checkboxId}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div
        className={`relative w-5 h-5 rounded border-2 transition-all duration-[var(--transition-fast)] ${
          checked
            ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
            : 'bg-[var(--color-surface)] border-[var(--color-border)] group-hover:border-[var(--color-primary)]'
        }`}
      >
        {checked && (
          <Check
            className="absolute inset-0 m-auto text-white"
            size={14}
            strokeWidth={3}
          />
        )}
      </div>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className="text-base text-[var(--color-text)]">{label}</span>
    </label>
  );
};
