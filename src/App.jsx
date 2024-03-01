import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';
import Login from './components/Login/Login';



export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Atualizacoes" element={<CadastrarAtt/>} />
          <Route path="Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
