import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider.js';
import { Link } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    //Estado provisorio hasta ver a profunidad que es lo que esta pasando; 
    const { isAuthenticated, login } = useContext(AuthContext);
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/content');
        }
    }, [isAuthenticated, navigate]);

    //---------------------------------------------------------------------------
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4001/api/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful!');
                console.log("Login successful, setting token and gymName in context");
                login(data.token, data.gymName, data.gymId);
                //localStorage.setItem('token', data.token);
                //localStorage.setItem('gymName', data.gymName);
                // You can redirect the user to a protected page here
                navigate('/content');
            } else {
                setMessage(data.message || 'Login failed');
            }
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        }
    };

    return (
        <>
            <br></br> <br></br>
            <center>
                <section className="content-header">
                    <div className="login-box">
                        <div className="card card-outline card-primary">
                            <div className="card-header text-center">
                                <Link to="https://chaty-gyms.netlify.app" className="h1"><b>Chaty</b>Bot</Link>
                            </div>
                            <div className="card-body">
                                <p className="login-box-msg">Sign in to start your session</p>
                                {message && <p>{message}</p>}
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input type="checkbox" id="remember" />
                                                <label htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="social-auth-links text-center mt-2 mb-3">
                                    <Link to="#" className="btn btn-block btn-primary">
                                        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                    </Link>
                                    <Link to="#" className="btn btn-block btn-danger">
                                        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                    </Link>
                                </div>
                                <p className="mb-1">
                                    <Link to="http://localhost:3000/forgot-password">I forgot my password</Link>
                                </p>
                                <p className="mb-0">
                                    <Link to="http://localhost:3000/register" className="text-center">Register a new membership</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </center>
        </>
    );
}
