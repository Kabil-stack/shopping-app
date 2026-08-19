import { Outlet,Navigate } from "react-router-dom"
import { useDetails } from "../../contexts/DetailsContext"
const ProtectedRoutes = ()=>{
    const {isLogged} = useDetails()
    
    return isLogged ? <Outlet /> : <Navigate to="/login"/>
}

export default ProtectedRoutes
