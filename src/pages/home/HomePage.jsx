import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Stats from '../../components/stats/Stats';
import Steps from '../../components/steps/Steps';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Steps/>
    </div>
  );
};

export default HomePage;