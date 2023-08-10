import React from 'react';
import '../styles/components/Navbar.css'
import {Back, Glasses, Home, Load, Login, myInfo, Solve} from '../assets/'

const Navbar = (props) => {
  const loginText = props.loginStatus === 1 ?  myInfo : Login ;

  return (
    <div className='navbar'>
      {props.pageStatus === 1 ? (
        <div className='navbar-img'>
          <img src= {loginText} />
        </div>
      ) : (
        <div className='navbar-img'>
          <img src= {Back} />
        </div>
      )}

      {props.subscribeStatus === 1 ? (
        <div className='navbar-img'>
          <img src= {Solve} />
        </div>
      ) : null}

      {props.pageStatus === 0 ? (
        <div className='navbar-img'>
          <img src= {Home} />
        </div>
      ) : null}

      {props.subscribeStatus === 1 ? (
        <div className='navbar-img'>
          <img src= {Load} />
        </div>
      ) : null}

      <div className='navbar-img'>
        <img src= {Glasses} />
      </div>
    </div>
  );
};

export default Navbar;
