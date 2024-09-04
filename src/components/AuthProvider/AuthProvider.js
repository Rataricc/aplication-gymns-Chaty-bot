import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// Por ahora funciona ver bien a detalle esta funcionalidad... 
// Cuando cambia la url directamente te devuelve al componente del login para volver a loguarte.
export const AuthContext = createContext();


//Se modifico este archivo agregando la img de perfil del gym. Para ver si funciona.
export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [gymName, setGymName] = useState('');
    const [gymId, setGymId] = useState('');
    const [gymImage, setGymImage] = useState('');

    useEffect(() => {
        console.log('AuthProvider useEffect triggered');
        const token = localStorage.getItem('token');
        const storedGymName = localStorage.getItem('gymName');
        const storedGymId = localStorage.getItem('gymId');
        const storedGymImage = localStorage.getItem('gymImage');

        console.log("Token from localStorage:", token);
        console.log("GymName from localStorage:", storedGymName);
        console.log("Gym Id: ", storedGymId);
        console.log("Gym Image:", storedGymImage);

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                console.log("Decoded Token:", decodedToken);
                console.log("Current Time:", currentTime);
                console.log("Token Expiration Time:", decodedToken.exp);

                if (decodedToken.exp > currentTime) {
                    setIsAuthenticated(true);
                    setGymName(storedGymName);
                    setGymId(storedGymId); 
                    setGymImage(storedGymImage || '');
                    console.log("Token is valid, user is authenticated"); 
                } else {
                    console.log("Token is expired, removing from localStorage");
                    localStorage.removeItem('token');
                    localStorage.removeItem('gymName');
                    localStorage.removeItem('gymId');
                    localStorage.removeItem('gymImage');
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Invalid token, error:", error);
                console.error("Invalid token");
                localStorage.removeItem('token');
                localStorage.removeItem('gymName');
                localStorage.removeItem('gymId');
                localStorage.removeItem('gymImage');
                setIsAuthenticated(false);
            };
        } else {
            setIsAuthenticated(false); 
        };
    }, []);

    const login = (token, gymName, gymId, gymImage) => {
        console.log('Login successful, setting token and gymName in context');
        localStorage.setItem('token', token);
        localStorage.setItem('gymName', gymName);
        localStorage.setItem('gymId', gymId);
        localStorage.setItem('gymImage', gymImage);
        setIsAuthenticated(true); 
        setGymName(gymName);
        setGymId(gymId); 
        setGymImage(gymImage);
        console.log("User logged in, token, gymName, and gymId, gymImage set in localStorage");
    };

    const logout = () => {
        console.log('Logging out, clearing token and gymName from context and localStorage');
        localStorage.removeItem('token');
        localStorage.removeItem('gymName');
        localStorage.removeItem('gymId');
        localStorage.removeItem('gymImage');
        setIsAuthenticated(false);
        setGymName('');
        setGymId('');
        setGymImage('');
        console.log('User logged out');
        console.log("User logged out, token and gymName removed from localStorage");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, gymId, gymName, gymImage, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 