import React, {useContext, useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

import {
   Main, Content, Footer, Header,ContainerLogoFrase, ContainerSignIn
} from './styles'

let Login = ()=>{

    const {signIn, signUp} = useContext(UsuarioContext);
    
    
    let email = useState('');
    
    
    let password = useState('');
    
    
    const handleLogin = async()=>{
        try{
            email = document.querySelector("#emailLogin").value;
            password = document.querySelector("#senhaLogin").value
            await signIn(email, password);
        }
        catch(erro){
            console.log(erro);
        }
    }

    const handleCadastrar = async()=>{
        try{
            email = document.querySelector("#emailLogin").value;
            password = document.querySelector("#senhaLogin").value
            await signUp(email, password);
        }
        catch(erro){
            console.log(erro);
        }
    }

    return (
        <Main>
            <Header>
               
            </Header>
                
            <Content>
                <ContainerLogoFrase>
                    <div id="logo">
                        <img src="./images/logo.png" alt="Logo Inicial" width="300px"/>
                    </div>
                    <div id="phrase">
                        <p>Problemas para formar</p>
                        <p>um grupo de trabalho?</p>
                        <p>O grupou! resolve!</p>
                    </div>
                </ContainerLogoFrase>      

                <ContainerSignIn>
                    <div id="containerLogin">
                        <div id="containerButtons">
                            <div class="button ativo">
                                Membro
                            </div>

                            <div class="button inativo">
                                Convidado
                            </div>
                        </div>

                        <div class="box">
                          
                            <label for="emailLogin" class="title">Email</label>
                            <input placeholder="Digite seu Email" type="text" id="emailLogin"/>
                        </div>

                        <div class="box">
                            <label for="senhaLogin" class="title">Senha</label>
                            <input placeholder="Digite sua Senha" type="password" id="senhaLogin"/>
                        </div>

                        <div class="forgotCredencials">
                                Esqueci minha senha
                        </div>

                        <div class="conteinerLoginOrJoin">
                         
                             <button class="button invert" onClick={handleCadastrar} id="btnCadastrar">
                                Cadastrar
                            </button>
                         

                            <button class="button" onClick={handleLogin} id="btnLogin">
                                Entrar
                            </button>
                        </div>
                    </div>

                 
                </ContainerSignIn>
            </Content>

            <Footer>
                <div id="logo">
                    <img src="./images/logo.png" alt="Logo Gropou" width="150px"/>
                </div>

                <div id="about">
                    <p>Contato</p>
                    <p>contato@grupou.com.br</p>
                </div>

                <div id="social">
                    <img src="./images/Facebook.png" alt="Logo Facebook" width="50px"/>
                    <img src="./images/Instagram.png" alt="Logo Facebook" width="50px"/>
                    <img src="./images/Linkedin.png" alt="Logo Facebook" width="50px"/>
                </div>
            </Footer>
            
        </Main>
    );
}

export default Login;