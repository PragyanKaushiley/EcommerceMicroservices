import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet, } from "react-router-dom";

const IsUserLoggedIn = (callback: any) => {
    let isUserLoggedIn = false
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined' || userToken === '') {
        isUserLoggedIn = false;
    } else isUserLoggedIn = true;

    callback(isUserLoggedIn);
}

const AddUserToken = (userData: any, callback: any) => {
    localStorage.setItem('user-token', JSON.stringify(userData));
    callback();
}

const RemoveUserToken = (callback: any) => {
    localStorage.setItem('user-token', '');
    callback();
}

export { AddUserToken, RemoveUserToken, IsUserLoggedIn };
