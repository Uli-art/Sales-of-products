import React from 'react';
import s from  './Header.module.css'
import HeaderLogo from './HeaderLogo/HeaderLogo.jsx'
import HeaderMenu from './HeaderMenu/HeaderMenu.jsx'
import HeaderProfile from './HeaderProfile/HeaderProfile.jsx';

const Header = () => {
return (
    <nav className = {s.nav}>
       <div className="logo"> <HeaderLogo/></div>
       <div className="menu"><HeaderMenu/></div>
       <div className="profile"><HeaderProfile/></div>
    </nav>
)
}
export default Header

/*<div><HeaderProfile/></div>*/