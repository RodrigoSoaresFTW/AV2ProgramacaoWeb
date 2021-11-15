import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center;

    .navegacao{
            height: 2rem;
            display: flex;
            justify-content: center;
            width: 95%;
            margin-bottom: 1rem;
            
        }

    .navegacao-menu{
        display: flex;
        
    }

    .navegacao-menu--item{
        margin-left: 1rem;
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
    
    .body{
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

    .titulo{
        text-align: center;
    }

    .conteudo{
        padding-left: 1rem;
        padding-right: 1rem;
        text-align: center;
        font-size: 0.8rem;
    }
    
`