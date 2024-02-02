import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
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
            <img src="\src\assets\img\sobre.jpg" />
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
            <img src="\src\assets\img\sobre.jpg" />
          </div>
        </div>
      </section>

      <section className="PersonagensSection">
        <div className="Container">
          <div className="TextContainer">
            <h4>Conheça os</h4>
            <h2>Personagens</h2>
          </div>

          <div className="ContainerCards">
            <div className="Card">
              <img src="\src\assets\img\sobre.jpg" alt="" />
            </div>

            <div className="Card">
              <img src="\src\assets\img\sobre.jpg" alt="" />
            </div>

            <div className="Card">
              <img src="\src\assets\img\sobre.jpg" alt="" />
            </div>

            <div className="Card">
              <img src="\src\assets\img\sobre.jpg" alt="" />
            </div>

            <div className="Card">
              <img src="\src\assets\img\sobre.jpg" alt="" />
            </div>

            <div className="Card">
              <img src="\src\assets\img\sobre.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
