import { Link } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import './TerminosCondiciones.css';

const TerminosCondiciones = () => {
  return (
    <>
      <Hero 
        title="Términos y Condiciones"
        subtitle="Condiciones de uso del Blog de Boxeo Chileno"
      />
      <main className="legal-page">
        <Link to="/" className="back-link">← Volver al inicio</Link>
        
        <p className="last-updated">Última actualización: 19 de Diciembre de 2024</p>
        
        <div className="legal-content">
          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar el Blog de Boxeo Chileno, usted acepta cumplir con estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestro sitio web.</p>
          
          <h2>2. Uso del Sitio Web</h2>
          <p>El Blog de Boxeo Chileno es un sitio web informativo y educativo dedicado a compartir conocimiento sobre la historia del boxeo chileno. El uso de este sitio está destinado únicamente para fines informativos y educacionales.</p>
          
          <h3>2.1. Uso Permitido</h3>
          <ul>
            <li>Leer y consultar el contenido disponible</li>
            <li>Compartir enlaces a nuestros artículos mediante redes sociales</li>
            <li>Utilizar el contenido para fines educativos y de investigación personal</li>
          </ul>
          
          <h3>2.2. Uso Prohibido</h3>
          <ul>
            <li>Reproducir, copiar o distribuir el contenido sin autorización expresa</li>
            <li>Utilizar el contenido para fines comerciales sin permiso</li>
            <li>Modificar, alterar o manipular el contenido del sitio</li>
            <li>Realizar actividades que puedan dañar o interferir con el funcionamiento del sitio</li>
            <li>Utilizar el sitio para cualquier propósito ilegal o no autorizado</li>
          </ul>
          
          <h2>3. Contenido del Sitio</h2>
          <p>Todo el contenido del Blog de Boxeo Chileno, incluyendo textos, imágenes, gráficos, logotipos y otros materiales, es propiedad del sitio o de sus respectivos propietarios y está protegido por las leyes de derechos de autor aplicables.</p>
          
          <h3>3.1. Propiedad Intelectual</h3>
          <p>El contenido del sitio está protegido por derechos de autor y otras leyes de propiedad intelectual. Todos los derechos están reservados. Usted no puede utilizar, reproducir, distribuir o crear trabajos derivados del contenido sin nuestro consentimiento previo por escrito.</p>
          
          <h3>3.2. Imágenes y Recursos Externos</h3>
          <p>Algunas imágenes y recursos utilizados en este sitio pueden provenir de fuentes externas y están sujetos a sus propios términos de uso y licencias. Respetamos los derechos de propiedad intelectual de terceros y utilizamos contenido de fuentes que permiten su uso según sus respectivas licencias.</p>
          
          <h2>4. Exactitud de la Información</h2>
          <p>Nos esforzamos por proporcionar información precisa y actualizada sobre la historia del boxeo chileno. Sin embargo, no garantizamos la exactitud, integridad o actualidad de toda la información contenida en el sitio. La información se proporciona "tal cual" y está sujeta a cambios sin previo aviso.</p>
          
          <h2>5. Enlaces a Terceros</h2>
          <p>Nuestro sitio web puede contener enlaces a sitios web de terceros que consideramos relevantes o útiles. No tenemos control sobre el contenido, políticas de privacidad o prácticas de estos sitios externos. No nos hacemos responsables del contenido o las prácticas de ningún sitio web de terceros.</p>
          
          <h2>6. Limitación de Responsabilidad</h2>
          <p>El Blog de Boxeo Chileno se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. No seremos responsables de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar este sitio web.</p>
          
          <h3>6.1. Sin Garantías</h3>
          <p>No garantizamos que:</p>
          <ul>
            <li>El sitio funcionará de manera ininterrumpida o sin errores</li>
            <li>Los defectos serán corregidos</li>
            <li>El sitio o el servidor que lo aloja están libres de virus u otros componentes dañinos</li>
          </ul>
          
          <h2>7. Modificaciones de los Términos</h2>
          <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio. Es su responsabilidad revisar periódicamente estos términos para estar informado de cualquier cambio.</p>
          
          <h2>8. Propósito del Blog</h2>
          <p>El Blog de Boxeo Chileno es exclusivamente informativo y educativo. No tenemos la intención de obtener retornos financieros a través de este sitio. Todo el contenido es producido únicamente para fines educacionales y de compartimiento de conocimiento sobre la historia del boxeo chileno.</p>
          
          <h2>9. Privacidad</h2>
          <p>Su privacidad es importante para nosotros. Para obtener información sobre cómo recopilamos, utilizamos y protegemos su información personal, consulte nuestra <Link to="/politica-de-privacidad" className="legal-link">Política de Privacidad</Link>.</p>
          
          <h2>10. Ley Aplicable</h2>
          <p>Estos términos y condiciones se rigen por las leyes de la República de Chile. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales chilenos.</p>
          
          <h2>11. Contacto</h2>
          <p>Si tiene preguntas o inquietudes sobre estos términos y condiciones, puede contactarnos a través de los medios disponibles en nuestro sitio web.</p>
          
          <h2>12. Aceptación</h2>
          <p>Al utilizar el Blog de Boxeo Chileno, usted confirma que ha leído, entendido y acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con estos términos, le solicitamos que cese el uso de nuestro sitio web.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TerminosCondiciones;

