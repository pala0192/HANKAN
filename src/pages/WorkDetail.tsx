import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, PlayCircle } from 'lucide-react';
import './WorkDetail.css';

interface Work {
  id: string;
  title: string;
  description: string;
  material: string;
  location: string;
  mainImage: string;
  extraImages: string[];
  videoId: string;
  artistId: string;
}

interface Artist {
  id: string;
  name: string;
}

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const [work, setWork] = useState<Work | null>(null);
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    // Fetch work details
    fetch('/data/works.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((w: Work) => w.id === id);
        setWork(found);
        
        if (found) {
          // Fetch artist details
          fetch('/data/artists.json')
            .then(res => res.json())
            .then(artistsData => {
              const artistFound = artistsData.find((a: Artist) => a.id === found.artistId);
              setArtist(artistFound);
            });
        }
      });
  }, [id]);

  if (!work) return <div className="container section text-center">Loading...</div>;

  return (
    <div className="work-detail animate-fade-in section">
      <div className="container">
        <div className="work-detail-grid">
          <div className="work-images">
            <img src={work.mainImage} alt={work.title} className="main-image" />
            {work.extraImages.map((img, idx) => (
              <img key={idx} src={img} alt={`${work.title} detail ${idx + 1}`} className="extra-image" />
            ))}
          </div>
          
          <div className="work-info">
            <h1 className="heading-2 work-title">{work.title}</h1>
            
            {artist && (
              <Link to={`/artists/${artist.id}`} className="artist-link">
                By {artist.name}
              </Link>
            )}

            <div className="work-meta text-muted">
              <p><span>Material</span> {work.material}</p>
            </div>

            <p className="work-description">{work.description}</p>
            
            <div className="work-actions">
              <div className="location-info">
                <MapPin size={20} />
                <span>{work.location}</span>
              </div>
              
              <Link to="/visit" className="btn btn-primary w-100 text-center mb-4">공방 방문 예약하기</Link>
              
              {work.videoId && (
                <Link to="/videos" className="btn btn-outline w-100 text-center flex-center">
                  <PlayCircle size={20} className="mr-2" />
                  제작 과정 영상 보기
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
