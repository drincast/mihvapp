import React, { Component } from 'react';

import DataService from '../services/DataService';
import Header from '../components/header/header';

import firebase from '../utils/firebase';
import configApp from '../configapp.json';
import logo from '../logo.svg';
import './App.css';

let objDataService = new DataService();

class App extends Component {  
    constructor(props){
        super(props);
        this.state = {
            dataCV: undefined,
            imgProfile: undefined
        };
    } 

    componentWillMount() {
        objDataService.getDataCV()
        .then((response) => {
            this.setState({
                dataCV: response.data
            });
            
            return firebase.storageRef.child(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL();            
        })
        .then(url => {
            this.setState({
                imgProfile: url                        
            });
        })        
        .catch( err => console.log(err));
    }

    //JSON.stringify(objDataService.getDataCV())

    test = () => {
        alert("hola");
    }

    getNamePerson() {
        return this.state.dataCV !== undefined ? this.state.dataCV.firtsName : "user";
    }

    getUrlImgProfile() {
        let res = configApp.defUrlImgProfile;

        if (this.state.dataCV !== undefined){
            if(this.state.dataCV.imgProfile !== undefined){
                if(this.state.dataCV.imgProfile.isFirebase){
                    
                    if(this.state.dataCV.imgProfile.url !== undefined && this.state.dataCV.imgProfile.url !== null){
                        //console.log(firebase.storageRef.child);
                        //console.log(this.state.dataCV);
                        firebase.storageRef.child(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL()
                        .then( (url) => {
                            console.log(url);
                            return url;
                        })
                        .catch(err => console.log(err));
                    }
                }
                else{
                    if(this.state.dataCV.imgProfile.url !== undefined && this.state.dataCV.imgProfile.url !== null){
                        res = this.state.dataCV.imgProfile.url;
                    }
                }
                //res = this.state.imgProfile;
            }
        }

        console.log('getUrlImgProfile', res);
        //return res;
    }

    getVisibleName() {        
        return this.state.dataCV !== undefined ? this.state.dataCV.visibleName : ''
    }

    getYourself() {        
        return this.state.dataCV !== undefined ? this.state.dataCV.nameYourselfProfessionally : ''
    }

    getLegend() {        
        return this.state.dataCV !== undefined ? this.state.dataCV.legend : ''
    }


    render() {
        const _urlImgProfile = this.getUrlImgProfile();
        return (
            <div className="App">
                <Header logo={logo} altImg={this.getNamePerson()} urlImg={this.state.imgProfile} vName={this.getVisibleName()} yourSelf={this.getYourself()} legend={this.getLegend()}></Header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>{this.state.dataCV !== undefined ? this.state.dataCV.firtsName: false}</div>
                <div>{}</div>
                <img src={logo} className="App-logo" alt="logo" />
                <div onClick={this.test}>hola</div>
            </div>
        );
    }
}

export default App;
