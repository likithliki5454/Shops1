import React, { Component } from "react";
import axios, { Axios } from "axios";
// import Dropdown from "./Dropdown";
import Select from 'react-select'
import "./App.css";

class Create extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    show: false,
    selectOptions : [],
    id: "",
    aname: '',
    aemail:''
  };



  showPassword = (e) => {
    this.setState({ show: !this.state.show });
  };

  onName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };



  async getOptions(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const op = res.data

    
    const options = op.map((d) => ({
      "value" : d.id,
      "label" : d.name,
      "mail":d.email
    }))

    this.setState({selectOptions: options})
console.log(options)
  }

  handleChange(e){
   this.setState({id:e.value, aname:e.label,aemail:e.mail})
  }

  componentDidMount(){
      this.getOptions()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newdata = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newdata);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newdata)
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  };



  render() {
    return (
      <div className="post">
        <div id="img">
          <img src="/edited.jpg"></img>
        </div>

        <form id="form" onSubmit={this.handleSubmit}>
          <h2 className="heading">Please fill the Form</h2>
          <input
            placeholder="Name"
            value={this.state.name}
            onChange={this.onName}
            required
            type={"text"}
            className="inp"
          />

          <input
            placeholder="Email"
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
            placeholder="password"
            value={this.state.password}
            onChange={this.onPassword}
            required
          />

          <input id="check" type="checkbox"  onClick={this.showPassword} />
          <span>&nbsp; Show Password</span>
          {/* <Dropdown className="inpselect" /> */}

          <div>
        <Select required className="inpselect" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} ></Select>   
    <p>You have selected <strong>{this.state.aname}</strong> whose id is <strong>{this.state.id}</strong>and name is<strong>{this.state.aemail}</strong></p>
      </div>
          <div>
            <button className="logbtn">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;










