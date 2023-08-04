import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, Splash, Signup, Login, Mypage, Category} from './pages'
import { useUserStore } from './stores/userStore';
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { getUserInfo } = useUserStore();

  useEffect(() => {
    const visited = sessionStorage.getItem('visited');

    const hideSplashScreen = () => {
      setShowSplash(false);
      sessionStorage.setItem('visited', 'true');
    };

    if (visited) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(hideSplashScreen, 4000);

      return () => clearTimeout(timer);
    }

    const token = localStorage.getItem('accessToken');
    if(token){
      getUserInfo(token);
    }
  }, []);

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          {showSplash ? <Route path="/" element={<Splash />} />
            : (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/category" element={<Category />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
