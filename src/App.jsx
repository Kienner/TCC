import React, { Component } from 'react';
import {initializeApp} from 'firebase/app'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';
import Login from './components/Login/Login';
import CadastrarUser from './components/CadastrarUser/CadastrarUser';







export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Atualizacoes" element={<CadastrarAtt/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Cadastro" element={<CadastrarUser/> }/>
       

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
