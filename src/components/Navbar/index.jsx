import React from 'react';
import './style.scss'
import logo from '../../assets/img/icons/logo.svg'
const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <img src={logo} alt='' />
                <nav>
                    <a href="/direction">Direction</a>
                    <a href="/command">Command</a>
                    <a href="/services">Services</a>
                    <a href="/tools">Tools</a>
                    <a href="/clients">Clients</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/language">Language</a>
                    <button>Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
