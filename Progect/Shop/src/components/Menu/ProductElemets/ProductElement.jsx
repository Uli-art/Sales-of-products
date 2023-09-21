import React from 'react';
import s from './ProductElement.module.css'
import styled from '@emotion/styled';
import { useAuth } from '../../Login/Sing/auth'
import { useState } from 'react'
import axios from 'axios';

export function  ProductElement(props){
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
  
  const auth = useAuth()
  const [product, setProduct] = useState({userId: 0, productId: 0});
    const DeleteProduct = (e) => {
        e.preventDefault();
        let id = props.id
        console.log(id)
        axios.get(`http://localhost:3307/cards`)
        .then( function (resp) {
            if(resp.data != null){
                for(let i = 0; i < resp.data.length; ++i){
                    if(resp.data[i].ProductId == id){
                        console.log(resp.data[i].id)
                        axios.delete(`http://localhost:3307/cards/${resp.data[i].id}`)
                    }
                }
            }
            axios.get(`http://localhost:3307/orders`)
            .then( function (resp) {
                if(resp.data != null){
                    for(let i = 0; i < resp.data.length; ++i){
                        if(resp.data[i].ProductId == id){
                            axios.delete(`http://localhost:3307/orders/${resp.data[i].id}`)
                        }
                    }
                }
             axios.delete(`http://localhost:3307/products/${id}`)
            });
         });
    }
    return (
        <div class="col"> <div className="card"> 
        <div  className={s.item}><img src={require('./Images/'+props.img)} className="card-img-top" alt="..."/></div>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price} $</p>
            <Button onClick={DeleteProduct}>Delete product</Button>
        </div>
    </div> </div>
    )
}