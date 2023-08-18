import {create} from 'zustand'

export const useBusStore = create((set) => ({
  
  busDate: '',
  busDestination: '',
  busFare: '',
  butTime:'',
  busRate:'',
  busCompany:'',
  busUserAdult:'',
  busUserStudent:'',


  setBusDate: (date) => set({busDate: date}),
  setBusDestination: (des) => set({busDestination: des}),
  setBusFare: (fare) => set({busFare: fare}),
  setBusTime: (time) => set({busTime: time}),
  setBusRate: (rate) => set({busRate: rate}),
  setBusCompany: (company) => set({busCompany: company}),
  setBusUserAdult: (userAdult) => set({busUserAdult: userAdult}),
  setBusUserStudent: (userStudnt) => set({busUserStudent: userStudnt}),

}));