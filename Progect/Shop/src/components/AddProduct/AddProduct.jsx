import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Login/Sing/auth'
import { useState } from 'react'

export const AddProduct = () => {

    const [product, setProduct] = useState({name: '',
      wholesalePrice: 0, 
      retailPrice: 0, 
      description: '',
      categoryId: 1,
      statusesofproductId: 1, 
      sellerId: 0,
      image: 'Top.png',
      id: 0});
    const auth = useAuth()
    const navigate = useNavigate()

  function handleNameChange(e) {
    product.name = e.target.value;
  }

  function handleWholesalePriceChange(e) {
    product.wholesalePrice = e.target.value;
  }

  function handleRetailPriceChange(e) {
    product.retailPrice = e.target.value;
  }

  function handleDescriptionChange(e) {
    product.description = e.target.value;
  }

  function handleImageChange(e) {
    product.image = e.target.value;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product)
    
    axios.get(`http://localhost:3307/addproduct/${product.name}`)
    .then( function (response) {
      if(response.data == null){
        product.sellerId = auth.seller.id;
        axios.post(`http://localhost:3307/products/`, {product}).then(function (resp){
          product.id = resp.data.id;
        })
        navigate('/myproducts')
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
              Name of product
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter name of product"
              name="name"
              defaultValue={''}
              onChange={handleNameChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="price">
            Wholesale Price
            </label>
            <input
              type="price"
              id="price"
              className="formFieldInput"
              placeholder="Enter wholesale price"
              name="price"
              defaultValue={''}
              onChange={handleWholesalePriceChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="price">
                Retail Price
            </label>
            <input
              type="price"
              id="price"
              className="formFieldInput"
              placeholder="Enter retail Price"
              name="price"
              defaultValue={''}
              onChange={handleRetailPriceChange}
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
            <button className="formFieldButton">Add product</button>{" "}
          </div>
        </form>
      </div>
    );
  }
