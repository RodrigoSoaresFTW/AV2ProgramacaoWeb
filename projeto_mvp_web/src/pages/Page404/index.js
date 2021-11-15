import React from 'react';
import {Main} from './styles';


let Page404 = ()=>{
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
                    <article>
                        <p class="conteudo">
                            404 - PÁGINA NÃO ENCONTRADA
                        </p>

                        <h2 class="titulo">
                            <img src="./images/404.jpg" alt="" width="350px"/>
                        </h2>
                    </article>
                </section>
            </div>
        </Main>
    );
}

export default Page404;
