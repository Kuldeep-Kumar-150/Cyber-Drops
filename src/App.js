import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyNav from './components/MyNav';
// import Preloader from './components/Preloader';
import MyHeader from './components/MyHeader';
import OurMission from './components/OurMission';
import Partners from './components/Partners';
import OurAlgo from './components/OurAlgo';
import WhatDo from './components/WhatDo';
import Works from './components/Works';
import Team from './components/Team';
import Faqs from './components/Faqs';
import MyFooter from './components/MyFooter';
import BackToTop from './components/BackToTop';
import RoadMap2 from './components/RoadMap2';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <BackToTop />
      {/* <Preloader /> */}
      <div className='d-flex flex-column vh_100_xl'>
        <MyNav />
        <MyHeader />
      </div>
      <OurMission />
      <Partners />
      <OurAlgo />
      <WhatDo />
      <Works />
      <Team />
      <RoadMap2/>
      <Faqs />
      <MyFooter />
    </>
  );
}

export default App;
