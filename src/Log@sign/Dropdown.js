import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import "./App.css";

export default class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      aname: '',
      aemail:''
    }
  }

 async getOptions(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const op = res.data

    
    const options = op.map((d) => ({
      "value" : d.id,
      "label" : d.aname,
      "mail":d.aemail
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

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select className="inpselect" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} ></Select>   
    <p>You have selected <strong>{this.state.aname}</strong> whose id is <strong>{this.state.id}</strong>and name is<strong>{this.state.aemail}</strong></p>
      </div>
    )
  }
}