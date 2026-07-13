import { Link } from 'react-router-dom';
import './WorkCard.css';

interface WorkProps {
  id: string;
  title: string;
  artistId: string;
  artistName?: string;
  mainImage: string;
  instagramLink?: string;
}

export default function WorkCard({ id, title, artistName, mainImage, instagramLink }: WorkProps) {
  if (instagramLink) {
    return (
      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="work-card">
        <div className="work-card-image-wrapper">
          <img src={mainImage} alt={title} className="work-card-image" loading="lazy" />
        </div>
        <div className="work-card-info">
          <h3 className="work-card-title">{title}</h3>
          {artistName && <p className="work-card-artist text-muted">{artistName}</p>}
        </div>
      </a>
    );
  }

  return (
    <Link to={`/works/${id}`} className="work-card">
      <div className="work-card-image-wrapper">
        <img src={mainImage} alt={title} className="work-card-image" loading="lazy" />
      </div>
      <div className="work-card-info">
        <h3 className="work-card-title">{title}</h3>
        {artistName && <p className="work-card-artist text-muted">{artistName}</p>}
      </div>
    </Link>
  );
}
