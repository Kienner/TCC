import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VLibrasComponent from '../Vlibras/Vlibras';
import './History.scss';

function History() {
  return (
    <>
      <Header />
      <section className='HistoriaSection'>
        <div className="container">

          <div className='part1'>

            <div className='video-div'>
              <video height="360" autoPlay muted loop>
                <source src="/cutpart1.mp4" type="video/mp4" />
              </video>
            </div>

            <div className='text-div'>
              <p>Em "Brazil Time Odyssey", os jogadores embarcam em uma emocionante aventura que mistura ficção científica com a história do Brasil. O protagonista, um jovem do futuro, desperta desorientado em uma floresta brasileira no ano de 1480, onde é salvo de criaturas sombrias por Alexsander, um cientista do ano 2500.</p>
            </div>

          </div>

          <div className='part2 invert'>

            <div className='text-div'>
              <p>Alexsander revela que foi sequestrado pelos Time Rifters, um grupo que manipula o tempo, e transportado para o Brasil pré-colonial após um acidente em seu laboratório. As distorções temporais também trouxeram criaturas conhecidas como Sombrios. Para corrigir as falhas temporais e retornar aos seus tempos, eles precisam reunir fragmentos de um artefato temporal espalhados pelos marcos históricos do Brasil.</p>
            </div>

            <div className='video-div'>
              <video height="360" autoPlay muted loop>
                <source src="/cutpart2.mp4" type="video/mp4" />
              </video>
            </div>

          </div>

          <div className='part3'>

            <div className='video-div'>
              <video height="360" autoPlay muted loop>
                <source src="/cutpart3.mp4" type="video/mp4" />
              </video>
            </div>

            <div className='text-div'>
              <p>Enquanto viajam, Alexsander compartilha histórias do futuro e do passado, e o jovem protagonista descobre habilidades e coragem inesperadas. A amizade e confiança entre eles se fortalecem, tornando-os uma dupla imbatível.</p>
            </div>

          </div>

          <p className='p-end'>A narrativa culmina em um confronto épico com os Time Rifters, onde as escolhas do protagonista determinarão o destino de todos. "Brazil Time Odyssey" transporta os jogadores para um período fascinante da história brasileira, explorando os limites da ciência e da imaginação.</p>

        </div>

      </section>
      <VLibrasComponent />
      <Footer />
    </>
  );
}

export default History;
