import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
		constructor() {
				super();

				this.state = {
						email: '',
						password: '',
						confirm_password:'',
						name: '',
						hasAgreed: false
				};

				this.handleChange = this.handleChange.bind(this);
				this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChange(e) {
				let target = e.target;
				let value = target.type === 'checkbox' ? target.checked : target.value;
				let name = target.name;

				this.setState({
					[name]: value
				});
		}

		handleSubmit(e) {
			e.preventDefault();
			console.log('The form was submitted with the following data:');
			console.log(this.state);
			if(this.state.password!=this.state.confirm_password){
				alert("password doesnot match");
			}
			else{
			const newUser={
				username : this.state.name,
				user_email : this.state.email,
				user_password : this.state.password
			
			};
	
		
			axios.post('http://localhost:4000/users/create', newUser)
            .then((res) => {
				console.log(res.data)
				alert("registerd succesfully..!!!")
            }).catch((error) => {
                console.log(error)
            });

        	this.setState({ name: '', email: '',password:'' })
		}
	}

		render() {
				return (

						
				<div className="FormCenter">
						
						<form onSubmit={this.handleSubmit} className="FormFields">
							<div className="FormField">
								<label className="FormField__Label" htmlFor="name">Full Name</label>
									<input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
							</div>
							<div className="FormField">
									<label className="FormField__Label" htmlFor="email">E-Mail Address</label>
									<input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
							</div>
							<div className="FormField">
									<label className="FormField__Label" htmlFor="password">Password</label>
									<input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
							</div>
							<div className="FormField">
									<label className="FormField__Label" htmlFor="password">Confirm Password</label>
									<input type="password" id="password" className="FormField__Input" placeholder="Confirm password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange} />
							</div>
							

							<div className="FormField">
										<button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
							</div>
						</form>
					</div>
				);
		}
}

export default SignUpForm;