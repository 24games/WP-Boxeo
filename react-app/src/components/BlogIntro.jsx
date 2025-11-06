import './BlogIntro.css';

const BlogIntro = () => {
  return (
    <article className="blog-intro">
      <div className="intro-content">
        <p className="blog-date">
          Publicado em: <time dateTime="2024-01-15">15 de Janeiro de 2024</time>
        </p>
        <p className="intro-text">
          O <strong>boxe chileno</strong> tem uma rica e gloriosa tradição que remonta às décadas de 1940 e 1950, período considerado a <strong>era dourada do boxe no Chile</strong>. Durante este período, o país produziu alguns dos mais talentosos <strong>pugilistas da América Latina</strong>, que não apenas dominaram os ringues nacionais e sul-americanos, mas também deixaram sua marca no <strong>cenário mundial do boxe profissional</strong>.
        </p>
        <p className="intro-text">
          Neste artigo especial sobre a <strong>história do boxe chileno</strong>, apresentaremos os <strong>5 maiores boxeadores chilenos de todos os tempos</strong>. Estes lutadores excepcionais elevaram o nome do Chile no boxe mundial, enfrentando alguns dos maiores campeões da história do esporte e conquistando títulos que inspiram novas gerações de atletas.
        </p>
        <p className="intro-text">
          De <strong>Arturo Godoy</strong>, que desafiou o lendário <strong>Joe Louis</strong> pelos pesos pesados, a <strong>Martín Vargas</strong>, o ícone nacional que disputou quatro vezes o título mundial, passando por <strong>Godfrey Stevens</strong>, <strong>Benedicto Villablanca</strong> e <strong>Alfredo Cornejo</strong> - cada um desses boxeadores escreveu capítulos memoráveis na história do <strong>boxe profissional chileno</strong>.
        </p>
      </div>
      <div className="featured-image">
        <img 
          src="https://images.unsplash.com/photo-1575747515871-2e323827539e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1641" 
          alt="Ringue de boxe profissional histórico - Boxe Chileno" 
          className="main-image"
        />
        <p className="image-caption">
          O boxe chileno tem uma rica tradição que produziu grandes campeões mundiais
        </p>
      </div>
    </article>
  );
};

export default BlogIntro;

