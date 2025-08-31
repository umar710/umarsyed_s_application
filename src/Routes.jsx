import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ProductPage from './pages/Product';
import ProductInfoModalPage from './pages/ProductInfoModal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/info-modal" element={<ProductInfoModalPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;