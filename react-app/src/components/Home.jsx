import { useEffect } from 'react';
import Hero from './Hero';
import BlogIntro from './BlogIntro';
import FighterCard from './FighterCard';
import Conclusion from './Conclusion';
import Footer from './Footer';
import { fighters } from '../data/fighters';
import '../index.css';

const Home = () => {
  useEffect(() => {
    // Smooth scroll animation for page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  return (
    <>
      <Hero />
      <main className="container">
        <BlogIntro />
        {fighters.map((fighter) => (
          <FighterCard key={fighter.id} fighter={fighter} />
        ))}
        <Conclusion />
      </main>
      <Footer />
    </>
  );
};

export default Home;

