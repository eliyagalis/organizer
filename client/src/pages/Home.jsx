import React from 'react';
import Header from '../components/Header';
// import scaleImage from '../assets/scaleIcon.png';

const Home = () => {
  return (
    <>
        <Header />
        <div className='home-paragraph'>
            <div className='home-paragraph-title'>
                Boost your organization management with <b>organizer</b>
            </div>
            <p className='home-paragraph-content'>The ultimate platform for seamless collaboration and efficient management.</p>
        </div>
        {/* <img src={scaleImage} /> */}
        <img src="../assets/scaleIcon.png" alt="Scale Icon"/>
        <div className='home-card'>
        </div>
    </>
  )
}

export default Home