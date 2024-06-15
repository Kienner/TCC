import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CadastrarAtt from './components/CadastrarAtt/CadastrarAtt';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';
import History from './components/History/History';

export class App extends Component {
  render() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/atualizacao" element={<CadastrarAtt />} />
        <Route path="/historia" element={<History />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/single-post/:postId" element={<SinglePost />} />
        <Route path="/recuperacao" element={<ResetPassword />} />
        <Route path="/historia" element={<History/>} />
               
        {/* Redirect from root to register */}
        <Route path="/*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
    );
  }
}

export default App;
