import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        confirmPassword: '',
        image: null  // Añadimos un campo para la imagen
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleImageRemove = () => {
        setFormData({ ...formData, image: null });
        setPreviewImage(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFormData({ ...formData, image: file });
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('username', formData.username);
            data.append('email', formData.email);
            data.append('address', formData.address);
            data.append('phone', formData.phone);
            data.append('password', formData.password);
            data.append('image', formData.image); // Añadimos la imagen al FormData

            const response = await fetch('http://localhost:4001/api/signUp', {
                method: 'POST',
                body: data
            });

            const result = await response.json();
            console.log("Esto es data: ", result);

            if (response.ok) {
                setMessage('Registration successful!');
                // Puedes redirigir al usuario a la página de login u otra página aquí
            } else {
                setMessage(result.message || 'Registration failed');
            }
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        }
    };

    return (
        <>
            <br></br>
            <center>
                <div className="register-box">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <Link to="https://chaty-gyms.netlify.app" className="h1"><b>Chaty</b>Bot</Link>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            {message && <p>{message}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
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
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                        name="address"
                                        value={formData.address}
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
                                        type="phone"
                                        className="form-control"
                                        placeholder="Phone"
                                        name="phone"
                                        value={formData.phone}
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
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Retype password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="input-group mb-3"
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleImageChange}
                                        required
                                    />
                                </div>
                                {previewImage && (
                                    <div className="mb-3">
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                border: '2px solid #007bff'
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm mt-2"
                                            onClick={handleImageRemove}
                                        >
                                            Remove Image
                                        </button>
                                    </div>
                                )}
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <Link to="#">terms</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    </div>
                                </div>
                            </form>
                            <div className="social-auth-links text-center">
                                <Link to="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" />
                                    Sign up using Facebook
                                </Link>
                                <Link to="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" />
                                    Sign up using Google+
                                </Link>
                            </div>
                            <Link to="http://localhost:3000/login" className="text-center">I already have a membership</Link>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}; 