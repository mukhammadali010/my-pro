import React from 'react';
import downloadImage from '../../assets/img/download.jpeg'; // Adjust the path accordingly
import './style.scss'
import logo from '../../assets/img/icons/logo.svg'
import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import contentImg from '../../assets/img/hero-304cdf863047286a47c1e063154824d8.svg'

const Hero = () => {
    const containerStyle = {
        backgroundImage: `url(${downloadImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',

    };

    const typewriterRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['|Optimization IT consulting infrastructure', '|IT consulting' ,'|Development of mobile applications' , '|User interface, User experience design'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(typewriterRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <main>
            <section id='hero' style={containerStyle}>
                <div className='container' >
                    <div className='content'>
                        <h1><img src={logo} alt="" /></h1>
                        <h2>IT-Outsourcing Company</h2>
                        <div className="Typewriter__wrapper">
                            <span ref={typewriterRef}></span>
                        </div>
                        <button>Contact</button>
                    </div>
                    <img src={contentImg} className='contentImg' alt="" />
                </div>
            </section>
        </main>
    );
};

export default Hero;
