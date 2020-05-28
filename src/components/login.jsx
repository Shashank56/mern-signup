import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink,Redirect } from 'react-router-dom';
import SignUpForm from './pages/signupform';
import SignInForm from './pages/signinform';
import "./styles/login.css"
import logo from "./images/image.png"

class Login extends Component {
	constructor(props) {
		super(props);
		this.state  = {
			isauth : false
		}
        this.callbackFunction = this.callbackFunction.bind(this);

	};

	callbackFunction = (childData) => {
        this.setState({isauth: childData})
	}
	
	render() {

		if(!this.state.isauth){
		return (
			<Router basename="/react-auth-ui/">
				<div className="App">
					<div className="App__Aside">
					<div className="image-holder" />
			<img
				alt="bgImage"
				// src="https://cdn.pixabay.com/photo/2016/08/22/02/18/lomografia-1611256_1280.jpg"
				src={logo}
			/>
					</div>
					<div className="App__Form">
						<div className="PageSwitcher">
								<NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
								<NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
							</div>

							<div className="FormTitle">
									<NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
							</div>

							<Route exact path="/" component={SignUpForm} >
							</Route>
							<Route path="/sign-in" component={()=> <SignInForm callbackFunction={this.callbackFunction}/>}>
							</Route>
					</div>

				</div>
			</Router>
		);
		}
		else{
			return <h2>Hello</h2>
		}	
	}
}

export default Login;