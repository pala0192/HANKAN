import { MapPin, Clock, Phone, Map } from 'lucide-react';
import './Visit.css';

export default function Visit() {
  return (
    <div className="visit-page animate-fade-in section">
      <div className="container">
        <h1 className="heading-1 mb-xl text-center">Visit Us</h1>
        
        <div className="visit-grid">
          <div className="visit-info">
            <h2 className="heading-2 mb-lg">행리단길 공방거리</h2>
            <p className="text-muted mb-lg">
              온라인에서 만난 작가들의 작품을 오프라인에서 직접 느껴보세요.<br/>
              행궁동 골목골목 자리한 공방에서 따뜻한 차 한 잔과 함께<br/>
              예술이 일상이 되는 순간을 경험하실 수 있습니다.
            </p>
            
            <div className="info-list">
              <div className="info-item">
                <MapPin size={24} className="info-icon" />
                <div>
                  <h3 className="heading-3">Location</h3>
                  <p>경기도 수원시 팔달구 신풍동 행리단길 일대</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock size={24} className="info-icon" />
                <div>
                  <h3 className="heading-3">Hours</h3>
                  <p>화요일 - 일요일 (월요일 휴무)</p>
                  <p>11:00 AM - 07:00 PM</p>
                  <p className="text-muted text-sm mt-1">* 공방마다 운영 시간이 상이할 수 있습니다.</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone size={24} className="info-icon" />
                <div>
                  <h3 className="heading-3">Contact</h3>
                  <p>031-123-4567</p>
                  <p>hello@hankan.example.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-xl">
              <a href="#" className="btn btn-primary flex-center">
                <Map size={20} className="mr-2" />
                네이버 지도로 보기
              </a>
            </div>
          </div>
          
          <div className="visit-map">
            {/* Placeholder for actual map embed like Google Maps or Kakao Map */}
            <div className="map-placeholder">
              <MapPin size={48} className="text-muted mb-4" />
              <p className="text-muted">Interactive Map Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
