import { Navigate, Outlet} from "react-router-dom"
import { jwtDecode } from "jwt-decode"


export const PrivateRoutesCliente = () => {
  const token = sessionStorage.getItem("authToken")
  if(!token) return <Navigate to="/login" />

  const decoded = jwtDecode(token) as { role:string, exp:number }

  if(decoded.exp * 1000 < Date.now()) return <Navigate to="/login" />
  if(decoded.role !== "client") return <Navigate to="/" />

  return <Outlet/>
}



// export const PrivateRoutesCliente = () => {
//     const getToken = () => {
//         return sessionStorage.getItem("authToken")
//     }
//     const token = getToken()

//     if(token){
        
//         try{
//             const decodedToken = jwtDecode(token)
//             if(!decodedToken.exp || decodedToken.exp * 1000 < Date.now()){
//                 sessionStorage.removeItem("authToken")
//                 return <Navigate to = "/login" />
//             }
//             return <Outlet />
//         }catch{
//             sessionStorage.removeItem("authToken")
//             return <Navigate to = "/login" />
//         }
//     }

//     else {
//         return <Navigate to = "/login" />
//     }
// }