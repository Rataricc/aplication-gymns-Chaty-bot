import React, { useState, useEffect } from "react";

export default function MembershipAggregate() {
	const [formData, setFormData] = useState({
		type: "",
		price: "",
		start_time: "",
		end_time: "",
		user_id: "",
	});

	const [users, setUsers] = useState([]);
	const [message, setMessage] = useState("");
	const endpointGym = "http://localhost:4001/api/membership";
	//const endpointUser = "http://localhost:4001/api/users"; 

	useEffect(() => {
		const gymId = localStorage.getItem("gymId"); 
		const endpointUser = `http://localhost:4001/api/gymns/${gymId}/users`;
		// Fetch users when the component mounts
		const fetchUsers = async () => {
			try {
				const response = await fetch(endpointUser);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchUsers();
	}, []);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const gymId = localStorage.getItem("gymId");

		try {
			const response = await fetch(endpointGym, {
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
				setMessage("Membership added successfully!");
				setFormData({
					type: "",
					price: "",
					start_time: "",
					end_time: "",
					user_id: "",
				});
			} else {
				setMessage(data.message || "Membership addition failed");
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
							<p className="login-box-msg">Register a new Membership</p>
							{message && <p>{message}</p>}
							<form onSubmit={handleSubmit}>
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Type"
										name="type"
										value={formData.type}
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
										type="number"
										className="form-control"
										placeholder="Price"
										name="price"
										value={formData.price}
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
										placeholder="Start Date"
										name="start_time"
										value={formData.start_time}
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
									<input
										type="date"
										className="form-control"
										placeholder="End Date"
										name="end_time"
										value={formData.end_time}
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
