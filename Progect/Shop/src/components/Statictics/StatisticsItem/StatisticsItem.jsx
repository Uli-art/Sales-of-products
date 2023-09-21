import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
  } from "mdb-react-ui-kit";

export function StatisticsItem (props){

    return (
        <MDBCard className="shadow-0 border mb-4">
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="2">
              <MDBCardImage
                src={require('../../Menu/ProductElemets/Images/'+props.img)}
                fluid
                alt="product"
              />
            </MDBCol>

            <MDBCol
              md="2"
              className="text-center d-flex justify-content-center align-items-center"
            >
              <p className="text-muted mb-0">{props.nameOfProduct}</p>
            </MDBCol>
            <MDBCol
              md="2"
              className="text-center d-flex justify-content-center align-items-center"
            >
              <p className="text-muted mb-0 small">
                {props.description}
              </p>
            </MDBCol>
            <MDBCol md="3"/>
            <MDBCol
              md="2"
              className="text-center d-flex justify-content-center align-items-center"
            >
              <p className="text-muted mb-0 small">${props.retailPrice}</p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    )
}