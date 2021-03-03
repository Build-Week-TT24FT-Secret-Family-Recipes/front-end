import React from "react";
import { Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import HomePage from './components/HomePage'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import "./App.css";


const store = createStore(reducers)
function App() {
	return (
		<Provider store ={store}>
		<div className="App">
			<nav>
			<Link to ='/'>
				Home
			</Link>
			<Link to ='/signup'>
			Signup
			</Link>
			</nav>
			<Route exact path="/" component={HomePage} />
			<Route exact path='/signup' component={SignUp} />
		</div>
		</Provider>
	);
}

export default App;
