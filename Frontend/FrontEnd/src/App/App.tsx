import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import localforage from "localforage";
import CryptoJS from 'crypto-js';

import { Key } from './Store/Keys'
import './App.css';

import RouterComponent from './Views/Routes/Routes'

import Header from './Views/Shared/Header';
import Footer from './Views/Shared/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    var status = checkLoggedStatus()
      .then((res) => {
        setIsLoggedIn(res.isLoggedIn);
      });
  }, [setIsLoggedIn])

  const handleLoggedStatus = (loggedInFlag: boolean, userData: any = {}, callBack: CallableFunction) => {
    if (loggedInFlag) {
      let encryptData = CryptoJS.AES.encrypt(JSON.stringify(userData), Key.secretPass).toString();
      localforage.setItem("user-token", encryptData)
    } else {
      localforage.setItem("user-token", "")
    }
    setIsLoggedIn(loggedInFlag)
    callBack(loggedInFlag);
  };

  const checkLoggedStatus = async () => {
    const Response = {
      isLoggedIn: false,
      userData: {}
    }

    const userToken = await localforage.getItem('user-token') || '';
    if (userToken && userToken != "") {
      const decrypted = CryptoJS.AES.decrypt(userToken.toString(), Key.secretPass);
      if (decrypted) {
        const str = decrypted.toString(CryptoJS.enc.Utf8);
        Response.isLoggedIn = true;
        Response.userData = JSON.parse(str);
      } else Response.isLoggedIn = false;
    } else Response.isLoggedIn = false;

    return Response;
  }

  const authUtil = { isLoggedIn, handleLoggedStatus, checkLoggedStatus }

  return (
    <>
      {isLoggedIn ? <Header /> : <></>}
      <div className="app">
        <BrowserRouter>
          <RouterComponent commonUtil={authUtil} />
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
