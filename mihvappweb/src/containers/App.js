import React, { Component } from 'react';

import DataService from '../services/DataService';
import Header from './header';
import logo from '../logo.svg';
import './App.css';

let objDataService = new DataService();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataCV: undefined
    };
  }

  componentDidMount() {
    objDataService.getDataCV()
    .then((response) => {
      this.setState({
        dataCV: response.data
      });
    })
    .catch( err => console.log(err));
  }

  //JSON.stringify(objDataService.getDataCV())

  test = () => {
    alert("hola");
  }

  render() {

    return (
      <div className="App">
          <Header logo={logo}></Header>          
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.state.dataCV !== undefined ? this.state.dataCV.firtsName: false}</div>
        <div>{}</div>
        <div onClick={this.test}>hola</div>
      </div>
    );
  }
}

export default App;
