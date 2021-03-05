import React, {useEffect} from "react";
import logo from "../assets/logo.png"
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {setLoginValues, login, clearLoginForm} from '../actions/loginActions'
import {setHomeError} from '../actions/homePageActions'
const Login = (props) => {
	const {username, password} = props
	const { push } = useHistory();
	useEffect(() => {
		props.clearLoginForm();
		 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const handleSubmit = (e) => {
		e.preventDefault();
		props.login(username, password, push);
		props.setHomeError();
	};
	
	const handleChange = (e) =>{
		const {value, name} = e.target
		props.setLoginValues(value, name)
		}

	return (
		<>
		<img src={logo} alt=""/>
		<h2> Please Login</h2>
		{props.error ? <div>{props.error}</div>: null }
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
		password:state.login.password,
		error:state.login.error
	}
}
export default connect(mapStateToProps, {setLoginValues, login, clearLoginForm, setHomeError})(Login);
