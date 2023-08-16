import { create } from 'zustand';

export const useMovieStore = create((set, get) => ({
  userCount : null,
  selectedMovie : null,
  selectSeatNum : null,
  moviePayment : null,
  selectedSeats : null,

  setUserCount: (count) => set({ userCount: count }),  
  
  setSelectedMovie: (title) => set({ selectedMovie: title }),

  setSelectSeatNum: (seatNum) => set({ selectSeatNum: seatNum }),

  setMoviePayment: (payment) => set({ moviePayment: payment }),

  setSelectedSeats: (seats) => set({ selectedSeats: seats}),

}));
