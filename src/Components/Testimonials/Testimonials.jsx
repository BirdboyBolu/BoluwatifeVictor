import React from 'react'
import './Testimonials.css'
import Man1 from '../../Assets/man.jpg'
import Man2 from '../../Assets/mann.jpg'
import Lady1 from '../../Assets/lady.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Man1,
    name: "Derek McCaw",
    review: "Victor is a smart and dedicated developer. His codes are clean, easy to read and free from bugs. When I hired him to handle my business website, I was skeptical about giving the project to a freelance software developer, but Victor proved that he could perform as excellent as a software design agency. He delivered the project on time without any supervision, and his suggestions were top-notch. He is my go-to for all my programming projects. Y'all should contact him today as well. Highly recommended."
  },
  {
    avatar: Lady1,
    name: "Chantelle Parish",
    review: "I was on the verge of expanding my beauty business, and I was advised to create a website for that. All I needed to do was explain my ideas to Victor and he created a website that truly covered my beauty brand. The color choice, site responsivess, and overall performance of the website was everything I envisioned. My clients say it is easier to book an appointment on my website and they leave positive reviews. Retreat Beauty is doing great and I want to appreciate Victor for creating a website that aptly represents my ideas."
  },
  {
    avatar: Man2,
    name: "Josh Peters",
    review: "As a professional writer in the cryptocurrency world, you need to be updated with the ever expanding trends in the industry. I hired Victor as a web3 researcher and writer and he made my job seamless. He is up to speed with the important activities in the Web3 world, from DeFi, NFTs, and Blockchain issues. Even better, his writing skills are superb as he always breaks down complex and technical web3 concepts in a way anyone will understand. That is what I expect from a brilliant Web3 technical writer, and Victor did not fall short of these expectations. You should check his portfolios too."
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
    
      <h2>Reviews From Clients</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       >
        
       {
        data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt=''/>
                </div>
                <div>
                <h5  className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
                </div>
              </SwiperSlide>
            )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials