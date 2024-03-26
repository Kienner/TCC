import { useState } from 'react';
import './Home.scss';

import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';







function Home() {
 
  return (
    <>
      <Header />
  
      <Banner />



    <section className='CardsSection'>
      <div className="Container">

        <h2>Explore o passado, crie o futuro</h2>
        <p>to sem ideia para essa bosta texto</p>

        <div className="CardsContainer">
          <div className="Card">
            <img src="\src\assets\img\Player_Attack.gif" alt="" />
            <h2>Exploração</h2>
            <p>Lorem ipsum dolor sit amet. Non qui cupiditate, fuga officia porro dolorum, culpa iure maxime</p>
          </div>

          <div className="Card">
            <img src="\src\assets\img\Player_Attack.gif" alt="" />
            <h2>Combate</h2>
            <p>Lorem ipsum dolor sit amet. Non qui cupiditate, fuga officia porro dolorum, culpa iure maxime</p>

          </div>

          <div className="Card">
            <img src="\src\assets\img\Player_Attack.gif" alt="" />
            <h2>Conhecimento</h2>
            <p>Lorem ipsum dolor sit amet. Non qui cupiditate, fuga officia porro dolorum, culpa iure maxime</p>


          </div>

        </div>
       
      </div>
      

      <hr></hr>
    </section>


      <section className="SobreSection">
        <div className="Container">
          <div className="Content">
            <h2>Sobre o game</h2>

            <div className="TextContainer">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text industry. Lorem Ipsum has been industry. Lorem Ipsum has
                beenindustry. Lorem Ipsum has beenindustry. Lorem Ipsum has been
              </p>
            </div>

            <button>Download</button>
          </div>

          <div className="MidiaContainer">
            <img src="https://i.pinimg.com/originals/0f/ef/75/0fef753b9dba0220bc67febe84c3a4d7.png" alt="" />
          </div>
        </div>

      </section>



      <section className="GameplaySection">
        <div className="Container">
          <div className="Content">
            <h2>Gameplay</h2>

            <div className="TextContainer">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text industry. Lorem Ipsum has been industry. Lorem Ipsum has
                beenindustry. Lorem Ipsum has beenindustry. Lorem Ipsum has been
              </p>
            </div>

          </div>

          <div className="MidiaContainer">
            <img src="https://i.pinimg.com/originals/0f/ef/75/0fef753b9dba0220bc67febe84c3a4d7.png" alt="" />
          </div>
        </div>

      </section>










      {/* <Parallax />*/ }

      <Footer />
    </>
  );
}

export default Home;
