import React,{useContext, useState, useEffect} from 'react';
import {Main} from './styles';
import {UsuarioContext} from '../../contexts/user';


let Home = ()=>{
    const {user, signOut} = useContext(UsuarioContext)

    return (
        <Main>
              <div class="main">
                <nav class="navegacao">
                    <ul class="navegacao-menu">
                        <li class="navegacao-menu--item"><a href="/main">home</a></li>
                        <li class="navegacao-menu--item"><a href="/chat">chat</a></li>
                        <li class="navegacao-menu--item"><a href="/about">about</a></li>
                    </ul>
                </nav>

                <section class="body">
                    <h1 class="titulo">
                        Bem vindo {user.email}
                    </h1>

                    <article>
                        <p class="conteudo">
                            Converse com outros alunos, em tempo real através do nosso sistema de Chat!
                        </p>
                    </article>
                </section>
            </div>
        </Main>
    );
}

export default Home;