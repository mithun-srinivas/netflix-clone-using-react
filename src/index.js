import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './App';
import Home from './Routes/Home';
import Mithun from './Routes/Mithun';
import Umut from './Routes/Umut';
import Murat from './Routes/Murat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Mithun" element={<Mithun />} />
      <Route path="Umut" element={<Umut />} />
      <Route path="Murat" element={ <Murat /> }/>
      <Route path="Add%20Profile" element={<div><App /> </div>} />
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);
