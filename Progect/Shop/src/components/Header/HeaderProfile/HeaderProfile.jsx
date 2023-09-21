import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './HeaderProfile.module.css'
import Person2Icon from '@mui/icons-material/Person2';
import { useAuth } from '../../Login/Sing/auth'

const HeaderProfile = () => {
    const auth = useAuth()
return (
    
    <div className={s.container}>
        
        <div>
            < Person2Icon/>
        </div>
        <div>
            {!auth.seller && (
                <NavLink to = "/sign-in"> Login</NavLink>
            )}
            {auth.seller && (
                <NavLink to = "/registrprofile"> {auth.seller.nameOfCompany}</NavLink>
            )}
        </div>
    </div>

)
}
export default HeaderProfile