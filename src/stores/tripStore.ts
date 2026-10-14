import { create } from 'zustand';
import { TripStore, TripFormData, City, DurationDays, Interest } from '../types/trip';

export const useTripStore = create<TripStore>((set, get) => ({
  startCity: null,
  budget: 10000,
  durationDays: 1,
  interests: [],

  setField: <K extends keyof TripFormData>(field: K, value: TripFormData[K]) => {
    set({ [field]: value } as any);
  },

  reset: () => {
    set({
      startCity: null,
      budget: 10000,
      durationDays: 1,
      interests: [],
    });
  },

  isValid: () => {
    const { startCity, budget, interests } = get();
    return (
      startCity !== null &&
      budget >= 2000 &&
      budget <= 50000 &&
      interests.length > 0
    );
  },
}));
