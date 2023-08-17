import { create } from 'zustand';

export const useMovieStore = create((set, get) => ({
  userCount : null,
  moviePayment : null,
  selectedSeats : null,
  selectedMovieInfo : null,

  setUserCount: (count) => set({ userCount: count }),  

  setSelectedMovieInfo: (info) => set({ selectedMovieInfo: info }),

  setMoviePayment: (payment) => set({ moviePayment: payment }),

  setSelectedSeats: (seats) => set({ selectedSeats: seats}),

}));
