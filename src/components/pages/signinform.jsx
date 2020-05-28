import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,Redirect,useHistory,useLocation} from "react-router-dom";
import axios from 'axios';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            usersCollection: [],
            isauth : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
      axios.get('http://localhost:4000/users')
          .then(res => {
              this.setState({ usersCollection: res.data });
          })
          .catch(function (error) {
              console.log(error);
          })
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
        var k;
        for(k=0;k<this.state.usersCollection.length;k++)
        {
          if(this.state.usersCollection[k]['user_email']===this.state.email && this.state.usersCollection[k]['user_password']===this.state.password)
          {
            console.log("authenticated")
            this.state.isauth = true
            console.log(this.state);
          }
        }
        this.props.callbackFunction(this.state.isauth);

    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" >Sign In</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;