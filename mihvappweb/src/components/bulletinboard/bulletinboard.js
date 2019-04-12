import React from 'react';

import Bulletin from './bulletin';

import './bulletinboard.css';

const BulletinBoard = props => {
    const {type} = props;
    const bulletins = props.data;
    const {animation} = props;

    const _getBulletins = () => {
        let listBulletins = []
        if(bulletins !== undefined && bulletins !== null){
            let data_ = {};
            for(let item in bulletins){
                data_ = {
                    certificate: bulletins[item].certificate,
                    description: bulletins[item].description !== undefined ? bulletins[item].description : undefined,
                    endDate: bulletins[item].endDate !== undefined ? bulletins[item].endDate : undefined,
                    level: bulletins[item].level !== undefined ? bulletins[item].level : undefined,
                    institute: bulletins[item].institute, 
                    items: bulletins[item].items,
                    title: bulletins[item].name
                }                
                listBulletins.push(
                    <Bulletin animation={animation}
                        data={data_}
                        key={item}
                        type={type} />
                );                
                //console.log(item, bulletins[item]);
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