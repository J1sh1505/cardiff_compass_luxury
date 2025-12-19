import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import CategoryCollection from './pages/CategoryCollection';
import VenueDetail from './pages/VenueDetail';
import { Contact, Privacy, Terms } from './pages/InfoPages';

/**
 * ScrollToTop Helper
 * Ensures the window scrolls back to position 0,0 when the route changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Layout Wrapper
 * * Conditionally renders the global Navbar/Footer.
 * * We hide these for pages that have their own internal layout (Login, Contact, etc.)
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Define which paths should NOT have the global App.tsx nav/footer
  // (Because they either have no nav, or they have their own custom LuxuryLayout)
  const hiddenPaths = ['/login', '/contact', '/privacy', '/terms'];
  
  const showNavAndFooter = !hiddenPaths.includes(location.pathname);

  return (
    <>
      {showNavAndFooter && <Navbar />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
};

/**
 * App Routing Architecture
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-bone">
        <Layout>
          <Routes>
            {/* 1. Main Landing */}
            <Route path="/" element={<Home />} />
            
            {/* 2. Authentication */}
            <Route path="/login" element={<Login />} />
            
            {/* 3. The Curated Collection */}
            <Route path="/explore/:category" element={<CategoryCollection />} />
            
            {/* 4. The Venue Atelier */}
            <Route path="/venue/:id" element={<VenueDetail />} />

            {/* 5. Info Pages (These have their own LuxuryLayout) */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;