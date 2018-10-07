import React from 'react';
import FontAwesome from 'react-fontawesome';

import objStoreState from '../storestates';
//import { clearObserving } from 'mobx/lib/internal';

const SecSocials = props => {    
    let lstLi = [];

    const getListOfWebSocials = () =>{
        let url = "";
        
        // let lstSocials = JSON.stringify(objStoreState.getSocials());
        let lstSocials = objStoreState.getSocials();

        for (let i in lstSocials) {
            switch (i.toLocaleUpperCase()) {
                case "BLOGGER":
                    for (let j in lstSocials[i]) {
                        if (lstSocials[i][j].hasOwnProperty('url')) {
                            url = lstSocials[i][j];
                            break;
                        }
                    }
                    lstLi.push(
                        <li key={i}>
                            <a href={url} target="_blank">
                                <FontAwesome className="fa fa-blogger" name={i}></FontAwesome>
                                {/* <i className="fab fa-blogger" name={i}></i> */}
                            </a>
                        </li>
                    )
                    break;
                case "GITHUB":
                    for (let j in lstSocials[i]) {
                        if (lstSocials[i][j].hasOwnProperty('url')) {
                            url = lstSocials[i][j];
                            break;
                        }
                    }
                    lstLi.push(
                        <li key={i}>
                            <FontAwesome name={i} size='2x'></FontAwesome>
                        </li>
                    )
                    break;
                case "TWITTER":
                    for (let j in lstSocials[i]) {
                        if (lstSocials[i][j].hasOwnProperty('url')) {
                            url = lstSocials[i][j];
                            break;
                        }
                    }
                    lstLi.push(
                        <li key={i} className="fab fa-blogger">
                            <a href={url} target="_blank"></a>
                        </li>
                    )
                    break;
                default:
                    break;
            }
        }
        console.log('lstLi', lstLi);

        return
    }

    getListOfWebSocials();

    return(
        <div>
            <ul>
                {lstLi}
            </ul>
        </div>
    );
}

export default SecSocials;