import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
    
    const {user,loading} = useAuth();

    if (loading) return <div>loading ...</div>
    if (!user) return <Navigate to="/admin/login" />
    return <>{children}</>
}

export default ProtectedRoute