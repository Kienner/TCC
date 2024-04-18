import React, { useEffect, useState } from 'react';
import { auth, db } from '../../services/firebaseConfig';
import './Header.scss';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Se estiver autenticado, atualiza o estado com os detalhes do usuário
        setCurrentUser(user);
        // Verifica se o usuário é um administrador com base no email
        setIsAdmin(user.email === 'administrador01@gmail.com');
      } else {
        // Se não estiver autenticado, define o estado como null
        setCurrentUser(null);
        setIsAdmin(false);
      }
    });

    // Cancela a inscrição ao desmontar o componente
    return () => unsubscribe();
  }, []);

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
            <a href=""><span>M</span>enu</a>
          </li>
          <li>
            <a href=""><span>S</span>obre</a>
          </li>
          <li>
            <a href=""><span>G</span>ameplay</a>
          </li>
          <li>
            <a href=""><span>P</span>ersonagens</a>
          </li>
          {/* Exibe o link "Cadastrar atualizações" apenas se o usuário for um administrador */}
          {isAdmin && (
            <li>
              <a href="/cadastrar-atualizacoes"><span>C</span>adastrar atualizações</a>
            </li>
          )}
          <li>
            <a href=""><span>A</span>tualizações </a>
          </li>
          {currentUser && ` - Bem-vindo, ${currentUser.displayName || currentUser.email}`}
          <div className="ButtonsDiv">
            {!currentUser && (
              <>
                <button>Login</button>
                <button>Cadastrar-se</button>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
