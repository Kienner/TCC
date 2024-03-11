import React, { Component } from 'react';
import {initializeApp} from 'firebase/app'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';
import Login from './components/Login/Login';
import CadastrarUser from './components/CadastrarUser/CadastrarUser';



const firebasApp = initializeApp({
  apiKey: "AIzaSyC-fQvh9ym1QbeW7roDwKTpzjB7OxuWqXs",
  authDomain: "testedelogin-ea50d.firebaseapp.com",
  databaseURL: "https://testedelogin-ea50d-default-rtdb.firebaseio.com",
  projectId: "testedelogin-ea50d",
  storageBucket: "testedelogin-ea50d.appspot.com",
  messagingSenderId: "665839759271",
  appId: "1:665839759271:web:d2dd8936bed805fc551082",
  measurementId: "G-WY2SLC17HB"
});







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
