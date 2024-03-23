import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSignUp(e) {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Usuário criado com sucesso
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // Lidar com erros de criação de usuário
          console.error(error);
        });
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
              value={email}
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <button className="button" onClick={handleSignUp}>
            Cadastrar
          </button>
        </form>
      </div>
    );
}

export default Register;