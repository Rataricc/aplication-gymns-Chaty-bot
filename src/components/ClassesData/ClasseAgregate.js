import React, { useState } from "react";

export default function ClasseAgregate() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_time: "",
    end_time: ""
  });
  const endpoint = "http://localhost:4001/api/classes";

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gymId = localStorage.getItem("gymId");

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
        setMessage("Classe added successfully!");
        setFormData({
          name: "",
          description: "",
          start_time: "",
          end_time: ""
        });
      } else {
        setMessage(data.message || "Classe addition failed");
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
              <a href="#" className="h1">
                <b>Chaty</b>Bot
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new Classe</p>
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
                    placeholder="Description"
                    name="description"
                    value={formData.description}
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
                    type="date"
                    className="form-control"
                    placeholder="Date init"
                    name="date"
                    value={formData.start_time}
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
                    type="date"
                    className="form-control"
                    placeholder="Date finish"
                    name="date"
                    value={formData.end_time}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone" />
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
}
