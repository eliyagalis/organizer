import React from 'react';
import Header from '../components/Header';
import scaleImage from '../assets/scaleIcon.png';
import electricImage from '../assets/electric-icon.png';
import configImage from '../assets/config-icon.png';
import { Link } from 'react-router';
import Footer from '../components/Footer';
import '../styles/HomeStyle.css';

const Home = () => {
  return (
    <div className='home-page'>
        <Header />
        <div className='big-br'/>
        <div className='home-paragraph'>
            <div className='home-paragraph-title'>
                Boost your management <br/> with <span className='bolder'>organizer</span>
            </div>
            <p className='home-paragraph-content'>The premier platform for seamless collaboration and impactful management</p>
        </div>
        <div className='big-br'></div>
        <div className='cards-paragraph-container'>
            <div className='cards-section'>
                <div className='home-card'>
                    {<img src={scaleImage} alt='scale image' className='home-card-image' />}
                    <div className='home-card-title'>
                     Together we <span className='bolder'>scale</span>
                    </div>
                    <p className='home-card-content'>
                        Expand your organization’s reach and efficiency with our scalable solutions designed to grow with your needs.
                    </p>
                </div>
                <div className='border'/>
                <div className='home-card'>
                    {<img src={electricImage} alt='electric image' className='home-card-image' />}
                    <div className='home-card-title'>
                      Digital <span className='bolder'>solutions</span>
                    </div>
                    <p className='home-card-content'>
                      Leverage our cutting-edge digital tools and services to streamline your workflows and maximize productivity.
                    </p>
                </div>
                <div className='border'/>
                <div className='home-card'>
                    {<img src={configImage} alt='config image' className='home-card-image' />}
                    <div className='home-card-title'>
                        Your <span className='bolder'>configuration</span>
                    </div>
                    <p className='home-card-content'>
                        Customize your experience with tailored configuration options to suit your unique business needs.
                    </p>
                </div>
            </div>
            <Link className='button'>Learn more</Link>
            
        </div>
        <div className='big-br'/>
            <div>
                <div className='home-card-title bolder'>Practical tools</div>
                <p className='home-card-content'>Managing projects and tasks has never been easier</p>
            </div>
        <div className='white-gardient'/>
        <Footer />
    </div>
  )
}

export default Home