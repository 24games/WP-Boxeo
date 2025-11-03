import { useEffect } from 'react';
import Hero from './components/Hero';
import BlogIntro from './components/BlogIntro';
import FighterCard from './components/FighterCard';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import { fighters } from './data/fighters';
import './index.css';

function App() {
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
}

export default App;
