import {
    MDBBtn,
    MDBCardImage,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import {useAuth } from '../Login/Sing/auth'
import { useState } from 'react'

export function CardItem(props) {
    const [cardParams, setCardParams] = useState({productId: 0, userId: 0});
    const auth = useAuth();
    const DeleteItem = (e) => {
        e.preventDefault();
        
        cardParams.productId = props.id;
        cardParams.userId = auth.user.id
        console.log(cardParams.productId)
        console.log(cardParams)
        axios.get(`http://localhost:3307/cards/`, {cardParams}).then(function (resp){
            let id = resp.id
            axios.delete(`http://localhost:3307/cards/`+ {id})
        })
    }
    
    return (
        <><hr className="my-4" />
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                    src={require('../Menu/ProductElemets/Images/'+props.img)}
                    fluid className="rounded-3" alt="Cotton T-shirt" />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                    {props.name}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                    {props.description}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                <IconButton onClick={DeleteItem}>
                    <DeleteIcon/>
                </IconButton>
            </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="text-end">
                    <MDBTypography tag="h6" className="mb-0">
                        {props.price}$
                    </MDBTypography>
            </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-muted">
                        <MDBIcon fas icon="times" />
                    </a>
                </MDBCol>
            </MDBRow></>         
    );
}