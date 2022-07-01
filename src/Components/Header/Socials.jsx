import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Socials = () => {
  return (
    <div className="Socials">
      <a
        href="https://www.linkedin.com/in/boluwatife-victor-o-440b67198"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/BirdboyBolu" target="_blank">
        <BsGithub />
      </a>
      <a href="ayomide27victor@gmail.com" target="_blank">
        <MdEmail />
      </a>
    </div>
  );
};

export default Socials;
