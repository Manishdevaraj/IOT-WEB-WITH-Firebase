import PropType from "prop-types"
import { useUsercontext } from "../Context/UseUsercontext"
import { Navigate, useLocation } from "react-router-dom"
function ProtectedRoute({children}) {
    const {user}=useUsercontext()
    const location=useLocation();
    if (location.pathname === '/auth') {
        return children;
      }
  return user?(
    children
  ): <Navigate to={"/auth"}/>
}


ProtectedRoute.propTypes=
{
    children:PropType.node.isRequired
}
export default ProtectedRoute