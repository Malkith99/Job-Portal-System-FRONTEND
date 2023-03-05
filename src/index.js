import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <ToastContainer />
    </React.StrictMode>
);