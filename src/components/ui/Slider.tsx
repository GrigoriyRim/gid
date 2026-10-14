import React from 'react';

interface SliderProps {
  label?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  error?: string;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = (v) => v.toString(),
  error,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-[var(--color-text)]">
          {label}
        </label>
      )}
      <div className="relative pt-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1 rounded-full appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percentage}%, var(--color-track) ${percentage}%, var(--color-track) 100%)`,
          }}
        />
        <div className="flex justify-between mt-2 text-xs text-[var(--color-muted)]">
          <span>{formatValue(min)}</span>
          <span className="text-base font-semibold text-[var(--color-text)]">
            {formatValue(value)}
          </span>
          <span>{formatValue(max)}</span>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-xs text-[var(--color-error)]">{error}</p>
      )}
      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-primary);
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          width: 24px;
          height: 24px;
          box-shadow: var(--shadow-md);
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-primary);
          cursor: pointer;
          border: none;
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
};
