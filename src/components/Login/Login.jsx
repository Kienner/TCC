import React, { useState } from 'react';
import './Login.scss';
import { auth } from '../../services/firebaseConfig';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  async function handleSignIn(e) {
    e.preventDefault(); 

    try {
      await signInWithEmailAndPassword(email, password);
      if (user) {
        window.location.href = '/';
      } else {
        console.error("Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  }

  const getErrorMessage = (error) => {
    if (error) {
      switch (error.code) {
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          return 'Senha ou email incorretos';
        case 'auth/network-request-failed':
          return 'Senha ou email incorretos';
        default:
          return 'Ocorreu um erro. Por favor, tente novamente';
      }
    }
    return '';
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <img src="/logo.png" className="left-gif" alt="logo" />
      </div>

      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className='container-fields'>
            <div className="textfield">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="emailexemplo@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button className="btn-login" onClick={handleSignIn} type="button">
              Entrar
            </button>
            <p className='forgot-p'> Esqueceu sua senha? <Link to="/recuperacao"><span>Recupere aqui</span></Link></p>
            {error && <p className="error-message">{getErrorMessage(error)}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
