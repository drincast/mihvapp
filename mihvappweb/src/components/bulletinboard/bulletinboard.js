import React from 'react';

import Bulletin from './bulletin';

import './bulletinboard.css';

const BulletinBoard = props => {
    const bulletins = props.data;
    const {animation} = props;

    const _getBulletins = () => {
        let listBulletins = []
        if(bulletins !== undefined && bulletins !== null){
            for(let item in bulletins){
                listBulletins.push(
                <Bulletin animation={animation}
                        description={bulletins[item].description}
                        key={item}
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
        <div className="bboard">
            {_getBulletins()}
        </div>
    )
}

export default BulletinBoard;