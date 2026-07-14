import { useEffect, useState } from 'react';
import './Videos.css';

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  artistId: string;
}

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/videos.json')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="videos-page animate-fade-in section">
      <div className="container">
        <h1 className="heading-1 mb-xl text-center">Artist Interviews</h1>
        
        <div className="videos-list">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3 className="heading-3">{video.title}</h3>
                <p className="text-muted mt-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
