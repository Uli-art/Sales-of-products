import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
import React from "react";
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import {CardItem} from './CardItem';
import axios from "axios";
import { useAuth } from '../Login/Sing/auth';

export function Card() {

    const Button = styled.button`
    margin-bottom: 40px;
    background-color: #cfa9b4;
    color: white;
    border: none;
    outline: none;
    border-radius: 25px;
    padding: 15px 70px;
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;`;

    const auth = useAuth();
    const [appState, setAppState] = useState([])
    const [cards, setCards] = useState([])
   
  
    useEffect(() => {
        alert("up function")
          axios.get(`http://localhost:3307/cards/${auth.user.id}`)
          .then( function (response) {
            if(response.data != null){
                let allProducts = [];
                let arrayOfData = response.data
                setCards(arrayOfData)
                console.log(arrayOfData.length)
                for(let i = 0; i < arrayOfData.length; ++i ){
                    axios.get(`http://localhost:3307/products/${arrayOfData[i].productId}`)
                    .then( function (resp) {
                    if(resp.data != null){
                        allProducts.push(resp.data[0])
                        console.log(allProducts)
                       
                        alert(allProducts+"inner set")
                        setAppState(allProducts);
                    }});
                }
          }});
        
        alert(appState+"useeffect")
    }, []);
        console.log(appState)

    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        {alert(appState + 'vvv')}
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                      </div>
                    
                        <div>{appState.map((product) => {return(
                            <CardItem  key={product.id} id={product.id} name={product.Name} price={product.RetailPrice} img={product.Image} description={product.Description}/>  
                            ) })}</div>  
                        
                      <hr className="my-4" />
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">{appState.map((product) => 
                            product.RetailPrice).reduce((prev, curr)=>Number(prev) + Number(curr), 0)
                        }$</MDBTypography>
                      </div>
                      <Button block size="lg">
                        Register
                      </Button>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
}
