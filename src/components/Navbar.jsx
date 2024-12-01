import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCustomizer from "../hooks/useCustomizer";
import axios from "axios";

import { FaShoppingCart } from "react-icons/fa";


const baseUrl = import.meta.env.VITE_WP_BASEURL

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {mobileMenu} = useCustomizer();
  const [logoUrl, setLogoUrl] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  }

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const mobile = document.querySelector('.nav-links');
    if (isOpen && mobile) {
        mobile.style.backgroundColor = mobileMenu;
    } else {
        mobile.style.backgroundColor = 'transparent';
    }
  }, [isOpen, mobileMenu])

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
    <header>
        <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
            <NavLink to='/' className='logo'>
            <img src={logoUrl} alt="Logo image" />
            </NavLink>
            {/* Hamburger icon below: */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
            </div>
            {/* Navlinks */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {/* Must have li and everything inside for each link */}
                <li>
                    <NavLink
                        to='/'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/about'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        About us
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/involved'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Get Involved
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/shop'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Shop
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/cart'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        <FaShoppingCart />
                    </NavLink>
                </li>

                <button className="primary-btn">
                    <NavLink
                        to='/shop'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Donate
                    </NavLink>
                </button>

            </ul>
        </nav>
        {isOpen && <div className='overlay' onClick={closeMenu}></div>} 
    </header>
  );
};

export default Navbar
