import React, { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

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
                localStorage.setItem('token', data.token);
                // You can redirect the user to a protected page here
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
                                <a href="#" className="h1"><b>Chaty</b>Bot</a>
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
                                    <a href="#" className="btn btn-block btn-primary">
                                        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                    </a>
                                    <a href="#" className="btn btn-block btn-danger">
                                        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                    </a>
                                </div>
                                <p className="mb-1">
                                    <a href="http://localhost:3000/forgot-password">I forgot my password</a>
                                </p>
                                <p className="mb-0">
                                    <a href="http://localhost:3000/register" className="text-center">Register a new membership</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </center>
        </>
    );
}
