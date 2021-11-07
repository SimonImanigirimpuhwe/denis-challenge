import React from 'react'
import { FaBars } from 'react-icons/fa';


const Header = () => {
    return (
        <div className='navbar'>
          <div className='navbar-content'>
            <div className='logo'>
              <img
                src='/logo2.png'
                alt='q-premium-logo'
                width={175}
                height={55}
                className="logoImg"
              />
            </div>
            <div className='menu'>
              <span className='menu__text'>Menu</span>
              <FaBars className='menu__icon' />
            </div>
          </div>
        </div>
      );
}
 
export default Header;