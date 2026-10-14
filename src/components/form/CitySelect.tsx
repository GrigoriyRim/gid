import React from 'react';
import { Select } from '../../components/ui/Select';
import { CITIES, City } from '../../types/trip';

interface CitySelectProps {
  value: City | null;
  onChange: (city: City) => void;
  error?: string;
}

export const CitySelect: React.FC<CitySelectProps> = ({
  value,
  onChange,
  error,
}) => {
  const options = [
    { value: '', label: 'Выберите город' },
    ...CITIES.map((city) => ({ value: city, label: city })),
  ];
  
  return (
    <Select
      label="Город отправления *"
      value={value || ''}
      onChange={(e) => onChange(e.target.value as City)}
      options={options}
      error={error}
    />
  );
};
