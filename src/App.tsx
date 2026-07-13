import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import Videos from './pages/Videos';
import Visit from './pages/Visit';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="works/:id" element={<WorkDetail />} />
          <Route path="artists" element={<Artists />} />
          <Route path="artists/:id" element={<ArtistDetail />} />
          <Route path="videos" element={<Videos />} />
          <Route path="visit" element={<Visit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
