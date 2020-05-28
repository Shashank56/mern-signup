import React, { useState } from "react";
import Login from "./login"
import {BrowserRouter as Router,Switch,Route,Link,Redirect,useHistory,useLocation} from "react-router-dom";
import Meet from "./meet";

function App() {
  return (
    <Router>
    	<div>
			<Link className="link" to='/'>Home</Link>
			<Link className="link" to='/login'>User</Link>
        	<Switch>
        		<Route path="/login">
        	    	<Login />
        	  	</Route>
        	  	<Route path="/">
        	    	<Meet />
        	  	</Route>
        	</Switch>
      </div>
    </Router>
  );
}

export default App;
