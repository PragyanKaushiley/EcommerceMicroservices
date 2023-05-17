import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet, } from "react-router-dom";
import { AddUserToken, IsUserLoggedIn } from '../../Hooks/Auth'

//#region Util
import AlertTag from '../../Utils/Alert'
import Loader from '../../Utils/Loader';
//


const Login = (props: any) => {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({ userName: '', password: '', rememberMe: false });

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        var loggedStatus = props.commonUtil.checkLoggedStatus();

    }, [])

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.commonUtil.handleIsLoading(true);

        props.commonUtil.handleLoggedStatus(true, userData, (res: boolean) => {
            if (res) {
                props.commonUtil.handleIsLoading(false);
                navigate('/')
            }
        });
    }

    const changeHandler = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <>
            {
                isLoading ?
                    <Loader />
                    :
                    isUserLoggedIn ?
                        <></>
                        :
                        <Container className="p-3 d-flex flex-column w-50">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Email address </Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" id="userName"
                                        name="userName" value={userData.userName} onChange={changeHandler} />
                                </Form.Group >
                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="Password" placeholder="Password" id="password"
                                        name="password" aria-describedby="passwordHelpBlock"
                                        value={userData.password} onChange={changeHandler} />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-20 characters long, contain letters and numbers,
                                        and must not contain spaces, special characters, or emoji.
                                    </Form.Text>
                                </Form.Group >
                                <Form.Group className="mb-4 d-flex justify-content-between">
                                    <Form.Check type="checkbox" label="Remember me" id="rememberMe"
                                        name="rememberMe" checked={userData.rememberMe} onChange={changeHandler} />
                                    <Button variant="link" >Forgot password?</Button>
                                </Form.Group >
                                <div className="d-grid gap-2">
                                    <Button className="mb-4" size="lg" type="submit">Sign in</Button>
                                </div>
                                <div className="text-center">
                                    <p>Not a member? <a href="/Signup">Register</a></p>
                                </div>
                            </Form>
                        </Container>
            }
        </>
    )
}

export default Login