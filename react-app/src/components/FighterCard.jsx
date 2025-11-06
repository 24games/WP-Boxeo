import { useState } from 'react';
import './FighterCard.css';

const FighterCard = ({ fighter }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageError = (e) => {
    if (fighter.imageFallback && e.target.src !== fighter.imageFallback) {
      e.target.src = fighter.imageFallback;
    }
  };

  return (
    <article className={`fighter-card blog-post ${fighter.specialImageClass ? 'special-image' : ''}`}>
      <div className="fighter-header">
        <div className="fighter-number">{fighter.number}</div>
        <div className="fighter-info">
          <h2>{fighter.name}: {fighter.title}</h2>
          <p className="fighter-subtitle">{fighter.subtitle}</p>
        </div>
      </div>
      <div className="fighter-content">
        <div className={`fighter-image-wrapper ${fighter.specialImageClass ? 'vargas-wrapper' : ''}`}>
          <img 
            src={fighter.image} 
            alt={`${fighter.name} boxeador chileno`}
            className={`fighter-image ${fighter.specialImageClass ? 'vargas-image' : ''}`}
            onError={handleImageError}
          />
        </div>
        <div className="fighter-text-container">
          <div className="fighter-description">
            {fighter.description.map((paragraph, index) => (
              <p 
                key={index} 
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <button 
            className={`expand-btn ${isExpanded ? 'active' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Leer Menos' : 'Leer Más'} 
            <span className="arrow">{isExpanded ? '↑' : '↓'}</span>
          </button>
          <div className={`expandable-content ${isExpanded ? 'active' : ''}`}>
            <div className="detailed-info">
              {fighter.detailedInfo.map((info, index) => (
                <div key={index}>
                  <h3>{info.title}</h3>
                  <p 
                    dangerouslySetInnerHTML={{ __html: info.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FighterCard;

