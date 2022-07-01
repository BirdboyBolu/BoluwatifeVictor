import React from 'react';
import './About.css';
import ME from '../../Assets/me-aboutt.png';
import { FaAward } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { GiOpenFolder } from 'react-icons/gi';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>25+ Clients</small>
            </article>

            <article className="about__card">
              <GiOpenFolder className="about__icon" />
              <h5>Projects</h5>
              <small>
                50+ Freelance Projects, Collaborations, and Internships
              </small>
            </article>
          </div>

          <p>
            Boluwatife is meticulous web and mobile developer with over 2 years
            of front end programming experience, a Web3, NFT, and Blockchain
            enthusiast. Also, he is a Udemy, W3C, and Sololearn certified
            software developer. Boluwatife is a graduate of the Qala Bitcoin and
            Lightning Development Internship program. <br></br>On the writing
            end, Boluwatife possesses great technical writing and content
            managing skills. With over 5 years of technical writing experience,
            he has written numerous articles, copies, and produced content for
            companies, clients, blogs, and websites. Boluwatife has written a
            book on cryptocurrency and he co-owns a crypto/blockchain
            newsletter. He focuses on several niches like Web3/blockchain/NFT,
            Software as a Service (SaaS), Real Estate niches, to mention a few.{' '}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Discuss
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
