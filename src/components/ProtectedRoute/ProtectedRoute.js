import React, { useContext, useEffect } from 'react';
import {  Navigate  } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider.js';

// Por ahora funciona ver bien a detalle esta funcionalidad... 
// Cuando cambia la url directamente te devuelve al componente del login para volver a loguarte.

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);

    useEffect(() => {
        console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]); 

    if (!isAuthenticated) {
        console.log("Not authenticated, redirecting to login");
        return <Navigate to="/login" replace />;
    }; 
    console.log("Authenticated, rendering protected component");

    return children;
};

export default ProtectedRoute;