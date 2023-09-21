import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/State'



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
    <App state = {state}  />
    </BrowserRouter>
);


reportWebVitals();
