import { Link } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import './PoliticaPrivacidad.css';

const PoliticaPrivacidad = () => {
  return (
    <>
      <Hero 
        title="Política de Privacidad"
        subtitle="Protección y uso de sus datos personales"
      />
      <main className="legal-page">
        <Link to="/" className="back-link">← Volver al inicio</Link>
        
        <p className="last-updated">Última actualización: 19 de Diciembre de 2024</p>
        
        <div className="legal-content">
          <h2>1. Introducción</h2>
          <p>El Blog de Boxeo Chileno se compromete a proteger su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando visita nuestro sitio web.</p>
          <p>Al utilizar nuestro sitio web, usted acepta las prácticas descritas en esta política. Le recomendamos leer esta política cuidadosamente para comprender cómo manejamos su información.</p>
          
          <h2>2. Información que Recopilamos</h2>
          <p>El Blog de Boxeo Chileno es un sitio web principalmente informativo y educativo. Recopilamos mínima información personal y solo la necesaria para el funcionamiento adecuado del sitio.</p>
          
          <h3>2.1. Información que Usted Proporciona</h3>
          <p>Actualmente, nuestro sitio web no requiere que los usuarios proporcionen información personal para acceder al contenido. Sin embargo, si en el futuro implementamos funciones que requieran información personal, esta sección se actualizará en consecuencia.</p>
          
          <h3>2.2. Información Recopilada Automáticamente</h3>
          <p>Cuando visita nuestro sitio web, podemos recopilar automáticamente cierta información técnica, que incluye:</p>
          <ul>
            <li><strong>Dirección IP:</strong> Su dirección de protocolo de internet</li>
            <li><strong>Información del navegador:</strong> Tipo y versión del navegador que utiliza</li>
            <li><strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo</li>
            <li><strong>Páginas visitadas:</strong> Qué páginas del sitio ha visitado</li>
            <li><strong>Tiempo de visita:</strong> Fecha y hora de su visita</li>
            <li><strong>Referrer:</strong> Sitio web desde el cual accedió a nuestro sitio</li>
          </ul>
          
          <h3>2.3. Cookies y Tecnologías Similares</h3>
          <p>Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.</p>
          <p><strong>Tipos de cookies que podemos utilizar:</strong></p>
          <ul>
            <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
            <li><strong>Cookies de análisis:</strong> Para comprender cómo los visitantes interactúan con el sitio</li>
            <li><strong>Cookies de preferencias:</strong> Para recordar sus preferencias y configuraciones</li>
          </ul>
          <p>Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
          
          <h2>3. Cómo Utilizamos su Información</h2>
          <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
          
          <h3>3.1. Funcionamiento del Sitio</h3>
          <ul>
            <li>Proporcionar y mantener nuestro sitio web</li>
            <li>Mejorar la funcionalidad y el rendimiento del sitio</li>
            <li>Personalizar su experiencia de usuario</li>
            <li>Responder a consultas o solicitudes</li>
          </ul>
          
          <h3>3.2. Análisis y Mejoras</h3>
          <ul>
            <li>Analizar el uso del sitio web para mejoras</li>
            <li>Comprender las preferencias de los visitantes</li>
            <li>Identificar problemas técnicos y resolverlos</li>
          </ul>
          
          <h3>3.3. Cumplimiento Legal</h3>
          <ul>
            <li>Cumplir con obligaciones legales</li>
            <li>Proteger nuestros derechos legales</li>
            <li>Prevenir actividades fraudulentas o ilegales</li>
          </ul>
          
          <h2>4. Compartir Información</h2>
          <p>El Blog de Boxeo Chileno no vende, alquila ni comparte su información personal con terceros para fines comerciales. Sin embargo, podemos compartir información en las siguientes circunstancias:</p>
          
          <h3>4.1. Proveedores de Servicios</h3>
          <p>Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web, como servicios de alojamiento, análisis y seguridad. Estos proveedores están obligados a mantener la confidencialidad de su información.</p>
          
          <h3>4.2. Requisitos Legales</h3>
          <p>Podemos divulgar información si es requerido por ley, orden judicial o proceso legal, o para proteger nuestros derechos, propiedad o seguridad, o la de nuestros usuarios.</p>
          
          <h3>4.3. Consentimiento</h3>
          <p>Podemos compartir información con su consentimiento explícito o cuando usted solicite que compartamos información.</p>
          
          <h2>5. Seguridad de la Información</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas razonables para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet o método de almacenamiento electrónico es 100% seguro.</p>
          
          <h3>5.1. Medidas de Seguridad</h3>
          <ul>
            <li>Uso de conexiones seguras (HTTPS)</li>
            <li>Implementación de medidas de seguridad estándar de la industria</li>
            <li>Limitación del acceso a información personal solo al personal autorizado</li>
            <li>Revisión regular de nuestras prácticas de seguridad</li>
          </ul>
          
          <h2>6. Retención de Datos</h2>
          <p>Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.</p>
          
          <h2>7. Sus Derechos</h2>
          <p>Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, que pueden incluir:</p>
          
          <h3>7.1. Derechos de Acceso y Rectificación</h3>
          <ul>
            <li><strong>Derecho de acceso:</strong> Solicitar información sobre los datos personales que tenemos sobre usted</li>
            <li><strong>Derecho de rectificación:</strong> Corregir información inexacta o incompleta</li>
            <li><strong>Derecho de eliminación:</strong> Solicitar la eliminación de sus datos personales</li>
            <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
            <li><strong>Derecho de oposición:</strong> Oponerse al procesamiento de sus datos personales</li>
          </ul>
          
          <h3>7.2. Ejercer sus Derechos</h3>
          <p>Para ejercer cualquiera de estos derechos, puede contactarnos a través de los medios disponibles en nuestro sitio web. Responderemos a su solicitud dentro de un plazo razonable.</p>
          
          <h2>8. Enlaces a Terceros</h2>
          <p>Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios externos. Le recomendamos revisar las políticas de privacidad de cualquier sitio web de terceros que visite.</p>
          
          <h2>9. Privacidad de Menores</h2>
          <p>Nuestro sitio web no está dirigido a menores de 18 años. No recopilamos conscientemente información personal de menores. Si descubrimos que hemos recopilado información de un menor sin el consentimiento de los padres, tomaremos medidas para eliminar esa información.</p>
          
          <h2>10. Transferencias Internacionales de Datos</h2>
          <p>Su información puede ser transferida y mantenida en computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir. Al utilizar nuestro sitio web, usted acepta esta transferencia.</p>
          
          <h2>11. Cambios a esta Política de Privacidad</h2>
          <p>Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. Le recomendamos revisar periódicamente esta política para estar informado de cualquier cambio.</p>
          <p>La fecha de "Última actualización" al inicio de esta política indica cuándo se realizó la última revisión.</p>
          
          <h2>12. Ley Aplicable</h2>
          <p>Esta Política de Privacidad se rige por las leyes de la República de Chile, incluyendo la Ley N° 19.628 sobre Protección de la Vida Privada y sus regulaciones aplicables.</p>
          
          <h2>13. Consentimiento</h2>
          <p>Al utilizar el Blog de Boxeo Chileno, usted consiente la recopilación y el uso de información de acuerdo con esta Política de Privacidad. Si no está de acuerdo con esta política, le solicitamos que cese el uso de nuestro sitio web.</p>
          
          <h2>14. Contacto</h2>
          <p>Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el manejo de su información personal, puede contactarnos a través de los medios disponibles en nuestro sitio web.</p>
          <p>Estamos comprometidos a trabajar con usted para resolver cualquier inquietud sobre privacidad que pueda tener.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaPrivacidad;

