import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import MyThoughts from './pages/MyThoughts';
import Favourites from './pages/Favourites';
import AddMyThought from './pages/AddMyThought';
import AboutApp from './pages/AboutApp';
import Home from './pages/Home';

const AppRoutes: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-thoughts" element={<MyThoughts initialThoughts={[]} />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/add-my-thought" element={<AddMyThought />} />
          <Route path="/about" element={<AboutApp />} />
        </Routes>
  );
};

export default AppRoutes;