import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          HANKAN.
        </Link>
        
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/works" className="nav-link" onClick={() => setIsMenuOpen(false)}>Works</Link>
          <Link to="/artists" className="nav-link" onClick={() => setIsMenuOpen(false)}>Artists</Link>
          <Link to="/videos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Videos</Link>
          <Link to="/visit" className="nav-link" onClick={() => setIsMenuOpen(false)}>Visit</Link>
        </nav>
      </div>
    </header>
  );
}
