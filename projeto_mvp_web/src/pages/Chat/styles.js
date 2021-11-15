import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center;

    .navegacao{
            height: 2rem;
            display: flex;
            justify-content: center;
            width: 100%;
        }

    .navegacao-menu{
        display: flex;
        flex: 9;
        justify-content: center;
        
        
    }

    .navegacao-menu--item{
        padding-left: 1rem;
        text-transform: uppercase;
        list-style: none;
    }

    .navegacao-menu--item a{
        text-decoration: none;
        color: black;
        
    }

    .navegacao-menu--item a:hover{
        font-weight: bold;
    }

    .navegacao-menu--item:hover{
        cursor: pointer;
        text-decoration: underline;
        color: #AE1B73;
        
    }

    .navegacao-menu:nth-child(2){
        align-content: flex-end;
        color: red;
        background-color: red;
    }
    
    #btnLogout{
        flex: 1;
        align-items: flex-end;
        background-color: #AE1B73;
        color: white;
        margin-top: 0.8rem;
    } 

    #btnLogout:hover{
        background-color: #FF4500;
        transition: 0.5s;
    }

  .main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #ccc;
        height: 50vw;
        width: 50vw;
    }

    header{
        align-self: center;
        
    }

    header h1{
        color: black;
        opacity: 0.7;
    }
    
    .chat{
        display: flex;
        align-self: center;
        flex-direction: column;
        align-items: center;
        background-color: #AE1B73;
        border-radius: 30px;
        width: 30vw;
        height: 44vw;
        padding-bottom: 1rem;
    }

    .chatBody{
        max-height: 42vw;
    }

    #inputMensagem{
        border: 1px solid #ccc;
        height: 2rem;
        border-radius: 5px;
        padding: 0 20px;
        margin: 5px 0 10px 0;
        align-self: flex-end;
        
    }

    .button{
        height: 2rem;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin: 0px 5px;
        color: #673f66;
        cursor: pointer;
        text-align: center;
        width: 4rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .envioMensagem{
        position: fixed;
        top: 42vw;
    }

    @media screen and (max-width:800px){
        
        .chatContent:nth-last-child(n+6){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width:1000px){
        
        .chatContent:nth-last-child(n+8){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width:1170px){
        
        .chatContent:nth-last-child(n+9){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width:1219px){
        
        .chatContent:nth-last-child(n+11){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }


    @media screen and (max-width:1350px){
        
        .chatContent:nth-last-child(n+13){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }


    @media screen and (max-width:1490px){
        
        .chatContent:nth-last-child(n+15){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width:1560px){
        
        .chatContent:nth-last-child(n+17){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width:1700px){
        
        .chatContent:nth-last-child(n+18){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width:1920px){
        
        .chatContent:nth-last-child(n+21){
        display: none;
        }

        #inputMensagem{
            margin-top: 1rem;
            margin-bottom: 0;
        }

        .chat{
            margin-bottom: 1rem;
        }
    }


    
`;