import {useState, useContext, createContext} from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [seller, setSeller] = useState(null)

    const login = (seller) => {
        setSeller(seller)
    }

    const logout = () =>{
        setSeller(null)
    }

    return (
        <AuthContext.Provider value={{seller, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
