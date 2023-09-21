import React from 'react';
import { NavLink } from 'react-router-dom';
import style from  './HeaderLogo.module.css'
import logo from '../image/Logo.png'

const HeaderLogo = () => {
return (
   <img className={style.logo} src = {logo}/> 
 )
}
export default HeaderLogo