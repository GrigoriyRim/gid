import React from 'react';
import { Checkbox } from '../../components/ui/Checkbox';
import { INTERESTS, Interest } from '../../types/trip';

interface InterestCheckboxesProps {
  values: Interest[];
  onChange: (interests: Interest[]) => void;
  error?: string;
}

export const InterestCheckboxes: React.FC<InterestCheckboxesProps> = ({
  values,
  onChange,
  error,
}) => {
  const handleToggle = (interest: Interest, checked: boolean) => {
    if (checked) {
      onChange([...values, interest]);
    } else {
      onChange(values.filter((i) => i !== interest));
    }
  };
  
  return (
    <div className="w-full">
      <label className="block mb-3 text-sm font-medium text-[var(--color-text)]">
        Что вас интересует? *
      </label>
      <div className="grid grid-cols-2 gap-3">
        {INTERESTS.map((interest) => (
          <Checkbox
            key={interest}
            label={interest}
            checked={values.includes(interest)}
            onChange={(checked) => handleToggle(interest, checked)}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-xs text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
};
