import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home'
import GetUserInfo from "./components/UserInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav>
			<Link to ='/'>
				Home
			</Link>
			<Link to ='/login'>
				Login
			</Link>
			</nav>
			<Route exact path="/" component={Home} />
			<Route exact path='/login' component={Login} />
			{/* <ProtectedRoute exact path="/userinfo" component={GetUserInfo} /> */}
		</div>
	);
}

export default App;
