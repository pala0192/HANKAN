import { useEffect, useState } from 'react';
import WorkCard from '../components/WorkCard';

interface Work {
  id: string;
  title: string;
  mainImage: string;
  artistId: string;
}

export default function Works() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/works.json')
      .then(res => res.json())
      .then(data => setWorks(data));
  }, []);

  return (
    <div className="works-page animate-fade-in section">
      <div className="container">
        <h1 className="heading-1 mb-xl text-center">Exhibition Works</h1>
        <div className="works-grid">
          {works.map(work => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}
