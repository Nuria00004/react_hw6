import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import Form from './pages/Form';
import Todo from "./pages/Todo";
import Layout from "./components/Layout";

export const App = () => {
  return (
    <>
    
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='form' element={<Form />} />
        <Route path="todo" element={<Todo />} />
        <Route path="layout" element={<Layout />} />
        

        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
};
