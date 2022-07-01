import React from 'react';
import './Services.css';
import { AiOutlineCheck } from 'react-icons/ai';

const Services = () => {
  return (
    <section id="services">
      <h2> Services Rendered</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Website creation and designs.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Debugging and fixing bug issues on websites.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Ensure the website is mobile responsiveness and meets an optimum user interface experience.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Website maintenance.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Build products that meets the clients' and end users' needs.</p>
            </li>
          </ul>
        </article>
        {/* End of Web dev */}
        <article className="service">
          <div className="service__head">
            <h3>Web3 Technical Writing</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Explain and translate technical concepts through brilliant, high quality, and well-written guides.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Collaborate with web3 developers by documenting technical articles.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Conduct research on complex web3 concepts for stakeholders.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>write content and copies to market web3 technologies, protocols, and products.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Stay updated and share the latest news and trends in the Blockchain/Web3 industry</p>
            </li>
          </ul>
        </article>
        {/* End of Technical writing */}
      </div>
    </section>
  );
};

export default Services;
