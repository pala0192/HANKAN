import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import './Home.css';

interface Work {
  id: string;
  title: string;
  mainImage: string;
  artistId: string;
  instagramLink?: string;
}

export default function Home() {
  const [featuredWorks, setFeaturedWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch('/data/works.json')
      .then(res => res.json())
      .then(data => setFeaturedWorks(data.slice(0, 16))); // Take top 16
  }, []);

  return (
    <div className="home animate-fade-in">
      <section className="hero">
        <div className="container">
          <h1 className="heading-1 hero-title">
            손끝에서<br/>피어나는 예술
          </h1>
          <p className="hero-subtitle text-muted">
            행리단길 공방 작가들의 숨결이 담긴 작품들을 만나보세요.<br/>
            온라인 전시를 거쳐, 오프라인의 따뜻한 온기로 이어집니다.
          </p>
          <div className="hero-cta">
            <Link to="/works" className="btn btn-primary">작품 감상하기</Link>
            <Link to="/visit" className="btn btn-outline">공방 방문하기</Link>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Featured Works</h2>
            <Link to="/works" className="link-more">View All Works</Link>
          </div>
          
          <div className="works-grid">
            {featuredWorks.map(work => (
              <WorkCard key={work.id} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-content">
              <h2 className="heading-2">About HANKAN.</h2>
              <p className="text-muted mt-2">
                행리단길 골목골목에는 저마다의 철학과 시간을 빚어내는 작가들이 있습니다.
                도예, 유리, 목공 등 다양한 소재를 다루며 일상에 스며드는 아름다움을 만드는
                이들의 작업 공간으로 당신을 초대합니다.
              </p>
              <Link to="/artists" className="btn btn-outline mt-4">작가 소개 보기</Link>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1200&q=80" alt="공방 풍경" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
