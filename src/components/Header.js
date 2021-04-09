import React from 'react';
import whiteLogo from '../images/white-logo.svg'


function Header() {
    return ((
        <header className='header'>
            <img src={whiteLogo} alt='Логотип' className='header__logo'/>
        </header>
    ));
}

export default Header;