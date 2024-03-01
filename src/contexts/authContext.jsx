/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { 
    useMemo, 
    useContext, 
    useCallback, 
    createContext 
} from "react"
import Cookies from "js-cookie";

const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

export const AuthContext = createContext({
    login: (authTokens) => {},
    logout: () => {},
});

export default function AuthContextProvider({ children }) {
    const login = useCallback(function (authTokens){
        Cookies.set('AUTH_TOKENS_KEY', JSON.stringify(authTokens));
    }, [])
    
    const logout = useCallback(function (authTokens){
        Cookies.remove('AUTH_TOKENS_KEY');
    }, [])
    
    const value = useMemo(() => ({
            login,
            logout,
    }),[login, logout])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuthContext() {
    return useContext(AuthContext);
}