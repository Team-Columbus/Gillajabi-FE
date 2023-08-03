import { create } from 'zustand';

export const useUserStore = create((set, get) => ({
  user: null,
  /**
  * 사용자 데이터를 설정합니다.
  * @param {Object} userData - 사용자 데이터
  */
  setUser: (userData) => set({ user: userData }),
  
  /**
   * 사용자 로그아웃을 처리합니다.
  */
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
  },
}));
