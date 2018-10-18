import React, { Fragment } from 'react';

import Bulletin from './bulletin';

import './bulletinboard.css';

const BulletinBoard = props => {
    const bulletins = props.data;

    const _getBulletins = () => {
        let listBulletins = []
        if(bulletins !== undefined && bulletins !== null){
            for(let item in bulletins){
                listBulletins.push(
                <Bulletin description={bulletins[item].description} 
                        level={bulletins[item].level}
                        items={bulletins[item].items}
                        title={bulletins[item].name} />
                );                
                console.log(item, bulletins[item]);
            }

            return listBulletins;
        }

        // let lisBulletins = bulletins.map((item)=>{
        //     console.log(item);
        // });
    }
    
    //console.log(bulletins);
    //_getBulletins()    

    return(
        <Fragment>
            {_getBulletins()}
        </Fragment>
    )
}

export default BulletinBoard;