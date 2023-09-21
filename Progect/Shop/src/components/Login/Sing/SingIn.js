import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from './auth'
import { useState } from 'react'

export const SingIn = () => {

  const [seller, setseller] = useState({phoneNumber: '',
  nameOfCompany: '', 
  adress: '', 
  password: '',
  description: '',
  id: 0});
  const auth = useAuth()
  const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));
  const navigate = useNavigate()

  function handlePasswordChange(e) {
    seller.password = e.target.value;
  }

  function handleNameOfCompanyChange(e) {
    seller.nameOfCompany = e.target.value;
  }

  function handlePhoneNumberChange(e) {
    seller.phoneNumber = e.target.value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:3307/authSeller/${seller.phoneNumber}`)
    .then( function (response) {
      sleep(50).then(() => {
      console.log(response);
      if(response.data != null && response.data.Password == seller.password){
        console.log(response.data)
        seller.adress = response.data.Adress
        seller.description = response.data.Description
        seller.id = response.data.id
        auth.login(seller)
        navigate('/')
      }
    })}).catch(function (error) {
      console.log(error);
    })
  }

    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="NameOfCompany">
              Name Of Company
            </label>
            <input
              type="text"
              id="NameOfCompany"
              className="formFieldInput"
              placeholder="Enter name of company"
              name="NameOfCompany"
              defaultValue={''}
              onChange={handleNameOfCompanyChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="phoneNumber">
            Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="formFieldInput"
              placeholder="Enter your password"
              name="phoneNumber"
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
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/profile" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
}


