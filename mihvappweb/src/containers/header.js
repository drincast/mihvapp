import React from 'react';

const Header = props => {
    const { logo, altImg } = props;

    const _getSrcImg = () => {        
        console.log(props);
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="divHeaderImgProfile" onClick={_getSrcImg}>
                <img className="imgHeaderImgProfile" 
                    alt={props.altImg}
                    src={props.urlImg}>
                </img>
            </div>
            <h1 className="App-title">Welcome to React</h1>
        </header>
    );
}

export default Header;
