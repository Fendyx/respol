import React from 'react';

// Импортируем секции (проверь пути, если что-то двигал)
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Products } from '../components/sections/Products';
import { Logistics } from '../components/sections/Logistics';
import { WhyUs } from '../components/sections/WhyUs';
import { CTA } from '../components/sections/CTA';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products /> 
      <Logistics />
      <WhyUs />
      <CTA />
    </main>
  );
};