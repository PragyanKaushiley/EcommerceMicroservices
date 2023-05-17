import React, { useEffect, useState, useCallback } from "react";
import { Route, useNavigate } from "react-router-dom";

type UserData = {
    userName: string,
    password: string,
    rememberMe: boolean
}

const ProtectedRoute = (props: any) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined' || userToken === '') {
            setIsLoggedIn(false);
        } else setIsLoggedIn(true);

        if (props.reRoute != 'undefined')
            return navigate(props.reRoute);
        else return isLoggedIn;
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;