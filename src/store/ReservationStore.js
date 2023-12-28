import { create } from 'zustand';
import { addDays } from 'date-fns';

export const useReservationStore = create((set) => ({
  startDate: new Date(),
  endDate: addDays(new Date(), 1),
  resvInfo: [{ adult: 1, kid: 0, pet: 0 }],

  setDates: (data) => set(() => ({ startDate: data.startDate, endDate: data.endDate })),
  setInfo: (data) => set(() => ({ resvInfo: [...data] })),
}));
