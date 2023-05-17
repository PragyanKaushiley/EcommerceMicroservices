import { useContext } from "react";
import AuthContext from "./authProvider";
import { useLocalStorage } from "./useLocalStorage";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;