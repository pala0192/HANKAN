import { useEffect, useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import './Artists.css';

interface Artist {
  id: string;
  name: string;
  mainPhoto: string;
  field: string;
}

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/artists.json')
      .then(res => res.json())
      .then(data => setArtists(data));
  }, []);

  return (
    <div className="artists-page animate-fade-in section">
      <div className="container">
        <h1 className="heading-1 mb-xl text-center">Artists</h1>
        <div className="artists-grid">
          {artists.map(artist => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
