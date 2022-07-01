import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HMTL</h4>
              <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
                <div>          
              <h4>CSS</h4>
              <small className="text-light"></small> 
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light"></small> 
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>ReactJS</h4>
              <small className="text-light"></small> 
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
              <h4>Redux</h4>
              <small className="text-light"></small> 
              </div>
            </article>
          </div>
        </div>
{/*  */}
        <div className="experience__writing">
        <h3>Technical Writing</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Technical Documentation</h4>
              <small className="text-light"></small>
               </div>
            </article>
            <article className="experience__details" >
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MS Office proficiency</h4>
              <small className="text-light"></small> 
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Search Engine Optimization(SEO)</h4>
              <small className="text-light"></small> 
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Copy Editing</h4>
              <small className="text-light"></small> 
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Research Skills</h4>
              <small className="text-light"></small> 
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
