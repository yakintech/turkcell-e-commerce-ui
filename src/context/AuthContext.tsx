import { createContext, useEffect, useState } from "react"
import { axiosInstance } from "../config/axiosInstance"


export const AuthContext = createContext<AuthContextType | null>(null)


export const AuthProvider = ({children}: any) => {

    const [isLogin, setisLogin] = useState(false)
    const [loading, setloading] = useState(true)


    useEffect(() => {
      
        axiosInstance.get('/check',{withCredentials: true})
        .then(res => {
            setisLogin(true)
            setloading(false)
        })
        .catch(err => {
            setisLogin(false)
            setloading(false)
        })

    }, [])
    

    const login = () => {
        setisLogin(true)
        setloading(false)
    }

    const logout = () => {
        setisLogin(false)
        setloading(false)
    }

    return <AuthContext.Provider value={{isLogin, login,logout, loading}}>{children}</AuthContext.Provider>

}



export type AuthContextType = {
    isLogin: boolean,
    login: () => void,
    logout: () => void,
    loading: boolean
}