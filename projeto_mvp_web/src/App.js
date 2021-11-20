//import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import React from 'react';
import firebaseApp from './services/firebase';
import GlobalStyle from './globalStyles';

import {UsuarioProvider} from './contexts/user'

function App() {
  return (
    <UsuarioProvider>
      <GlobalStyle/>
      <Routes/>
    </UsuarioProvider>
  );
}

export default App;
