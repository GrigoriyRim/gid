import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block mb-1 text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`w-full h-10 px-3 py-2.5 pr-10 rounded-[var(--radius-md)] border transition-all duration-[var(--transition-fast)] bg-[var(--color-surface)] text-[var(--color-text)] appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
            error
              ? 'border-[var(--color-error)] bg-red-50'
              : 'border-gray-300'
          } ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-muted)]"
          size={18}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
};
