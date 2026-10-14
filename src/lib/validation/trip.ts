import { z } from 'zod';
import { CITIES, INTERESTS } from '../../types/trip';

export const tripFormSchema = z.object({
  startCity: z.string().min(1, 'Выберите город отправления'),
  budget: z
    .number({ message: 'Бюджет должен быть числом' })
    .min(2000, 'Минимальный бюджет — 2 000 ₽')
    .max(50000, 'Максимальный бюджет — 50 000 ₽'),
  durationDays: z.number().min(1).max(2),
  interests: z
    .array(z.string())
    .min(1, 'Выберите хотя бы один интерес'),
});

export type TripFormSchema = z.infer<typeof tripFormSchema>;

export const validateCity = (city: string): boolean => {
  return CITIES.includes(city as any);
};

export const validateInterest = (interest: string): boolean => {
  return INTERESTS.includes(interest as any);
};
