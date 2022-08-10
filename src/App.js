import React from 'react';
import BerandaPage from './Halaman_Folder/berandaPage/berandaPage';
import BeritaPage from './Halaman_Folder/beritaPage/beritaPage';
import ArtikelPage from './Halaman_Folder/artikelPage/artikelPage';
import ArtikelFull from './Halaman_Folder/artikelPage/detailArtikel';
import BeritaFull from './Halaman_Folder/beritaPage/detailBerita';
import Galeri from './JS_Folder/galeriFoto';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<BerandaPage />} />
                <Route path='/Berita' exact element={<BeritaPage />} />
                <Route path='/BeritaFull/:id' exact element={<BeritaFull />} />
                <Route path='/Artikel' exact element={<ArtikelPage />} />
                <Route path='/ArtikelFull/:id' exact element={<ArtikelFull />} />
                <Route path='' />
            </Routes>
        </>
    )
}

export default App;
