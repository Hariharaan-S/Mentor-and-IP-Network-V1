import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(UserContext);

    // If the user is not logged in, redirect to the login page
    if (!currentUser) {
        return <Navigate to="/auth/login" />;
    }

    // If the user is logged in, render the children
    return children;
};

export default ProtectedRoute;
