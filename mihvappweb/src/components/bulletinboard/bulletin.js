import React from 'react';

import './bulletinboard.css';

const Bulletin = props => {
    // const { description, level, items, title, animation, type} = props;
    const { data, animation, type} = props;

    const _getListItems = (items) => {
        let list = [];
        if(items !== undefined && items !== null){
            for(let i = 0; i <= items.length - 1; i++){
                list.push(<li key={i}>{items[i]}</li>);
            }
        }

        return list
    }

    const _getDrawLevel = (level) => {
        let stars = "";
        let intLevel = parseInt(level);
        let lstStars = [];
        for(let i = 1; i <= intLevel; i++){
            //starts = starts + "*" + " ";
            lstStars.push(<i key={i} className='fa fa-star'></i>)
        }
        //starts = starts.substr(0, starts.length - 1);

        //return starts;
        return lstStars;
    }

    const classBulletin = (type) => {
        let res = null;

        switch (type) {
            case 'skill':
                res = 'bbulletinSkill';

                if(animation === true){
                    res = 'bbulletinSkill bbulletinAnimation';
                }
                break;
            case 'course':
                res = 'bbulletinCourse';

                if(animation === true){
                    res = 'bbulletinCourse bbulletinAnimation';
                }
                break;
            default:
                break;
        }
        return res;
    }

    const bulletinCourse = (data) => {
        let certificate = undefined;

        if(data.certificate !== undefined || data.certificate != null){
            certificate = <a href={data.certificate} rel="noopener noreferrer" target='_blank'>Certificado</a>
        }

        return (
            <div className={classBulletin('course')}>
                <h2 className="title">{ data.title }</h2>
                <h3 className='institute'>{data.institute}</h3>
                {certificate}
                <h5>{data.endDate}</h5>
            </div>
        )
    }

    const bulletinSkill = (data) => {        
        return (
            <div className={classBulletin('skill')}>
                <h2 className="title">{ data.title }</h2>
                <p className='level'>{_getDrawLevel(data.level)}</p>
                <p>{ data.description }</p>
                <ul className="attributes">
                    {
                        _getListItems(data.items)
                    }
                </ul>
            </div>
        )
    }

    function GetTypeBilletin(type, data){
        switch (type) {
            case 'courses':
                return bulletinCourse(data);
            case 'skill':
                return bulletinSkill(data);
            default:
                break;
        }
    }

    return(
        GetTypeBilletin(type, data)
    )
}

export default Bulletin;