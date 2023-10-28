import React from 'react';
import { Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './components/Home'; 
import Contacts from './components/Contacts'; 
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </>
  )
}