import React from 'react';
import {Main} from './styles';


let About = ()=>{
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
                        Sobre nos
                    </h1>

                    <article>
                        <p class="conteudo">
                            Trabalho de programação WEB realizado com React
                        </p>

                        <h2 class="titulo">
                            Alunos:
                        </h2>

                        <p class="conteudo">
                            Rodrigo de Lima Soares - 2019200215
                        </p>
                        
                        <p class="conteudo">
                            Raike Peçanha Mendes Barata - 2020200295
                        </p>

                        <p class="conteudo">
                            Wellington Natanael de Souza - 2016202649
                        </p>
                    </article>
                </section>
            </div>
        </Main>
    );
}

export default About;

