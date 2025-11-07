import './Hero.css';

const Hero = ({ title = "Top 5 Boxeadores de Chile", subtitle = "Conoce a los mayores nombres que elevaron el boxeo chileno al escenario mundial" }) => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </header>
  );
};

export default Hero;

