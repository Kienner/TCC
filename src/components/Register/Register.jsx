import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../services/firebaseConfig'; // Certifique-se de importar corretamente suas configurações do Firebase
import { useNavigate } from 'react-router-dom';
import './register.scss';

function CustomRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [permissionLevel, setPermissionLevel] = useState(0);
  const [messageType, setMessageType] = useState(null);
  const [messageText, setMessageText] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password || !name || !birthdate) {
      setMessageType('error');
      setMessageText('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        name: name,
        birthdate: birthdate,
        permissionLevel: parseInt(permissionLevel),
      });

      setMessageType('success');
      setMessageText('Cadastro realizado com sucesso!');
      navigate('/Login');
    } catch (error) {
      console.error('Erro durante o cadastro:', error);
      setMessageType('error');
      if (error.code === 'auth/email-already-in-use') {
        setMessageText('O e-mail já está em uso. Por favor, tente com outro e-mail.');
      } else {
        setMessageText('Erro ao criar usuário. Por favor, tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="main-register">
      <div className="left-register">
        <img src="\logo.png" className="left-gif" alt="animação ataque" />
      </div>
      <div className="right-register">
        <div className="card-register">
          <h1>REGISTRO</h1>
          <form>
            <div className="textfield">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="textfield">
              <label htmlFor="birthdate">Data de Nascimento</label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className="textfield">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="seuemail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="textfield">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-register" onClick={handleSignUp}>
              Cadastrar
            </button>
          </form>
          {messageType && (
            <p className={messageType === 'error' ? 'error-message' : 'success-message'}>
              {messageText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomRegister;