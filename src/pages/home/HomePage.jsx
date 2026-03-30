import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Stats from '../../components/stats/Stats';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stats/>
    </div>
  );
};

export default HomePage;