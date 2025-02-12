import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="https://www.linkedin.com/in/amany-al-rouby-617b0b236" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="https://github.com/Amany17m" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:amanyroby117@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
