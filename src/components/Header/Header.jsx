import './Header.scss';


function Header() {
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
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Gameplay</a>
            </li>
            <li>
              <a href="">Personagens</a>
            </li>
            <li>
              <a href="">Atualizações</a>
            </li>

            <div className="ButtonsDiv">
              <button>Login</button>
              <button>Cadastrar-se</button>
            </div>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
