import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Blog de Boxeo Chileno. Todos los derechos reservados.</p>
        <div className="footer-links">
          <Link to="/terminos-y-condiciones" className="footer-link">Términos y Condiciones</Link>
          <span className="footer-link-separator">|</span>
          <Link to="/politica-de-privacidad" className="footer-link">Política de Privacidad</Link>
        </div>
        <p className="footer-note">
          Un homenaje a los grandes nombres que elevaron el boxeo chileno al escenario mundial.
        </p>
        <p className="footer-disclaimer">
          Este blog es exclusivamente informativo y no posee intención de obtener retornos financieros. Todo el contenido es producido únicamente para fines educacionales y de compartimiento de conocimiento sobre la historia del boxeo chileno.
        </p>
        <p className="footer-keywords">
          Boxeadores Chilenos | Boxeo Chile | Historia del Boxeo | Campeones Mundiales | Boxeo Profesional
        </p>
      </div>
    </footer>
  );
};

export default Footer;

