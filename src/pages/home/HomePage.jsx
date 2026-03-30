import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Stats from '../../components/stats/Stats';
import Steps from '../../components/steps/Steps';
import Pricing from '../../components/pricing/Pricing';
import CTASection from '../../components/workflow/CTASection';
import Footer from '../../components/footer/Footer';
import ProductsSection from '../../components/products/ProductsSection';

const HomePage = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar cart={cart} />
      <Banner/>
      <Stats/>
      <ProductsSection cart={cart} setCart={setCart} />
      <Steps/>
      <Pricing/>
      <CTASection/>
      <Footer/>
    </div>
  );
};

export default HomePage;