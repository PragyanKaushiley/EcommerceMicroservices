import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

// Importing the Bootstrap CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//CSS

//Shared 
import Header from './app/Shared/Header/_header';
import Footer from './app/Shared/Footer/_footer';
import router from './app/Views/Routes/Routes';

import reportWebVitals from './reportWebVitals';
//Shared 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header></Header>
    <div className='app'>
      <RouterProvider router={router} />
    </div>
    <Footer></Footer>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
