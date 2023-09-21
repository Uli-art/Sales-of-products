import React from 'react';
import './App.css';

import Header from './components//Header/Header';
import Profile from './components/Profile/Profile';
import Menu from './components/Menu/Menu';
import Slider from './components/Party/Slider'
import { SingIn } from '../src/components/Login/Sing/SingIn'
import { SingUp } from '../src/components/Login/Sing/SingUp'
import { Statistics } from './components/Statictics/Statistics'
import { AddProduct } from './components/AddProduct/AddProduct';
import { AuthProvider } from './components/Login/Sing/auth';
import { Routes, Route } from 'react-router-dom';

const App = (props) =>{

  return (
   
    <div className = 'app-wrapper'>
<AuthProvider>
<Header/>
 <div className = 'app-wrapper-content'>
 <Routes>
 <Route path ="/profile" element = {<SingUp />} />
 <Route path = "/sign-in" element = {<SingIn/>}/>
 <Route path ="/registrprofile" element = {<Profile state = {props.state.ProfilePage}/>} />
 <Route  path ="/statistics" element = {<Statistics/>}/>
 <Route  path ="/myproducts" element = {<Menu/>}/>
 <Route  path ="/addproduct" element = {<AddProduct/>}/>
 </Routes>
 </div>
 </AuthProvider>
    </div>
  );
}


export default App;
