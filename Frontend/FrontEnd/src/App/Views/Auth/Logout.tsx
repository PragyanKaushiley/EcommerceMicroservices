import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet, } from "react-router-dom";
import { RemoveUserToken } from '../../Hooks/Auth'

const Logout = (props: any) => {
    let navigate = useNavigate();

    useEffect(() => {
        props.commonUtil.handleLoggedStatus(false, {}, (res: boolean) => {
            if (!res) {
                navigate('/Login')
            }
        });
    });

    return (
        <></>
    )
}

export default Logout;