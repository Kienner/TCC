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

  return (
    <div className="main-login">
      <div className="left-login">
        <img src="/logo.png" className="left-gif" alt="logo" />
      </div>

      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div>
            <div className="textfield">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="calabreso@gmail.com"
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
                placeholder="***"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button className="btn-login" onClick={handleSignIn} type="button"> {/* Alterado para type="button" */}
              Entrar
            </button>
            <p>Esqueceu sua senha? <Link to="/recuperacao">Recupere aqui</Link></p>
            {error && <p className="error-message">{error.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;