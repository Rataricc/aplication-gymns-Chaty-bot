import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Error404 from './pages/Error/Error404.jsx';
import Register from './pages/Register/Register.jsx';
import ForgotPassword from './pages/Login/Forgot-password.jsx';
import RecoverPassword from './pages/Login/Recover-paswword.jsx';
import HomePage from './pages/Home.jsx';

import Home from './Home.js';
import { AuthProvider } from './components/AuthProvider/AuthProvider.js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.js';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path='/' Component={HomePage} />
                    <Route exact path="/login" Component={Login} />
                    <Route exact path="/register" Component={Register} />
                    <Route exatc path='/forgot-password' Component={ForgotPassword} />
                    <Route exact path='/recover-password' Component={RecoverPassword} />
                    <Route exact path='*' Component={Error404} />

                    <Route exact path="/content/*" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
                    {/*<Route exact path="/content" Component={Home} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;