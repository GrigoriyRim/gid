import React from 'react';
import { Slider } from '../../components/ui/Slider';

interface BudgetSliderProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export const BudgetSlider: React.FC<BudgetSliderProps> = ({
  value,
  onChange,
  error,
}) => {
  const formatValue = (v: number) => `${v.toLocaleString('ru-RU')} ₽`;
  
  return (
    <Slider
      label="Бюджет"
      min={2000}
      max={50000}
      step={1000}
      value={value}
      onChange={onChange}
      formatValue={formatValue}
      error={error}
    />
  );
};
