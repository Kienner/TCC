import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

// Importe os componentes necessários
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import VLibrasComponent from '../Vlibras/Vlibras';

// Importe os ícones necessários
import { LuSword } from "react-icons/lu";
import { TbMapSearch } from "react-icons/tb";
import { GiBookCover } from "react-icons/gi";
import { RiSave3Fill } from "react-icons/ri";

import './Home.scss';

function Home() {
  const slides = [
    { imageUrl: '/dentrocasatapete.jpeg' },
    { imageUrl: '/foracasa.jpeg' },
    { imageUrl: '/dialogoforacasa.jpeg' },
    { imageUrl: '/dialogodentrocasa.jpeg' },
  ];

  const [recentUpdates, setRecentUpdates] = useState([]);

  useEffect(() => {
    const fetchRecentUpdates = async () => {
      try {
        const updatesCollectionRef = collection(db, 'posts');
        const updatesQuery = query(updatesCollectionRef, orderBy('createdAt', 'desc'), limit(3));
        const snapshot = await getDocs(updatesQuery);
        const updatesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecentUpdates(updatesData);
      } catch (error) {
        console.error('Erro ao buscar as últimas postagens:', error);
      }
    };

    fetchRecentUpdates();
  }, []);

  return (
    <>
      <Header />

      <section className='SecBanner'>
        <div className="Container">
          <div className="div-texts">
            <h1 id="h1">Brazil Time Odyssey</h1>
            <h3>Entre nessa aventura</h3>
            <p>Ao explorar um contexto multiversal, eles serão levados a uma jornada emocionante através de diferentes períodos e realidades alternativas do Brasil.</p>
            <p>Prepare-se para descobrir segredos antigos, enfrentar desafios extraordinários e desvendar os mistérios entrelaçados deste mundo vibrante e único.</p>

            <div className="div-button">
              <a href="/game.zip" download>
                <button>Download</button>
              </a>
            </div>
          </div>

          <div className="div-img">
            <video height="360" autoPlay muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className='UltimasNoticasSection'>
        <div className="Container">
          <div className="CardsContainer">
            {recentUpdates.map(update => (
              <div className="Card" key={update.id}>
                <h2>{update.title}</h2>
                <img src={update.imageUrl} alt="Imagem da Postagem" />
              </div>
            ))}
          </div>
        </div>
        
      </section>

      <section className='CardsSection'>
        <div className="Container">
          <div className="CardsContainer">
            <div className="Card">
              <img src="\Player_Attack.gif" alt="" />
              <h2>Exploração</h2>
              <p>Descubra o Brasil em toda sua glória: desde a selva densa até as alturas do espaço.</p>
            </div>
            <div className="Card">
              <img src="\Player_Attack.gif" alt="" />
              <h2>Combate</h2>
              <p>Desvende segredos antigos, aprenda com a história e desbloqueie conhecimentos profundos.</p>
            </div>
            <div className="Card">
              <img src="\Player_Attack.gif" alt="" />
              <h2>Conhecimento</h2>
              <p>Enfrente desafios épicos, vença batalhas intensas e torne-se o herói definitivo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='SobreSection' id="Sobre">
        <div className="Wrapper">
          <div className="Container">
            <h2> Um pouco mais sobre <span>Brazil Time Odyssey</span></h2>
            <img src="/areia 1.jpg" alt="" />
            <img src="/dialogoforacasa.jpeg" alt="" />
          </div>
          <div className="Description">
            <p>Com uma mistura de elementos de ficção científica e história brasileira, o jogo promete uma experiência imersiva e emocionante para os jogadores explorarem e descobrirem as diversas facetas do Brasil em um contexto multiversal.</p>
          </div>
        </div>
      </section>

      <section className='SectionGameplay' id="Gameplay">
        <div className="Container">
          <div className="Content">
            <div className='TitleDiv'>
              <h2>Gameplay <span>e</span> possibilidades!</h2>
            </div>
            <div className="CardsDiv">
              <div className="Card">
                <LuSword className='icon' />
                <h4>Aventura Única</h4>
                <p>Deslumbre uma aventura diferente!</p>
             
              </div>
              <div className="Card">
                <TbMapSearch className='icon' />
                <h4>Explore o Mapa</h4>
                <p>Descubra caminhos para a diversão!</p>
               
              </div>
              <div className="Card">
                <GiBookCover className='icon' />
                <h4>Aprenda</h4>
                <p>Aprenda sobre um novo universo enquanto se diverte</p>
              
              </div>
              <div className="Card">
                <RiSave3Fill className='icon' />
                <h4>Aventura Única</h4>
                <p>Mantenha seu progresso de jogo salvo!</p>
               
              </div>
            </div>
          </div>
          <div className="WrapperMidia">
            <img src="/cama 2.jpg" alt="" />
          </div>
        </div>
      </section>

      <Slider slides={slides} />
      <VLibrasComponent />
      <Footer />
    </>
  );
}

export default Home;
