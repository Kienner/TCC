import React, { Component } from 'react';
import './CadastrarAtt.scss';

export default class CadastrarAtt extends Component {
  render() {
    return (
      <>
        <form action="" method="post">
          <h1>Cadastro de Atualizações</h1>
          <div className="Container">
            

            <div className="Box">
              <label>Imagem</label>
              <input type="file" name="imagem" />
            </div>


            <div className="WrapInputs">
              <div className="Box BoxTitulo">
                <label>Titulo</label>
                <input type="text" name="titulo" />
              </div>

              <div className="Box">
                <label>Subtitulo</label>
                <input type="text" name="subtitulo" />
              </div>
            </div>


            <div className="Box">
              <label>Notícia</label>
              <textarea id="textarea" name="atualizacao">
                It was a dark and stormy night...
              </textarea>
            </div>

            <div className="WrapInputs">
              <div className="Box">
                <label>Data</label>
                <input type="date" name="data" />
              </div>

              <div className="Box">
                <label>Autor</label>
                <select id="autor" name="autor">
                  <option value="autor1">Kenner</option>
                  <option value="autor2">Cauã</option>
                  <option value="autor3">Eduardo</option>
                  <option value="autor3">Nicolas</option>
                </select>
              </div>
            </div>

            <button>Cadastrar</button>

          </div>
        </form>
      </>
    );
  }
}
