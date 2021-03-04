import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png"

const Login = (props) => {
	const [credentials, setCredentials] = useState({ username: "", password: "" });

	const login = (e) => {
		e.preventDefault();
		console.log('test')
		axios
			.post(
				"https://tttwentyfour-foundation.herokuapp.com/login",
				`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
				{
					headers: {
						// btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
						"Content-Type": "application/x-www-form-urlencoded",
					},
				},
			)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("token", res.data.access_token);
				props.history.push("/home");
			})
			.catch((err) => {
				console.log(err.response.data.error_description)
			})
	};

	const handleChange = (e) =>
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});

	return (
		<>
		<img src={logo} alt=""/>
		<h2> Please Login</h2>
		<form onSubmit={login}>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={credentials.username}
					onChange={handleChange}
				/>
			</label>
			<label>
				password:
				<input
					type="password"
					name="password"
					value={credentials.password}
					onChange={handleChange}
				/>
			</label>
			<br/>
			<button>Login</button>
		</form>
		</>
	);
};

export default Login;