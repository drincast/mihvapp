import React, { Component } from 'react';
import { observer } from 'mobx-react'
// import DevTools from 'mobx-react-devtools';
import { Link, Redirect , Route, Switch } from 'react-router-dom';

import DataService from '../services/DataService';
import objStoreStates from '../storestates';
import Header from '../components/header/header';
import BulletinBoard from '../components/bulletinboard/bulletinboard';
import Courses from '../components/courses/courses';

import firebase from '../utils/firebase';
import configApp from '../configapp.json';
import logo from '../logo.svg';
import './App.css';

let objDataService = new DataService();

// const routes_ = (
//     <div>
//         <Route exact component={Courses} path='/courses'></Route>
//         {/* <Route path='/bulletinboar' component={BulletinBoard}></Route> */}
//         <Route path='/bulletinboar' component={BulletinBoard}></Route>
//     </div>
// )

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

            objStoreStates.setSocials(this.state.dataCV.websites);
            // return firebase.storageRef.child(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL();
            return firebase.storage.child(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL();
        })
        .then(url => {
            this.setState({
                imgProfile: url                        
            });
        })        
        .catch( async err => {
            let theData = await firebase.getData('p1').then(data => { 
                console.log('laData', data);
                return data; 
            });

            this.setState({
                dataCV: theData
            });
            objStoreStates.setSocials(theData.websites);
            console.log('estado', this.state.dataCV.lastName, this.state.dataCV.imgProfile.url);
            console.log(firebase.storage, `imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`);
            
            firebase.getImage(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`);


            // return firebase.storageRef(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL();
            // console.error(err);
        });
    }

    //JSON.stringify(objDataService.getDataCV())

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
                            //console.log(url);
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

    getSkills(){
        return this.state.dataCV !== undefined ? this.state.dataCV.skills : null
    }

    getCourses(){
        return this.state.dataCV !== undefined ? this.state.dataCV.education.courses : null
    }
    
    render() {
        //const _urlImgProfile = this.getUrlImgProfile();
        
        return (
            <div className="App">
                <Header logo={logo} altImg={this.getNamePerson()} urlImg={this.state.imgProfile} 
                    vName={this.getVisibleName()} yourSelf={this.getYourself()} legend={this.getLegend()} />
                <nav className="navMenu">
                    <Link to="/bulletinboar">Skills</Link>
                    <Link to="/courses">Cursos</Link>
                </nav>
                <div>
                    {/* {routes_} */}
                    <Switch>
                        <Route path='/bulletinboar' render={
                            () => <BulletinBoard data={this.getSkills()} animation={true} type="skill"/>
                            }>
                        </Route>
                        {/* <Route component={Courses} path='/courses'></Route> */}
                        <Route path='/Courses' render={
                            () => <BulletinBoard data={this.getCourses()} type="courses"/>
                            }>
                        </Route>
                        {/* <Redirect to="/bulletinboar"></Redirect> */}
                        <Redirect to="/bulletinboar"></Redirect>
                    </Switch>
                </div>                
                {/* <BulletinBoard data={this.getSkills()} animation={true}/> */}
                
                {/* <div>{this.state.dataCV !== undefined ? this.state.dataCV.firtsName: false}</div>
                <div>{}</div>
                <img src={logo} className="App-logo" alt="logo" />
                <div onClick={this.test}>hola</div> */}
            </div>
        );
    }
}

export default observer(App);
