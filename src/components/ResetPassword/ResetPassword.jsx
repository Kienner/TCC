// src/components/ResetPassword/ResetPassword.jsx
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './ResetPassword.scss';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Email de redefinição de senha enviado! Verifique sua caixa de entrada.');
      setError('');
      console.log('Password reset email sent successfully.');
    } catch (error) {
      setError('Erro ao enviar email de redefinição de senha. Verifique o email e tente novamente.');
      setMessage('');
      console.error('Error sending password reset email:', error);
    }
  };

  return (
    <div className="ResetPassword">
      <h2>Recuperar Senha</h2>
      <form onSubmit={handleResetPassword}>
        <input 
          type="email" 
          placeholder="Digite seu email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Enviar email de redefinição</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ResetPassword;
