import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../services/firebaseConfig';
import { Navigate, useNavigate } from "react-router-dom";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [permissionLevel, setPermissionLevel] = useState(0); // Nível de permissão padrão definido como 0 (usuário)
  const [messageType, setMessageType] = useState(null);
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    if (!email || !password || !name || !birthdate) {
      setMessageType('error');
      setMessageText('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Definindo o nível de permissão com base na seleção do usuário
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        name: name,
        birthdate: birthdate,
        permissionLevel: parseInt(permissionLevel) // Convertendo para número inteiro
      });

      setMessageType('success');
      setMessageText("Cadastro realizado com sucesso!");
      navigate("/Login")
    } catch (error) {
      console.error(error);
      setMessageType('error');
      if (error.code === 'auth/email-already-in-use') {
        setMessageText("O e-mail já está em uso. Por favor, tente com outro e-mail.");
      } else {
        setMessageText("Erro ao criar usuário. Por favor, tente novamente mais tarde.");
      }
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
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name='name'
            id='name'
            placeholder='Seu nome completo'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="birthdate">Data de Nascimento</label>
          <input
            type="date"
            name='birthdate'
            id='birthdate'
            value={birthdate}
            onChange={e => setBirthdate(e.target.value)}
          />
        </div>

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

        <div className="inputContainer">
          <label htmlFor="permission">Permissão</label>
          <select
            id="permission"
            name="permission"
            value={permissionLevel}
            onChange={e => setPermissionLevel(parseInt(e.target.value))}
          >
            <option value={0}>Usuário</option>
            <option value={1}>Admin</option>
          </select>
        </div>
        
        <button className="button" onClick={handleSignUp}>
          Cadastrar
        </button>
        {messageType && (
          <p className={messageType === 'error' ? 'error-message' : 'success-message'}>
            {messageText}
          </p>
        )}
      </form>
    </div>
  );
}

export default Register;
