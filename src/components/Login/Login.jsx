import React, { useState } from 'react';
import './Login.scss';
import { auth } from '../../services/firebaseConfig';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
     
      if (user) {
        window.location.href = '/home';
      } else {
        console.error("Credenciais inválidas.");
        
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      
    }
  }

  return (
    <div className="container">
      <header className="header">
        <img src="/src/assets/img/logo.png" alt="logo" className='LogoImg'/>
        <span> Digite suas informações</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name='email'
            id='email'
            placeholder='calabreso@gmail.com'
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name='password'
            id='password'
            placeholder='*****'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <button className="button" onClick={handleSignIn}>
          Entrar
        </button>
      </form>
      {error && <p className="error-message">Erro ao fazer login: {error.message}</p>}
    </div>
  );
}

export default Login;
