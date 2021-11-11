import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';

let About = ()=>{

    let location = useLocation();
    let {nome} = location.state || '';
    let history = useHistory();
    
    const handleClick = ()=>{
        history.push("./chat");
    };

    return (
        <div>
            <h1>About {nome}</h1>
            <button type="button" onClick={handleClick}>Chat</button>
        </div>
    );
}

export default About;

