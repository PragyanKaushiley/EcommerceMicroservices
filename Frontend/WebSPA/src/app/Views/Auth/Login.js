import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet, } from "react-router-dom";
import CryptoJS from 'crypto-js';
import useAuth from "../../Hooks/authContext";

//#region Util
import AlertTag from '../../Utils/Alert/_alerts'
import Loader from '../../Utils/Loader/_loader';
const { Key } = require('../../Store/Keys');
//#endregion Util

export default function Login() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememberCheck, setRememberCheck] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        debugger;
        setIsLoading(true);

        try {
            var isAuth = auth;
            if (isAuth) {
                setIsLoading(false);
                setHasError(false)
                navigate("/");
            } else {
                setIsLoading(false);
                setHasError(false)
            }
        } catch (err) {
            console.log(err);
        }

    }, [setIsAuthenticated])

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger
        try {
            auth.login(JSON.stringify({
                userName: userName,
                rememberCheck: rememberCheck
            }))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {
                isLoading ?
                    <Loader />
                    :
                    hasError ?
                        <AlertTag dismissible={false} type={"danger"} heading={"Oh snap!"} Desc={"You encountered an error. Please try again!"} />
                        :
                        isAuthenticated ?
                            <></>
                            :
                            <Container className="p-3 d-flex flex-column w-50">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Email address </Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" id="Email"
                                            value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    </Form.Group >
                                    <Form.Group className="mb-4">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="Password" placeholder="Password" id="Password" aria-describedby="passwordHelpBlock"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <Form.Text id="passwordHelpBlock" muted>
                                            Your password must be 8-20 characters long, contain letters and numbers,
                                            and must not contain spaces, special characters, or emoji.
                                        </Form.Text>
                                    </Form.Group >
                                    <Form.Group className="mb-4 d-flex justify-content-between">
                                        <Form.Check type="checkbox" label="Remember me" id="rememberCheck"
                                            checked={rememberCheck} onChange={(e) => setRememberCheck(e.target.checked)} />
                                        <Button variant="link" >Forgot password?</Button>
                                    </Form.Group >
                                    <div className="d-grid gap-2">
                                        <Button className="mb-4" size="lg" type="submit">Sign in</Button>
                                    </div>
                                    <div className="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
                                    </div>
                                </Form>
                            </Container>
            }
        </>

    )
}