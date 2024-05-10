import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} /> {/* Route for ProductDetail */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
