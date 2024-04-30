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
      <h1> <br />  Faça login <br /> e adentre o universo de Brasil Time Odssey</h1>
       

       <img src="\src\assets\img\Player_Attack.gif" class="left-gif" alt="animação ataque" />

      </div>

      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <form>
            <div className="textfield">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name='email'
                id='email'
                placeholder='calabreso@gmail.com'
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name='password'
                id='password'
                placeholder='*****'
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            
            <button className="btn-login" onClick={handleSignIn}>
              Entrar
            </button>
          </form>
        </div>
      </div>
      {error && <p className="error-message">Erro ao fazer login: {error.message}</p>}
    </div>
  );
}

export default Login;
