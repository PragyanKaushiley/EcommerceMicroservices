import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/authContext";

export const ProtectedRoute = ({ children }) => {
    debugger;
    const user = useAuth();

    if (!user) {
        // user is not authenticated
        // return <Navigate to="/" />;
        alert("/")
    }
    return children;
};