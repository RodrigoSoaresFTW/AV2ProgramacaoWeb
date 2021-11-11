import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import React from 'react';
import firebaseApp from './services/firebase';

import {UsuarioProvider} from './contexts/user'

function App() {
  return (
    <UsuarioProvider>
     <Routes/>
    </UsuarioProvider>
  );
}

export default App;
