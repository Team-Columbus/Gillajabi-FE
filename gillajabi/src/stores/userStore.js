import { create } from 'zustand';
import authApi from '../authApi';

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
    localStorage.removeItem('accessToken');
    set({ user: null });
  },

  /**
 * 토큰 유효성을 확인하고 사용자 정보를 가져오는 함수.
 * @async
 * @param {string} token - 서버에 요청할 때 사용할 액세스 토큰
 * @throws {Error} - 요청이 실패하거나 오류가 발생한 경우 해당 오류를 던집니다.
 * @returns {Promise<void>} - 사용자 정보를 가져오고, 상태 관리 스토어에 사용자 데이터를 설정합니다.
 */
  getUserInfo: async (token) => {
    try {
      const response = await authApi.get(`${process.env.REACT_APP_API}/api/users/token/validate/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if ( response.status >= 200 && response.status < 300 && response.data.isvalid) {
        const user = response.data.user;
        get().setUser(user);
      }
    } catch (error) {
      console.error(error.message);
    }
  },
}));
