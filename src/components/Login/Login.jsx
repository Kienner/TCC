import React, { useState } from 'react';
import './Login.scss';
import { auth } from '../../services/firebaseConfig';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário logado:", user);
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error.message);
      });
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    // Redirecionar o usuário para outra página ou executar outra ação
    return <p>Usuário logado com sucesso!</p>;
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
      {error && <p>Erro ao fazer login: {error.message}</p>}
    </div>
  );
}

export default Login;