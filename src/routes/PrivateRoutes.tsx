import { Navigate, Outlet} from "react-router-dom"
import { jwtDecode } from "jwt-decode"

export const PrivateRoutes = () => {
    const getToken = () => {
        return sessionStorage.getItem("authToken")
    }
    const token = getToken()

    if(token){
        
        try{
            const decodedToken = jwtDecode(token)
            if(!decodedToken.exp || decodedToken.exp * 1000 < Date.now()){
                sessionStorage.removeItem("authToken")
                return <Navigate to = "/login" />
            }
            return <Outlet />
        }catch{
            sessionStorage.removeItem("authToken")
            return <Navigate to = "/login" />
        }
    }

    else {
        return <Navigate to = "/login" />
    }
}