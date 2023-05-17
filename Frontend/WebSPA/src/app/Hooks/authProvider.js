import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import CryptoJS from 'crypto-js';

const AuthContext = createContext();
const { Key } = require('../Store/Keys');

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("loggedUser", null);
    const navigate = useNavigate();

    const encryptAES = (text, key) => {
        return CryptoJS.AES.encrypt(text, key).toString();
    };

    const decryptAES = (encryptedBase64, key) => {
        const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
        if (decrypted) {
            try {
                const str = decrypted.toString(CryptoJS.enc.Utf8);
                if (str.length > 0) {
                    return str;
                } else {
                    return '';
                }
            } catch (e) {
                return '';
            }
        }
        return '';
    };

    // call this function when you want to authenticate the user
    const isAuthenticated = () => {
        debugger;
        if (user) {
            var userData = decryptAES(user, Key.secretPass);
            return userData
        } else return false
    }

    // call this function when you want to authenticate the user
    const login = async (newUser) => {
        debugger;
        var encryptedData = encryptAES(JSON.stringify(newUser))
        setUser(encryptedData);
        navigate("/profile");
    };

    const logout = () => {
        debugger;
        setUser(null);
        navigate("/", { replace: true });
    };

    let value = { user, isAuthenticated, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export { AuthProvider };

export default AuthContext;

