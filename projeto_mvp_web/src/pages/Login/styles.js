import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    
`;

export const Header = styled.div`
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const ContainerLogoFrase = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    
    #logo{
        padding-top: 50px;
        padding-left: 5vw;
    }

    #phrase{
        padding-top: 1vw;
        padding-left: 3vw;
        
    }

    #phrase p{
        font-size: 2rem;
        color: #fff;
        line-height: 1rem;

    }
`;

export const ContainerSignIn = styled.div`
    display: flex;
    flex: 1;
    min-width:500px;
    align-items: center;

    #containerLogin{
        width:20vw;
        background-color: #fff;
        min-width:350px;
        min-height: 60%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        color: #333;
    }

    #containerLogin #containerButtons{
        display: flex;
        flex-direction: row;
    }

    #containerLogin #containerButtons .button{
        
        padding-bottom: 10px;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin: 0px 5px;
        color: #673f66;
        cursor: pointer;
        text-align: center;
    }

    #containerLogin #containerButtons .ativo:hover{
        border-bottom:4px solid #AE1B73;
        
    }

    #containerLogin #containerButtons .inativo{
        border:none;
        color: #e6e6e6;
    }

    #containerLogin #containerButtons .inativo:hover{
        cursor: default;
        border-bottom: 4px solid #AE1B73;
    }

    .box{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    .box .title{
        color: #ccc;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .box input{
        border: 1px solid #ccc;
        height: 3rem;
        border-radius: 5px;
        padding: 0 20px;
        margin-top: 5px;
    }

    .conteinerLoginOrJoin{
        display: flex;
    }

    .conteinerLoginOrJoin .button{
        display: flex;
        height: 50px;
        background-color: #AE1B73;
        border-radius: 5px;
        border: 1px solid #AE1B73;
        justify-content: center;
        align-items: center;
        color: #fff;
        flex: 1;
        margin-top: 2rem;
        cursor: pointer;
    }

    .conteinerLoginOrJoin .button:hover{
        opacity: 0.9;
    }

    .conteinerLoginOrJoin .button:first-child{
        margin-right: 15px;
    }

    .conteinerLoginOrJoin .invert{
        background-color: #fff;
        color: #AE1B73;
    }

    .conteinerLoginOrJoin .invert:hover{
        background-color: #AE1B73;
        color: #fff;
    }

    .forgotCredencials{
        color: #AE1B73;
        display: flex;
        justify-content: flex-end;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
`;

export const Footer = styled.div`
    display: flex;
    height: 15vh;
    background-color: #AE1B73;
    
    #logo{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #about{
        flex: 4;
        display: flex;
        justify-content: center;
        flex-direction: column;

    }

    #about p{
        font-size: 12px;
        line-height: 2px;
    }

    #social{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;


