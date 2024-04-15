import React, { Component } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';
import Posts from './components/Posts/Posts';






export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/atualizacao" element={<CadastrarAtt/>} />
          <Route path="/posts" element={<Posts/>} />
         

         

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;