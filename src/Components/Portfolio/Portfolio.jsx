import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/bellebeauty.png'
import IMG2 from '../../Assets/robo.png'
import IMG3 from '../../Assets/headline.png'
import IMG4 from '../../Assets/realestate.png'
import IMG6 from '../../Assets/shoppingcart.png'
import IMG7 from '../../Assets/Todolist.png'


const Portfolio = () => {
  return (
    <section id='portolio'>
      <h2>Web Development Portfolio</h2>
    
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Retreat Beauty Salon</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/BirdboyBolu' className='btn'>GitHub</a>
          <a href='https://birdboybolu.github.io/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt='' />
          </div>
          <h3>To Do List</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/BirdboyBolu' className='btn'>GitHub</a>
          <a href='https://birdboybolu.github.io/todolist/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Ironstone Equities</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/BirdboyBolu' className='btn'>GitHub</a>
          <a href='file:///C:/Users/Client/Documents/GitHub/real%20estate%20website/index.html' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Shopping Cart</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/BirdboyBolu' className='btn'>GitHub</a>
          <a href='https://birdboybolu.github.io/shoppingcart/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Headlines27 Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/BirdboyBolu' className='btn'>GitHub</a>
          <a href='file:///C:/Users/Client/Documents/GitHub/headlines%20website/headlines.html' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Robo Friends NFT</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/BirdboyBolu' className='btn'>GitHub</a>
          <a href='https://birdboybolu.github.io/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  
  )
  
}

export default Portfolio