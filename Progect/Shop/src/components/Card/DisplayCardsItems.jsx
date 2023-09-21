
// import React from "react";
// import { useState, useEffect } from 'react';
// import {CardItem} from './CardItem';
// import axios from "axios";
// import { useAuth } from '../Login/Sing/auth';

// export function CardsItems() {
//     const auth = useAuth();
//     const [appState, setAppState] = useState([])

//     const GetAllProductsInCard = () => {
//       axios.get(`http://localhost:3307/cards/${auth.user.id}`)
//       .then( function (response) {
//         if(response.data != null){
//           let allProducts = [];
//             for(let i = 0; i < response.data.length; ++i ){
//                 axios.get(`http://localhost:3307/products/${response.data[i].productId}`)
//                 .then( function (resp) {
//                 if(resp.data != null){
//                     console.log(resp.data)
//                     allProducts.push(resp.data[0])
//                     console.log(allProducts)
//           }});
//         }
//         console.log(allProducts)
//         setAppState(allProducts);
//       }});
//     }
  
//    useEffect(() => {
//     GetAllProductsInCard();
//     }, []);
    
//     return (
//         <>{appState.map((product) => {
//             return (
//                 <div key={product.id}><hr className="my-4" />
//                 <CardItem name={product.Name} price={product.RetailPrice} img={product.Image} description={product.Description}/>{alert("Display")}</div>
//             )
//         })}</>  
//     );
// }