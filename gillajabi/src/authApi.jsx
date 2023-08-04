import axios from 'axios';

const authApi = axios.create();

// refreshToken을 사용하여 accessToken을 갱신하는 함수
async function refreshAccessToken() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/users/token/refresh/`);
    const newAccessToken = response.data.access;
    return newAccessToken;
  } catch (error) {
    throw new Error('새로운 accessToken을 가져오는데 실패하였습니다.');
  }
}

// Axios 인터셉터를 활용하여 401 (Unauthorized) 에러 시 accessToken을 갱신합니다.
authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          // 새로운 accessToken을 헤더에 추가하여 재요청
          localStorage.setItem('accessToken', newAccessToken);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
      } catch (error) {
        console.error('accessToken 갱신에 실패하였습니다:', error.message);
        localStorage.removeItem('accessToken');
        throw new Error('새로운 accessToken을 가져오는데 실패하였습니다.');
      }
    }
    return Promise.reject(error);
  }
);

export default authApi;
