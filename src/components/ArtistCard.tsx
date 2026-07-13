import { Link } from 'react-router-dom';
import './ArtistCard.css';

interface ArtistProps {
  id: string;
  name: string;
  mainPhoto: string;
  field: string;
}

export default function ArtistCard({ id, name, mainPhoto, field }: ArtistProps) {
  return (
    <Link to={`/artists/${id}`} className="artist-card">
      <div className="artist-card-image-wrapper">
        <img src={mainPhoto} alt={name} className="artist-card-image" loading="lazy" />
      </div>
      <div className="artist-card-info">
        <p className="artist-card-field text-muted">{field}</p>
        <h3 className="artist-card-name">{name}</h3>
      </div>
    </Link>
  );
}
