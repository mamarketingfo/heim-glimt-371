import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import PricingTable from '../components/PricingTable';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <main>
        <HeroSection />
        <Benefits />
        <HowItWorks />
        <PricingTable />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;