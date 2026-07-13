import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="logo">HANKAN.</h2>
          <p className="text-muted">행리단길 공방 작가 온라인 전시</p>
        </div>
        <div className="footer-info">
          <p>경기도 수원시 팔달구 신풍동 행리단길</p>
          <p>© 2026 HANKAN Exhibition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
