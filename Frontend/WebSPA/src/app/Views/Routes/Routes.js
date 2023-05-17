import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from './ProtectedRoute'

//Not Auth
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Catalog from '../Catalog/Catalog';
import Detail from '../Catalog/Detail';
//Auth
import Basket from '../Catalog/Basket';
import Payment from '../Catalog/Payment';
//shared
import ErrorPage from "../../Shared/Error/Error";

export default createBrowserRouter([
    {
        path: "/Login", element:
            <ProtectedRoute><Login /></ProtectedRoute>,
        errorElement: <ErrorPage />
    },
    { path: "/Signup", element: <Signup />, errorElement: <ErrorPage /> },
    { path: "/", element: <Catalog />, errorElement: <ErrorPage /> },
    { path: "/Details/:ProductId", element: <Detail />, errorElement: <ErrorPage /> },
    {
        path: "/Payment", element:
            <ProtectedRoute><Payment /></ProtectedRoute>,
        errorElement: <ErrorPage />
    },
    {
        path: "/Basket/:userName", element:
            <ProtectedRoute><Basket /></ProtectedRoute>,
        errorElement: <ErrorPage />
    },
]);