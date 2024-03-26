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
            <li>
              <a href=""><span>A</span>tualizações</a>
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
