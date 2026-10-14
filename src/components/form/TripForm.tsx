import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../components/ui/Button';
import { CitySelect } from './CitySelect';
import { BudgetSlider } from './BudgetSlider';
import { DurationToggle } from './DurationToggle';
import { InterestCheckboxes } from './InterestCheckboxes';
import { tripFormSchema, TripFormSchema } from '../../lib/validation/trip';
import { useTripStore } from '../../stores/tripStore';
import { City, DurationDays, Interest } from '../../types/trip';

export const TripForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setField } = useTripStore();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<TripFormSchema>({
    resolver: zodResolver(tripFormSchema),
    mode: 'onChange',
    defaultValues: {
      startCity: '',
      budget: 10000,
      durationDays: 1,
      interests: [],
    },
  });
  
  const startCity = watch('startCity');
  const budget = watch('budget');
  const durationDays = watch('durationDays');
  const interests = watch('interests');
  
  const onSubmit = async (data: TripFormSchema) => {
    setIsSubmitting(true);
    
    // Сохраняем в стор
    setField('startCity', data.startCity as City);
    setField('budget', data.budget);
    setField('durationDays', data.durationDays as DurationDays);
    setField('interests', data.interests as Interest[]);
    
    // Имитация генерации маршрута
    console.log('Генерация маршрута...', data);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Маршрут сгенерирован:', data);
    setIsSubmitting(false);
    
    // TODO: редирект на /route/[id] когда будет готов Экран 2
    alert('Маршрут сгенерирован! (Это заглушка, Экран 2 ещё не реализован)');
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <CitySelect
        value={startCity as City | null}
        onChange={(city) => setValue('startCity', city, { shouldValidate: true })}
        error={errors.startCity?.message}
      />
      
      <BudgetSlider
        value={budget}
        onChange={(value) => setValue('budget', value, { shouldValidate: true })}
        error={errors.budget?.message}
      />
      
      <DurationToggle
        value={durationDays as DurationDays}
        onChange={(value) => setValue('durationDays', value, { shouldValidate: true })}
      />
      
      <InterestCheckboxes
        values={interests as Interest[]}
        onChange={(value) => setValue('interests', value, { shouldValidate: true })}
        error={errors.interests?.message}
      />
      
      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        disabled={!isValid || isSubmitting}
        className="w-full"
      >
        🚀 Сгенерировать маршрут
      </Button>
    </form>
  );
};
