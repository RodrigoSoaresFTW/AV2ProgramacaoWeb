import React, {useContext, useState, useEffect} from 'react';
import {UsuarioContext} from '../../contexts/user';
import firebaseApp from '../../services/firebase';
import {getFirestore, addDoc, collection, onSnapshot,query, orderBy} from 'firebase/firestore';
import {Main} from './styles'

let Chat = ()=>{
    const db = getFirestore(firebaseApp);

    const [messages, setMessages] = useState([]);

    const {user, signOut} = useContext(UsuarioContext)

    let nome = '';
    if(user){
        nome = user.email.split("@", 2);

        nome = nome[0];

        nome = nome.toUpperCase();
    }
    
    useEffect(()=>{
       const unsub = onSnapshot(query(collection(db,"mensagens"),orderBy('data')),(querySnapshot)=>{
            const tmp = [];

            querySnapshot.forEach(async(document)=>{
                tmp.push({
                    id: document.id,
                    ...document.data()
                });
            });
            setMessages(tmp);
        });
        return ()=>{
            unsub();
        }
    },[]);
    
    const handleMessage = async()=>{
        let inputMensagens = document.getElementById('inputMensagem');
        let data = new Date()
        try{
            if(inputMensagens.value.length <= 17){
                await addDoc(collection(db, 'mensagens'),{
                    mensagem: inputMensagens.value,
                    data: data,
                    idEmail: user.email,
                    nome: nome
                }).then(()=>{
                    inputMensagens.value = inputMensagens.defaultValue;
                });
            }
            else{
                alert("Numero Maximo de Caracteres: 17");
            }
            
        }catch(erro){
            console.log(erro);
        }
    }

    return (
        <Main>
            <div class="main">
                <nav class="navegacao">
                    <ul class="navegacao-menu">
                        <li class="navegacao-menu--item"><a href="/main">home</a></li>
                        <li class="navegacao-menu--item"><a href="/chat">chat</a></li>
                        <li class="navegacao-menu--item"><a href="/about">about</a></li>
                    </ul>

                    <button type="button" class="button" id="btnLogout" onClick={()=>{
                                signOut();
                     }}>Sair</button>
                </nav>

                <header>
                    <h1 class="bemvindo">Bem vindo {user?nome : ''}</h1>
                </header>

                <section class="chat">
                    <div class="chatBody">
                        
                        {messages.map((item)=>(
                            
                            <p key={item.id} class="chatContent">{item.nome} diz: {item.mensagem}</p>
                        ))}
                    </div>

                    <div class="envioMensagem">
                        <input type="text" placeholder="Digite sua mensagem" id="inputMensagem"/>
                        <button type="button" id="btnEnviaMensagem" class="button" onClick={()=>{
                            handleMessage();
                        }}>Enviar</button>
                    </div>
                </section>
            </div>

        </Main>
    );
}

export default Chat;