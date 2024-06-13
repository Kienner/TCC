import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="Container">
          <div className="DivContent">
            <img src="/logo.png" alt="" />
           
          </div>

          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Gameplay</a>
            </li>
            <li>
              <a href="#">Personagens</a>
            </li>
            <li>
              <a href="#">Atualizações</a>
            </li>
          </ul>

          <div>
          
          </div>
        </div>
      </footer>
    );
  }
}
