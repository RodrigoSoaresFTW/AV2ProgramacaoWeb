import React, {useContext, useState, useEffect} from 'react';
import {UsuarioContext} from '../../contexts/user';
import firebaseApp from '../../services/firebase';
import {getFirestore, addDoc, collection, onSnapshot,query, where, orderBy} from 'firebase/firestore';

let Chat = ()=>{
    const db = getFirestore(firebaseApp);

    const [messages, setMessages] = useState([]);

    const {user, signOut} = useContext(UsuarioContext)
    

    useEffect(()=>{
       const unsub = onSnapshot(query(collection(db,"mensagens"),orderBy('data')),(querySnapshot)=>{
            const tmp = [];

            querySnapshot.forEach(async(document)=>{
                tmp.push({
                    id: document.id,
                    ...document.data()
                })
            })

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
           
            await addDoc(collection(db, 'mensagens'),{
                mensagem: inputMensagens.value,
                data: data,
            }).then(()=>{
                inputMensagens.value = inputMensagens.defaultValue;
            });
            
        }catch(erro){
            console.log(erro);
        }
    }

    return (
        <div>
            <h1>Bem vindo {user?user.email : ''}</h1>

            {messages.map((item)=>(
                <p key={item.id}>{item.mensagem}</p>
            ))}

            <input type="text" placeholder="Digite sua mensagem" id="inputMensagem"/>

            <button type="button" onClick={()=>{
                handleMessage();
            }}>Enviar</button>

            <button type="button" onClick={()=>{
                signOut();
            }}>Sair</button>

        </div>
    );
}

export default Chat;