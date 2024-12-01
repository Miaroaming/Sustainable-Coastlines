import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const baseUrl = import.meta.env.VITE_WP_BASEURL

const Footer = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchNavLogo = async () => {
        try {
            const response = await axios.get(`${baseUrl}wp-json/custom/v1/nav-logo`);
            if (response.status === 200) {
                const data = response.data;
                setLogoUrl(data[0]);
            } else {
                console.error('Failed to fetch logo url');
            }
        } catch (error) {
            console.log('error fetchung logo', error);
        }
    };

    fetchNavLogo();
  }, [])


  return (
    <footer>
      <div className='footer-logo'>
      <img src={logoUrl} alt="Logo image" />
        <h3>The Sustainable Coastlines Charitable Trust is a registered charitable entity in terms of the Charities Act 2005. Registration # CC46615. Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution-Noncommercial 3.0 New Zealand License</h3>
      </div>

      <div className='footer-list-cont'>
        <div className='footer-list'>
          <NavLink to='/'>
          Home
          </NavLink>
          <NavLink to='/about'>
            About Us
          </NavLink>
          <NavLink to='/involved'>
            Get Involved
          </NavLink>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          <NavLink to='/cart'>
          Cart
          </NavLink>
        </div>

        <div className='footer-list'>
          <NavLink to='/about'>
          Events
          </NavLink>
          <NavLink to='/partners'>
          Our Partners
          </NavLink>
          <NavLink to='/team'>
          Our Team
          </NavLink>
          <NavLink to='/shop'>
          Donate
          </NavLink>
        </div>

        <div className='footer-list' id='media-icons'>
        <IoLogoLinkedin />
        <FaYoutube />
        <FaTwitter />
        <FaInstagramSquare />
        <FaFacebook />
        </div>

        <img id='litter-footer' src="/images/litter-logo.webp" alt="litter-intelligence-logo" />
      </div>
            
    </footer>
  )
}

export default Footer
