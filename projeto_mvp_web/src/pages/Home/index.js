import React from 'react';
import {Link} from 'react-router-dom';

let Home = ()=>{
    return (
        <div>
            <h1>Home</h1>
            {/*<Link to= "/about">About</Link>*/}
            <Link to={{
                pathname: "/about",
                state:{
                    nome: "Rodrigo",
                    idade: 33
                }
            }}>About </Link>
        </div>
    );
}

export default Home;