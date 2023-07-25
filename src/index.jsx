import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hello from './pages/Home';
import Artwork from './pages/Artwork';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Router>
        <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/artwork/:id" element={<Artwork />} />
        </Routes>
    </Router>,
);
