import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Stats from '../../components/stats/Stats';
import Steps from '../../components/steps/Steps';
import Pricing from '../../components/pricing/Pricing';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Steps/>
      <Pricing/>
    </div>
  );
};

export default HomePage;