import React from "react";
import logo from "../assets/logo.png"
import {connect} from 'react-redux'
import {setLoginValues, login} from '../actions/loginActions'
const Login = (props) => {
	const {username, password} = props
	const handleSubmit = (e) => {
		e.preventDefault();
		props.login(username, password, props.history);
	};

	const handleChange = (e) =>{
		const {value, name} = e.target
		props.setLoginValues(value, name)
		}

	return (
		<>
		<img src={logo} alt=""/>
		<h2> Please Login</h2>
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={username}
					onChange={handleChange}
				/>
			</label>
			<label>
				password:
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
			</label>
			<br/>
			<button>Login</button>
		</form>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		username:state.login.username,
		password:state.login.password
	}
}
export default connect(mapStateToProps, {setLoginValues, login})(Login);
