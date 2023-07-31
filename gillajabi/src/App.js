import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main, Splash, Signup, Login, Mypage, Category} from './pages'
import './App.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
