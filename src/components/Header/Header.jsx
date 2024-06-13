// Header.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig';
import './Header.scss';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const adminEmails = ['admincaua@gmail.com', 'adminkenner@gmail.com', 'adminnicolas@gmail.com', 'admineduardo@gmail.com'];
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        setIsAdmin(adminEmails.includes(user.email));
      } else {
        setCurrentUser(null);
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().catch(error => {
      console.error('Erro ao fazer logout:', error);
    });
  };

  return (
    <header>
      <nav>
        <div className="LogoDiv">
          <a href="/">
            <img src="\logo.png" alt="logo" />
          </a>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
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
