import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<Beranda />} />
                <Route path='/Berita' exact element={<Berita />} />
                <Route path='/Artikel' exact element={<Artikel />} />
                <Route path='/' exact element={<Beranda />} />
            </Routes>
        </>
    )
}
