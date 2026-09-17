import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
