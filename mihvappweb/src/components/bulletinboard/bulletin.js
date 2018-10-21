import React from 'react';

import './bulletinboard.css';

const Bulletin = props => {
    const { description, level, items, title, animation} = props;

    const _getListItems = () => {
        let list = [];
        if(items !== undefined && items !== null){
            for(let i = 0; i <= items.length - 1; i++){
                list.push(<li key={i}>{items[i]}</li>);
            }
        }

        return list
    }

    const _getDrawLevel = () => {
        let stars = "";
        let intLevel = parseInt(level);
        let lstStars = [];
        for(let i = 1; i <= intLevel; i++){
            //starts = starts + "*" + " ";
            lstStars.push(<i className='fa fa-star'></i>)
        }
        //starts = starts.substr(0, starts.length - 1);

        //return starts;
        return lstStars;
    }

    const classBulletin = () => {
        let res = 'bbulletin';
        if(animation === true){
            res = 'bbulletin bbulletinAnimation';
        }

        return res;
    }

    return(
        <div className={classBulletin()}>
            <h2 className="title">{ title }</h2>
            <p className='level'>{_getDrawLevel()}</p>
            <p>{ description }</p>
            <ul className="attributes">
                {
                    _getListItems()
                }
            </ul>
        </div>
    )
}

export default Bulletin;