import React from 'react';
//import FontAwesome from 'react-fontawesome';

import objStoreState from '../../storestates';
//import { clearObserving } from 'mobx/lib/internal';
import './secsocials.css'

const SecSocials = props => {    
    let lstLi = [];

    const getListOfWebSocials = () =>{
        let url = "";
        
        // let lstSocials = JSON.stringify(objStoreState.getSocials());
        let lstSocials = objStoreState.getSocials();

        for (let i in lstSocials) {            
            switch (i.toUpperCase()) {                
                case "BLOGGER":                    
                    for (let j in lstSocials[i]) {
                        if ('url' === j){                             
                            url = lstSocials[i][j];
                            break;
                        }
                    }
                    lstLi.push(
                        <li key={i}>
                            <a href={url} target="_blank">
                                {/* <FontAwesome className="fa fa-blogger" name={i}></FontAwesome> */}
                                <i className="fab fa-blogger fa-2x" name={i}></i>
                            </a>
                        </li>
                    )
                    break;
                case "GITHUB":
                    for (let j in lstSocials[i]) {
                        if ('url' === j){                             
                            url = lstSocials[i][j];
                            break;
                        }
                    }
                    lstLi.push(
                        <li key={i}>
                            <a href={url} target="_blank">
                                <i className="fab fa-github fa-2x" name={i}></i>
                            </a>
                        </li>
                    )
                    break;
                case "TWITTER":
                    for (let j in lstSocials[i]) {
                        if ('url' === j){                             
                            url = lstSocials[i][j];
                            break;
                        }
                    }
                    lstLi.push(
                        <li key={i}>
                            <a href={url} target="_blank">
                                <i className="fab fa-twitter fa-2x" name={i}></i>
                            </a>
                        </li>
                    )
                    break;
                default:
                    break;
            }
        }
        //console.log('lstLi', lstLi);

        return
    }

    getListOfWebSocials();

    return(
        <div className="secSocials">
            <ul>
                {lstLi}
            </ul>
        </div>
    );
}

export default SecSocials;