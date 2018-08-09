import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      names:[],
      showName: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteNames = this.deleteNames.bind(this)
    this.editName = this.editName.bind(this)
    this.addName = this.addName.bind(this)
    this.getName = this.getName.bind(this)
    this.getNames = this.getNames.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getName(){
    debugger
    axios.get('/api/name')
      .then((response)=>{
        debugger
        this.setState({
          showName:response.data.name
        })
      })
  }

  getNames(){
    debugger
    axios.get('/api/hello')
      .then((response)=>{
        debugger
        this.setState({
          names:response.data.names,
          showName:response.data.name
        })
      })
  }

  deleteNames(){
    debugger
    axios.delete('/api/hello')
      .then((response)=>{
        debugger
        this.setState({
          names:response.data.names,
          showName:response.data.name
        })
      })
  }

  editName(){
    debugger
    const body ={
      name:this.state.name,
    }

    axios.put('/api/hello', body)
      .then((response)=>{
        debugger
        this.setState({
          names:response.data.names,
          showName:response.data.name
        })
      })
  }

  addName(){
    debugger
    const body ={
      name:this.state.name,
    }
    axios.post('/api/hello', body)
      .then((response)=>{
        debugger
        this.setState({
          names:response.data.names,
          showName:response.data.name
        })
      })
  }

  render() {

    const names = this.state.names.map((name, i)=>{
      return <div key={i} >{name}</div>
    })

    return (
      <div className="App">
        <h1> NODE 1 </h1>
        <input name="name" value={this.state.name} onChange={this.handleChange}type="text"/>
        <br/>
        <button onClick={this.addName}>Add Name</button>
        <br/>
        <button onClick={this.editName}>Edit Name</button>
        <br/>
        <button onClick={this.deleteNames}>delete Names</button>
        <br/>
        <button onClick={this.getName}>get Name</button>
        <br/>
        <button onClick={this.getNames}>get Names</button>
        <br/>
        <br/>
        <div>
          {names}
        </div>
        <br/>
        <h1>{this.state.showName}</h1>
      </div>
    );
  }
}

export default App;
