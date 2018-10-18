import React from 'react';

import './bulletinboard.css';

const Bulletin = props => {
    const { description, level, items, title} = props;

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
        let starts = "";
        let intLevel = parseInt(level);
        for(let i = 1; i <= intLevel; i++){
            starts = starts + "*" + " ";
        }
        starts = starts.substr(0, starts.length - 1);

        return starts;
    }

    return(
        <div className="secBulletin">
            <h2 className="title">{ title }</h2>
            <p>{_getDrawLevel()}</p>
            <p>{ description }</p>
            <ul>
                {
                    _getListItems()
                }
            </ul>
        </div>
    )
}

export default Bulletin;