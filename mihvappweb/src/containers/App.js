import React, { Component } from 'react';
import { observer } from 'mobx-react'
// import DevTools from 'mobx-react-devtools';
import { Link, Outlet, Route, Routes, Navigate } from 'react-router-dom';

import DataService from '../services/DataService';
import objStoreStates from '../storestates';
import Header from '../components/header/header';
import BulletinBoard from '../components/bulletinboard/bulletinboard';
//import Courses from '../components/courses/courses';

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

    componentDidMount() {
        objDataService.getDataCV()
        .then((response) => {
            this.setState({
                dataCV: response.data
            });

            objStoreStates.setSocials(this.state.dataCV.websites);
            // return firebase.storageRef.child(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL();
        })
        .then(url => {
            this.setState({
                imgProfile: url                        
            });
        })        
        .catch( async err => {
            let theData = await firebase.getData('p1').then(data => { 
                
                this.setState({
                    dataCV: data
                });
                
                console.log("data", data, this.state);
                objStoreStates.setSocials(data.websites);
                return data; 
            });
            
            console.error(err);
        });

        // if ( this.state.dataCV !==
        //         prevState.dataCV) {
        //         console.log('el macho', this.state.dataCV);
        // }

        
    }

    async componentDidUpdate(prevProps, prevState) {
        if ( this.state.dataCV !== prevState.dataCV) {
            // console.log(firebase.storage, `imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`);

            // this.setState({
            //     imgProfile: 'https://drive.google.com/UC?export=view&id=1OZ09TOC2vzxCE9W-raL8howVBWnFK_a6'
            // })
            //https://drive.google.com/file/d/1OZ09TOC2vzxCE9W-raL8howVBWnFK_a6/view?usp=sharing
            const urlImgP = await firebase.getImage(`p1/${this.state.dataCV.imgProfile.url}` );

            this.setState({
                imgProfile: urlImgP
            });
            // return firebase.storageRef(`imgProfile/${configApp.defIdPerson}/${this.state.dataCV.imgProfile.url}`).getDownloadURL();
        }
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

    BTBOAR() {
        return(
            <BulletinBoard data={this.getSkills()} animation={true} type="skill"/>
        )    
    }
    
    render() {
        //const _urlImgProfile = this.getUrlImgProfile();
        
        return (
            <div className="App">
                <Header logo={logo} altImg={this.getNamePerson()} urlImg={this.state.imgProfile} 
                    vName={this.getVisibleName()} yourSelf={this.getYourself()} legend={this.getLegend()} />                

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path='/bulletinboar' 
                            element={<BulletinBoard data={this.getSkills()} animation={true} type="skill"/>}
                        />
                            {/* <Route component={Courses} path='/courses'></Route> */}
                        <Route path='/courses' 
                            element={<BulletinBoard data={this.getCourses()} type="courses"/>}
                        />
                        <Route element={<Navigate to="/bulletinboar"></Navigate>} />
                    </Route>
                </Routes>
            </div>
        );
    }
}

function Layout() {
    return (
        <div className="App">
            {/* <Header logo={logo} altImg={this.getNamePerson()} urlImg={this.state.imgProfile} 
                vName={this.getVisibleName()} yourSelf={this.getYourself()} legend={this.getLegend()} /> */}
            <nav className="navMenu">
                <Link to="/bulletinboar">Skills</Link>
                <Link to="/courses">Cursos</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
  }

export default observer(App);
