import React, { Component } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Login extends Component {
  state = {
    email: "",
    password: "",
    show: false,
    alld: "",
    // error:'',
    
  };



  showPassword = (e) => {
    this.setState({ show: !this.state.show });
  };

  onEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPassword = (e) => {
    this.setState({
      password: e.target.value,
      error: e.target.title,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
   
    this.setState({
      alld: data,
    });
    console.log(this.state.alld);
  
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log(res),
      window.location.href='/Menu')

      // <Link to="/Create">
      //       <h4 className="inp2">Don't have an account sign up?</h4>
      //     </Link>
      .catch((err) => console.log(err));
console.log(this.state.alld);
toast('Hello Geeks')

  };

 handleClick(){
document.getElementById('change').type="hidden"
document.getElementById('tbox').type="text";
document.getElementById('tbox').focus()
  }

  render() {
    return (
      <div className="post">
        <div id="img">
          <img src="/edited.jpg"></img>
        </div>

        <form id="form" onSubmit={this.handleSubmit}>
          <h2 className="heading">Please fill the Form</h2>
          <input
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.onEmail}
            required
            type={"email"}
            className="inp"
          />

          <input
            id="myInput"
            className="inp"
            type={this.state.show ? "text" : "password"}
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.onPassword}
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain a number and uppercase and lowercase letter,  8 or more characters"
          />
          {/* <h6 id="err">{this.state.error}</h6> */}

          <input id="check" type="checkbox" onClick={this.showPassword} />
          <span>&nbsp; Show Password</span>

          <Link to="/Create">
            <h4 className="inp2">Don't have an account sign up?</h4>
          </Link>

          <div>
            <button className="logbtn" onClick={this.onLogin}>
              Log in
            </button>
          </div>

          <div id="query">
            <button onClick={this.handleClick} type='button'>Need help?</button>
            <input id="change" value="here" type="button"></input>
            <input id="tbox" type="hidden" placeholder="say something"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

// https://api.first.org/data/v1/countries
