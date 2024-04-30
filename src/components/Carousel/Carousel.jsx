import React, { Component } from 'react'
import { motion } from 'framer-motion'
import image1 from '../../assets/img/carouselimg1.jpg'
import image2 from '../../assets/img/carouselimg2.jpg'
import image3 from '../../assets/img/carouselimg3.jpg'


const images = [ image1, image2, image3 ]

export default class Carousel extends Component {
  render() {
    return (
        <section className='CarouselSection'>
        <div className="Container">
          <h1>Aventure-se nesse mapa diverso!</h1>

          <motion.div className='carousel'>
            <motion.div className='inner'>
              {images.map(image => (
                <motion.div>
                  <img src={image} className='item-img' alt="texto alter"/>
                  
                </motion.div>
              ))}


              

            </motion.div>


          </motion.div>


          
  
  
        </div>
      </section>
    )
  }
}
