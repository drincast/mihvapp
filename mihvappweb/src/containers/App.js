import React, { Component } from 'react';

import DataService from '../services/DataService';
import logo from '../logo.svg';
import './App.css';

let config = require('../configapp.json');

let objDataService = new DataService();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataCV: undefined
    };
  }
  
  componentDidMount() {
    // let dataR = objDataService.getDataCV();
    // console.log(dataR);
    // this.setState({
    //   //dataCV: objDataService.getDataCV()
    //   dataCV: dataR
    // });
    // console.log(this.state.dataCV);

    //this.getData();

    objDataService.getDataCV()
    .then((response) => {      
      this.setState({        
        dataCV: response.data
      });
    })
    .catch( err => console.log(err));
  }

  // getData = async () => {    
  //   //let url = `${config.urlHvAppApi}dataCVPerson/`;
  //   let url = config.urlHvAppApi;

  //   let miInit = { 
  //                 method: 'GET',
  //                 headers: new Headers(),
  //                 mode: 'cors',
  //                 cache: 'default' 
  //                }

  //   // fetch(url, {
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'Content-Type': 'application/json, text/plain, */*'
  //   //   }, 
  //   //   withCredentials: false
  //   // })
  //   fetch(url, miInit)
  //   .then((response) => {
  //     console.log('response', response);
  //     response.json();
  //   })
  //   .then((responseJson) => {
  //     //console.log('responseJson', JSON.stringify(responseJson));
  //     // if(responseJson.libroResp === undefined){
  //     //   console.log(responseJson.mensaje);
  //     // }
  //     // else{
  //     //   this.setState({
  //     //     dataCV: objDataService.getDataCV()
  //     //   });
  //     // }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
  
  //JSON.stringify(objDataService.getDataCV())

  test = () => {
    alert("hola");
  }

  render() {
    const { dataCV } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{dataCV !== undefined ? dataCV.firtsName: false}</div>
        <div>{}</div>
        <div onClick={this.test}>hola</div>
      </div>
    );
  }
}

export default App;
