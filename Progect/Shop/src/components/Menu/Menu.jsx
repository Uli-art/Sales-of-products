import React from 'react';
import {ProductElement}  from './ProductElemets/ProductElement';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuth } from '../Login/Sing/auth'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
const Menu = () =>{
  const [appState, setAppState] = useState([])
  const auth = useAuth()
  const navigate = useNavigate()
  const Button = styled.button`
  margin-bottom: 50px;
  background-color: #ba5697;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);`;

  const GetAllProducts = () => {
    axios.get(`http://localhost:3307/products`)
    .then( function (response) {
      let productsBySeller = [];
      let allProducts = response.data
      if(response.data != null){
        for(let i = 0; i < allProducts.length; ++i){
            if(allProducts[i].sellerId == auth.seller.id){
              productsBySeller.push(allProducts[i])
              setAppState(productsBySeller);
            }
        }
    }});
  }

  function NavigateToAddProduct(){
    navigate("/addproduct")
  }

 useEffect(() => {
  GetAllProducts();
  }, []);


  console.log(appState)
  
    return(
      <><div class="row row-cols-4 g-4">{appState.map((product) => {
            return (
              <ProductElement key={product.id} id={product.id} name={product.Name} price={product.RetailPrice} img={product.Image}/>
            )
          })}
          </div>  <br/><br/>
          <Button onClick={NavigateToAddProduct}>Add product </Button></>
    )
}

export default Menu;
