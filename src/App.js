import React from "react";
import { Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import HomePage from './components/HomePage'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import SignUp from './components/SignUp'
import "./App.css";
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))
function App() {
	return (
		<Provider store ={store}>
		<div className="App">
			<nav>
			<NavLink className ='NavLink' to ='/'>
				Home
			</NavLink>
			<NavLink className ='NavLink' to ='/login'>
			Login
			</NavLink>
			<NavLink className ='NavLink' to ='/signup'>
			Signup
			</NavLink>
			</nav>
			<Route exact path="/" component={HomePage} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
		</div>
		</Provider>
	);
}

export default App;
