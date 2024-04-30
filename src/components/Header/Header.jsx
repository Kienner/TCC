import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router
import { auth, db } from '../../services/firebaseConfig';
import './Header.scss';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Lista de emails de administradores
    const adminEmails = ['admincaua@gmail.com', 'adminkenner@gmail.com', 'adminnicolas@gmail.com', 'admineduardo@gmail.com'];

    // Verifica se o usuário está autenticado
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Se estiver autenticado, atualiza o estado com os detalhes do usuário
        setCurrentUser(user);
        // Verifica se o usuário é um administrador com base no email
        setIsAdmin(adminEmails.includes(user.email));
      } else {
        // Se não estiver autenticado, define o estado como null
        setCurrentUser(null);
        setIsAdmin(false);
      }
    });

    // Cancela a inscrição ao desmontar o componente
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      // Logout bem-sucedido, o estado do usuário será atualizado automaticamente pelo onAuthStateChanged
    }).catch(error => {
      console.error('Erro ao fazer logout:', error);
    });
  };

  return (
    <header>
      <nav>
        <div className="LogoDiv">
          <a href="/">
            <img src="\src\assets\img\logo.png" alt="" />
          </a>
        </div>

        <ul>
          <li>
            <a href="/"><span>M</span>enu</a>
          </li>
          <li>
            <a href="/#Sobre"><span>S</span>obre</a>
          </li>
          <li>
            <a href="/#Gameplay"><span>G</span>ameplay</a>
          </li>
          <li>
            <a href="/historia"><span>H</span>istória</a>
          </li>

          <li>
            <a href="/Posts"><span>N</span>oticias </a>
          </li>

          {/* Exibe o link "Cadastrar atualizações" apenas se o usuário for um administrador */}
          {isAdmin && (
            <li>
              <a href="/atualizacao"><span>C</span>adastrar atualizações</a>
            </li>
          )}
          
          {currentUser && (
  <>
    <li>Bem-vindo, {currentUser.displayName || currentUser.email}</li>
    <li className="ButtonsDiv">
      <button onClick={handleLogout}>Encerrar</button>
    </li>
  </>
)}
          {/* Use o componente Link do React Router para redirecionar para as rotas desejadas */}
          <div className="ButtonsDiv">
            {!currentUser && (
              <>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/register"><button>Cadastrar-se</button></Link>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
