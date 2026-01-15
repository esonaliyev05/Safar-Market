import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Loader from './ui/Loader';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // Loader ko‘rsatish

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
