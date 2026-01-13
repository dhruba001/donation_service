import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import LiveEvent from './pages/LiveEvent';
import { ScrollToTop } from './components/ScrollToTop'; // We will create this small utility

// Placeholder pages for links that don't exist yet
const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
    <p className="text-gray-500">This feature is coming soon.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop component ensures we start at the top of the page on route change */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Placeholder title="All Events" />} />
          <Route path="features" element={<Placeholder title="Features" />} />
          <Route path="demo" element={<Placeholder title="Live Demo Selection" />} />
        </Route>
        
        {/* Live Event gets its own route outside the main layout for full screen immersion */}
        <Route path="/event/:id/live" element={<LiveEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
