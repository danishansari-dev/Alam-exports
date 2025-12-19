
import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomRugs from './pages/CustomRugs';
import Materials from './pages/Materials';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on route change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    // Exact routes
    if (currentHash === '#/') return <Home />;
    if (currentHash === '#/about') return <About />;
    if (currentHash === '#/products') return <Products />;
    if (currentHash === '#/custom-rugs') return <CustomRugs />;
    if (currentHash === '#/materials') return <Materials />;
    if (currentHash === '#/certifications') return <Certifications />;
    if (currentHash === '#/contact') return <Contact />;
    if (currentHash === '#/privacy') return <PrivacyPolicy />;
    if (currentHash === '#/terms') return <TermsConditions />;
    if (currentHash === '#/disclaimer') return <Disclaimer />;

    // Dynamic routes
    if (currentHash.startsWith('#/category/')) return <CategoryPage />;
    if (currentHash.startsWith('#/product/')) return <ProductDetailPage />;

    return <Home />;
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

export default App;
