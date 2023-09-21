import React from 'react';
import { NavLink } from 'react-router-dom';
import style from  './HeaderMenu.module.css'
import styled from '@emotion/styled';
import { useAuth } from '../../Login/Sing/auth'
const HeaderMenu = () => {
    const auth = useAuth()
    const Button = styled.button`
    margin-bottom: 40px;
    background-color: #ad457d;
    color: white;
    border: none;
    outline: none;
    border-radius: 25px;
    padding: 15px 70px;
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;`; 

return (
    
    <div className={style.elements}>
        <ul>
            
            <li>{!auth.seller && (
                    <NavLink to = "/sign-in"> My products</NavLink>
                )}
                {auth.seller && (
                    <NavLink to="/myproducts"> My products</NavLink>
                )}</li>
                <li>{!auth.seller && (
                    <NavLink to = "/sign-in"> Statistics</NavLink>
                )}
                {auth.seller && (
                    <li><NavLink to="/statistics"> Statistics</NavLink></li>
                )}</li>
            
            <li><a href="http://localhost:3000"> Become a user</a></li>
        </ul>
    </div>
   
    )
}
export default HeaderMenu

/*
{!auth.user && (
                <NavLink to = "/sign-in"> Login</NavLink>
            )}
*/