import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './companents/Header/Header'
import Main from './companents/Main/Main'
import Footer from './companents/Footer/Footer'
import Pages_one from './companents/Pages/Pages/Pages_one';

function App() {


  return (

    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/keyingi" element={<Pages_one />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
