import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  import { useAuth } from '../Login/Sing/auth'
  import { useNavigate } from "react-router-dom";
  import { useState, useEffect } from 'react';
  import {StatisticsItem} from './StatisticsItem/StatisticsItem';
  import axios from "axios";
  
export const Statistics = () => {
    const auth = useAuth()
  
    const [appState, setAppState] = useState([])
    const [order, setOrder] = useState({productId: 0, userId: 0, statusesOforder: 1, date: ''})
    const navigate = useNavigate()
    const [arrayOfCards, setArrayOfCards] = useState([])
    const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));
  
    useEffect(() => {
          axios.get(`http://localhost:3307/getorder/${auth.seller.id}`)
          .then( function (response) {
            if(response.data != null){
                let allProducts = [];
                let arrayOfData = response.data
                setArrayOfCards(arrayOfData)
                console.log(arrayOfData.length)
                for(let i = 0; i < arrayOfData.length; ++i ){
                    axios.get(`http://localhost:3307/products/${arrayOfData[i].productId}`)
                    .then( function (resp) {
                    if(resp.data != null){
                        allProducts.push(resp.data[0])
                        console.log(allProducts)
                        sleep(100).then(() => {
                            setAppState(allProducts);});
                    }});
                }
          }});
    }, []);
  
  
    return (
      <>
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Your Orders,{" "}
                      <span style={{ color: "#a8729a" }}>{auth.seller.nameOfCompany}</span>!
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
  
                    <div>{appState.map((product) => {return(
                              <StatisticsItem  key={product.id} id={product.id} nameOfProduct={product.Name} retailPrice={product.RetailPrice} img={product.Image} description={product.Description} statusesoforder={product.statusesofproductId}/>  
                              ) })}</div>  
  
  
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#a8729a",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      Income: <span className="h2 mb-0 ms-2">${appState.map((product) => 
                              product.RetailPrice).reduce((prev, curr)=>Number(prev) + Number(curr), 0) - appState.map((product) => 
                              product.WholesalePrice).reduce((prev, curr)=>Number(prev) + Number(curr), 0)
                          }</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  }
  