import React from "react";
import "./styles/homePage.styles.css";
import Input from "./Input";
import { useHistory,Redirect,useLocation, Link } from 'react-router-dom';


class Meet extends React.Component{
    constructor(props){
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state={show:"False"}
    }

    // handleChange(e) {
    //     this.setState({show: e});
    //     click(this.state)
    // }
    
    render(){
        // const history = useHistory();
        // const location = useLocation();
        return(
            <div className="main">
              <div className="join">
                  <form>
                      <div className="inputholder">
                      <Input className="textInput" type={"text"} placeholder={"Meeting ID"} />
                      </div>
                  </form>
                  <button className="button" type="submit">
                      <span>Join meeting</span>
                  </button>
                  <button className="button" type="submit" >
                      <span>Host meeting</span>
                  </button>
              </div>
          </div>
        );
    }
}

export default Meet;