import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-1 text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full h-10 px-3 py-2.5 rounded-[var(--radius-md)] border transition-all duration-[var(--transition-fast)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
          error
            ? 'border-[var(--color-error)] bg-[var(--color-error-bg)]'
            : 'border-[var(--color-border)]'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
};
