import React from 'react';

import './header.css'

const Header = props => {
    const { logo } = props;

    const _getSrcImg = () => {        
        console.log(props);
    }

    return (
        <header className="secHeader">
            <div className="divHeaderImgProfile" onClick={_getSrcImg}>
                <img className="imgHeaderImgProfile" 
                    alt={props.altImg}
                    src={props.urlImg}>
                </img>
            </div>
            <h1>{props.vName}</h1>
            <h2>{props.yourSelf}</h2>
            <div class="desc">
                <p>{props.legend}</p>
            </div>
            
        </header>
    );
}

export default Header;
