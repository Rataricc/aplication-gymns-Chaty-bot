import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function UserAgregate() {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    birthdate: "",
  });
  const endpoint = "http://localhost:4001/api/user";

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gymId = localStorage.getItem("gymId"); // Obtener el gymId del localStorage

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          gym_id: gymId, // Usar gym_id para que coincida con el backend
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("User added successfully!");
        setFormData({
          name: "",
          last_name: "",
          email: "",
          phone: "",
          birthdate: "",
        });
      } else {
        setMessage(data.message || "User addition failed");
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <center>
      <section className="content-header">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link to="#" className="h1">
                <b>Chaty</b>Bot
              </Link>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new user</p>
              {message && <p>{message}</p>}
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
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
                    placeholder="Last name"
                    name="last_name"
                    value={formData.last_name}
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
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-calendar" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </center>
  );
}; 