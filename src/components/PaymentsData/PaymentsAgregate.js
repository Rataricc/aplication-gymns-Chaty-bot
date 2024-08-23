import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function PaymentAggregate() {
    const [formData, setFormData] = useState({
        amount: "",
        payment_date: "",
        user_id: "",
        membership_id: "",
    });

    const [users, setUsers] = useState([]);
    const [memberships, setMemberships] = useState([]);
    const [message, setMessage] = useState("");
    const endpointPayments = "http://localhost:4001/api/payment";

    useEffect(() => {
        const gymId = localStorage.getItem("gymId");
        const endpointUser = `http://localhost:4001/api/gymns/${gymId}/users`;
        const endpointMembership = `http://localhost:4001/api/gymns/${gymId}/memberships`;

        const fetchUsers = async () => {
            try {
                const response = await fetch(endpointUser);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        const fetchMemberships = async () => {
            try {
                const response = await fetch(endpointMembership);
                const data = await response.json();
                setMemberships(data);
            } catch (error) {
                console.error("Error fetching memberships:", error);
            }; 
        };

        fetchUsers();
        fetchMemberships();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const gymId = localStorage.getItem("gymId");

        try {
            const response = await fetch(endpointPayments, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    gym_id: gymId,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Payment added successfully!");
                setFormData({
                    amount: "",
                    payment_date: "",
                    user_id: "",
                    membership_id: "",
                });
            } else {
                setMessage(data.message || "Payment addition failed");
            }; 
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }; 
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
                            <p className="login-box-msg">Register a new Payment</p>
                            {message && <p>{message}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-dollar-sign" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Payment Date"
                                        name="payment_date"
                                        value={formData.payment_date}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-calendar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-control"
                                        name="user_id"
                                        value={formData.user_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select User</option>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>
                                                {user.name} {user.last_name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-control"
                                        name="membership_id"
                                        value={formData.membership_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Membership</option>
                                        {memberships.map((membership) => (
                                            <option key={membership.id} value={membership.id}>
                                                {membership.type} - {membership.price}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-id-card" />
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