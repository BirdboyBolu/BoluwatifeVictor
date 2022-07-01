import React from 'react'
import  './Nav.css'
import {AiFillHome} from 'react-icons/ai';
import {FaUserAstronaut} from 'react-icons/fa';
import {AiOutlineFileProtect} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md';
import {BsChatDotsFill} from 'react-icons/bs';


const Nav = () => {
  return (
    <nav>
      <a href='#' ><AiFillHome /></a>
      <a href='#about'><FaUserAstronaut /></a>
      <a href='#experience'><AiOutlineFileProtect /></a>
      <a href='#services'><MdComputer /></a>
      <a href='#contacts'><BsChatDotsFill /></a>
      
    </nav>
  )
}

export default Nav