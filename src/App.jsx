import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';




export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Atualizacoes" element={<CadastrarAtt/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
