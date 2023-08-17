import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, Splash, Signup, Login, Mypage, Category, Practice, Level, Preview, Edit, Movie, Bus, Quest} from './pages'
import { useUserStore } from './stores/userStore';
import { useZoomStore } from './stores/zoomStore';
import PrivateRoute from './components/PrivateRoute';
import ZoomButtons from './components/ZoomButtons'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { getUserInfo } = useUserStore();
  const { zoomLevel } = useZoomStore();
  const mainStyle = {
    transform: `scale(${zoomLevel / 100})`,
  };

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
    <div className='app' style={mainStyle}>
      <BrowserRouter>
        <Routes>
          {showSplash ? <Route path="/" element={<Splash />} />
            : (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<PrivateRoute component={<Mypage/>}/>} />
              <Route path="/quest" element={<PrivateRoute component={<Quest/>}/>} />
              <Route path="/category/:path" element={<Category />} />
              <Route path="/practice/:path" element={<Practice />} />
              <Route path="/level/:path" element={<Level />} />
              <Route path="/preview/:path" element={<Preview />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="/bus" element={<Bus />} />
            </>
          )}
        </Routes>
        {!showSplash && (
          <div className='app-zoombuttons-container'>
            <ZoomButtons />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
