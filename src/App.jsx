import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';

export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/atualizacao" element={<CadastrarAtt />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/single-post/:postId" element={<SinglePost />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
