import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "../Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from './auth'
import { useState } from 'react'

export const SingUp = () => {

    const [seller, setSeller] = useState({phoneNumber: '',
      nameOfCompany: '', 
      adress: '', 
      password: '',
      description: '',
      id: 0});
    const auth = useAuth()
    const navigate = useNavigate()

  function handleNameOfCompanyChange(e) {
    seller.nameOfCompany = e.target.value;
  }

  function handleAdressChange(e) {
    seller.adress = e.target.value;
  }

  function handlePasswordChange(e) {
    seller.password = e.target.value;
  }

  function handlePhoneNumberChange(e) {
    seller.phoneNumber = e.target.value;
  }

  function handleDescriptionChange(e) {
    seller.description = e.target.value;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(seller)
    
    axios.get(`http://localhost:3307/authSeller/${seller.phoneNumber}`)
    .then( function (response) {
      if(response.data == null){
        axios.post(`http://localhost:3307/sellers/`, {seller}).then(function (resp){
          seller.id = resp.data.id;
        })
        console.log(seller)
        auth.login(seller)
        navigate('/')
      }
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
  }

    return (
      
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Name of compamy
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter name of compamy"
              name="name"
              defaultValue={''}
              onChange={handleNameOfCompanyChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="formFieldInput"
              placeholder="+999-99-999-99-99"
              name="phoneNumber"
              pattern="[+]{1}[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              defaultValue={''}
              onChange={handlePhoneNumberChange}
             />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              defaultValue={''}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="adress">
              Adress
            </label>
            <input
              type="text"
              id="adress"
              className="formFieldInput"
              placeholder="Enter adress of company"
              name="adress"
              defaultValue={''}
              onChange={handleAdressChange}
            />
          </div>    
          <div className="formField">
            <label className="formFieldLabel" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="formFieldInput"
              placeholder="Enter description of company"
              name="description"
              defaultValue={''}
              onChange={handleDescriptionChange}
            />
          </div>         

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
