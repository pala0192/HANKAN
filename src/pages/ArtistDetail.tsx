import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import './ArtistDetail.css';

interface Artist {
  id: string;
  name: string;
  introduction: string;
  mainPhoto: string;
  field: string;
  location: string;
  snsLink: string;
}

interface Work {
  id: string;
  title: string;
  mainImage: string;
  artistId: string;
}

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [artistWorks, setArtistWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch('/data/artists.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((a: Artist) => a.id === id);
        setArtist(found);
      });

    fetch('/data/works.json')
      .then(res => res.json())
      .then(data => {
        const works = data.filter((w: Work) => w.artistId === id);
        setArtistWorks(works);
      });
  }, [id]);

  if (!artist) return <div className="container section text-center">Loading...</div>;

  return (
    <div className="artist-detail animate-fade-in section">
      <div className="container">
        <div className="artist-profile mb-xl">
          <div className="artist-photo-wrapper">
            <img src={artist.mainPhoto} alt={artist.name} className="artist-photo" />
          </div>
          <div className="artist-info">
            <p className="artist-field text-muted">{artist.field}</p>
            <h1 className="heading-1 artist-name">{artist.name}</h1>
            <p className="artist-introduction">{artist.introduction}</p>
            <div className="artist-links">
              <a href={artist.snsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Instagram
              </a>
              <Link to="/visit" className="btn btn-primary">공방 방문하기</Link>
            </div>
          </div>
        </div>

        {artistWorks.length > 0 && (
          <div className="artist-works">
            <h2 className="heading-2 mb-lg text-center">Works</h2>
            <div className="works-grid">
              {artistWorks.map(work => (
                <WorkCard key={work.id} {...work} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
