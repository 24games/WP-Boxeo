import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Blog de Boxeo Chileno. Todos los derechos reservados.</p>
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

