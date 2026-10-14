export const CITIES = [
  'Москва',
  'Зеленоград',
  'Одинцово',
  'Истра',
  'Дмитров',
  'Сергиев Посад',
  'Коломна',
  'Серпухов',
  'Руза',
  'Волоколамск',
  'Подольск',
  'Ногинск',
  'Павловский Посад',
  'Егорьевск',
  'Ступино',
  'Зарайск',
  'Можайск',
  'Талдом',
  'Мытищи',
  'Домодедово',
  'Луховицы',
  'Краснознаменск',
] as const;

export type City = (typeof CITIES)[number];

export const INTERESTS = [
  'Сыроварни',
  'Винодельни',
  'Фермы',
  'Глэмпинги',
  'Кафе',
  'Мастер-классы',
] as const;

export type Interest = (typeof INTERESTS)[number];

export type DurationDays = 1 | 2;

export interface TripFormData {
  startCity: City;
  budget: number;
  durationDays: DurationDays;
  interests: Interest[];
}

export interface TripStore {
  startCity: City | null;
  budget: number;
  durationDays: DurationDays;
  interests: Interest[];
  setField: <K extends keyof TripFormData>(field: K, value: TripFormData[K]) => void;
  reset: () => void;
  isValid: () => boolean;
}
