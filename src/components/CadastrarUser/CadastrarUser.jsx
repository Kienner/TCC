import React, { Component } from 'react';
import './CadastrarUser.scss';



export default class CadastrarUser extends Component {
  render() {

    return (
      

        <div className="WrapperForm">


            <form>  
                <div className="WrapperItens">
                    <label>Nome</label>
                    <input type="text" />
                </div>

                <div className="WrapperItens">
                    <label>Email</label>
                    <input type="text" />
                </div>

                <div className="WrapperItens">
                    <label>Senha</label>
                    <input type="text" />
                </div>

                <div className="WrapperItens">
                    <label>Data</label>
                    <input type="date" />
                </div>

                <div className="WrapperItens">
                    <input type="checkbox" />
                    <label>Concordo com os termos de uso</label>
                </div>

                <div className="ButtonDiv">
                    <input type="submit" value={"Enviar"} />

                </div>

        </form>




        </div>

        




    )

  }

}
