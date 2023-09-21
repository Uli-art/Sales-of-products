import React from 'react';
import "./Profile.module.css";
import { useAuth } from '../Login/Sing/auth';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';


const Profile = (props) => {
  const auth = useAuth();
  const navigate = useNavigate()

  function Logout() {
    auth.logout()
    navigate('/')
  }
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
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

  return(<MDBRow>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  
                <div className="d-flex justify-content-center mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
            <Button className="button" onClick={Logout}>LogOut</Button>
            </MDBCol>
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name of company</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{auth.seller.nameOfCompany}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{auth.seller.phoneNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Adress</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{auth.seller.adress}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Description</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{auth.seller.description}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>    
)
}
export default Profile