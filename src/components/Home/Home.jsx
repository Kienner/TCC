import { useState } from 'react';
import './Home.scss';

import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';




import { LuSword } from "react-icons/lu";
import { TbMapSearch } from "react-icons/tb";
import { GiBookCover } from "react-icons/gi";
import { RiSave3Fill } from "react-icons/ri";

function Home() {

  const slides = [
    { imageUrl: '/src/assets/img/slide1.jpg' },
    { imageUrl: '/src/assets/img/slide2.jpg' },
    { imageUrl: '/src/assets/img/slide3.jpg' },
    { imageUrl: '/src/assets/img/slide4.jpg' },
  ];
  
  return (
    <>
      <Header />
      <Banner />

      <section className='CardsSection'>
        <div className="Container">
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

      <section className='SobreSection' id="Sobre">
        <div className="Wrapper">
          <div className="Container">
            <h2> Um pouco mais sobre <span>Brazil Time Odissey</span></h2>
            <img src="https://i.pinimg.com/originals/0f/ef/75/0fef753b9dba0220bc67febe84c3a4d7.png" alt="" />
            <img src="https://i.pinimg.com/originals/0f/ef/75/0fef753b9dba0220bc67febe84c3a4d7.png" alt="" />
          </div>
          <div className="Description">
            <p>Com uma mistura de elementos de ficção científica e história brasileira, o jogo promete uma experiência imersiva e emocionante para os jogadores explorarem e descobrirem as diversas facetas do Brasil em um contexto multiversal.</p>  
          </div>  
        </div>
      </section>

      <section className='SectionGameplay'>
        <div className="Container">
          <div className="Content">
            <div className='TitleDiv'> 
              <h2>Gameplay <span>e</span> possibilidades!</h2>
            </div>
            <div className="CardsDiv">
              <div className="Card">
                <LuSword className='icon'/>
                <h4>Aventura Única</h4>
                <p>Deslumbre uma aventura louca!</p>
                <p>empolgue-se, jogador</p>
              </div>
              <div className="Card">
                <TbMapSearch className='icon' />
                <h4>Aventura Única</h4>
                <p>Deslumbre uma aventura louca!</p>
                <p>empolgue-se, jogador</p>
              </div>
              <div className="Card">
                <GiBookCover className='icon'/>
                <h4>Aventura Única</h4>
                <p>Deslumbre uma aventura louca!</p>
                <p>empolgue-se, jogador</p>
              </div>
              <div className="Card">
                <RiSave3Fill className='icon'/>
                <h4>Aventura Única</h4>
                <p>Deslumbre uma aventura louca!</p>
                <p>empolgue-se, jogador</p>
              </div>
            </div>
          </div>
          <div className="WrapperMidia">
            <img src="https://i.pinimg.com/originals/0f/ef/75/0fef753b9dba0220bc67febe84c3a4d7.png" alt="" />
          </div>
        </div>
      </section>
      
       <Slider slides={slides} />

      <Footer />
    </>
  );
}

export default Home;