import './BlogIntro.css';

const BlogIntro = () => {
  return (
    <article className="blog-intro">
      <div className="intro-content">
        <p className="blog-date">
          Publicado el: <time dateTime="2024-01-15">15 de Enero de 2024</time>
        </p>
        <p className="intro-text">
          El <strong>boxeo chileno</strong> tiene una rica y gloriosa tradición que se remonta a las décadas de 1940 y 1950, período considerado la <strong>edad de oro del boxeo en Chile</strong>. Durante este período, el país produjo algunos de los más talentosos <strong>pugilistas de América Latina</strong>, que no solo dominaron los cuadriláteros nacionales y sudamericanos, sino que también dejaron su marca en el <strong>escenario mundial del boxeo profesional</strong>.
        </p>
        <p className="intro-text">
          En este artículo especial sobre la <strong>historia del boxeo chileno</strong>, presentaremos a los <strong>5 mejores boxeadores chilenos de todos los tiempos</strong>. Estos pugilistas excepcionales elevaron el nombre de Chile en el boxeo mundial, enfrentándose a algunos de los mayores campeones de la historia del deporte y conquistando títulos que inspiran a nuevas generaciones de atletas.
        </p>
        <p className="intro-text">
          Desde <strong>Arturo Godoy</strong>, que desafió al legendario <strong>Joe Louis</strong> en peso pesado, hasta <strong>Martín Vargas</strong>, el ícono nacional que disputó cuatro veces el título mundial, pasando por <strong>Godfrey Stevens</strong>, <strong>Benedicto Villablanca</strong> y <strong>Alfredo Cornejo</strong> - cada uno de estos boxeadores escribió capítulos memorables en la historia del <strong>boxeo profesional chileno</strong>.
        </p>
      </div>
      <div className="featured-image">
        <img 
          src="https://images.unsplash.com/photo-1575747515871-2e323827539e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1641" 
          alt="Cuadrilátero de boxeo profesional histórico - Boxeo Chileno" 
          className="main-image"
        />
        <p className="image-caption">
          El boxeo chileno tiene una rica tradición que produjo grandes campeones mundiales
        </p>
      </div>
    </article>
  );
};

export default BlogIntro;

