import React, { Component } from 'react';
import './Carousel.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default class MyCarousel extends Component {
  render() {
    return (
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
        >
        
          <SwiperSlide>
            <img className='img-slide' src="/src/assets/img/sobre.jpg" alt="Imagem do primeiro slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-slide' src="/src/assets/img/sobre.jpg" alt="Imagem do primeiro slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-slide' src="/src/assets/img/sobre.jpg" alt="Imagem do primeiro slide" />
          </SwiperSlide>

          <SwiperSlide>
            <img className='img-slide' src="/src/assets/img/sobre.jpg" alt="Imagem do segundo slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-slide' src="/src/assets/img/sobre.jpg" alt="Imagem do terceiro slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-slide' src="/src/assets/img/sobre.jpg" alt="Imagem do quarto slide" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
