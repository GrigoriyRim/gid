import React from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]',
  secondary: 'bg-[var(--color-surface)] text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-background)]',
  ghost: 'bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-background)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-4 py-2 text-sm',
  md: 'h-10 px-5 py-2.5 text-base',
  lg: 'h-12 px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-all duration-[var(--transition-fast)] disabled:opacity-50 disabled:cursor-not-allowed';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" size={18} />}
      {loading ? 'Загрузка...' : children}
    </button>
  );
};
