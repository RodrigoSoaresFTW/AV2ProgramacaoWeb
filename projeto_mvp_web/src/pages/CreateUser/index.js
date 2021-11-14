import React, {useContext, useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

let Login = ()=>{

    const {signIn, signUp} = useContext(UsuarioContext);
    
    const [email,setEmail] = useState('antonio@antonio.com');
    const [password, setPassword] = useState('123123');
    
    const handleLogin = async()=>{
        try{
            await signIn(email, password);
        }
        catch(erro){
            console.log(erro);
        }
    }

    const handleCadastrar = async()=>{
        try{
            await signUp(email, password);
        }
        catch(erro){
            console.log(erro);
        }
    }

    return (
        <div>
            <h1>Cadastrar</h1>
            <p></p>
            <button type="button" onClick={handleLogin}>Logar</button>
            <button type="button" onClick={handleCadastrar}>Cadastrar</button>
        </div>
    );
}

export default Login;