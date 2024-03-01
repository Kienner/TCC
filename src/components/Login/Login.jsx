import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
  render() {
    return (
      <>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body class="login-page">
          <section class="area-login"> 
          <div class="login">
            <div>
              <img src="/src/assets/img/logo.png" alt="" />
              <form method='POST' action=''>
                <input type="text" name='nome' placeholder='Nome de usuario' autoFocus />
                <input type="password" name='senha' placeholder='Senha'  />
                <input type="submit" value="entrar" />
              </form>
              <p>  Não tem uma conta? <a href="">Criar conta</a></p>
            </div>
          </div>
          </section>
          </body>
        </html>
      </>
    );
  }
}

