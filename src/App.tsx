import React from 'react';
import Banner from './components/Banner';
import QueryForm from './components/QueryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <QueryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;