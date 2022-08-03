import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS_Folder/index.css';
import Beranda from './JS_Folder/beranda';
import Berita from './JS_Folder/berita';
import Sleding from './JS_Folder/sleding';
import Footer from './JS_Folder/footer';
import Galeri from './JS_Folder/galeri';
import { Row, Col } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Row>
      <Beranda />
      <Sleding />
      <Galeri />
      <Berita />
      <Footer />
    </Row>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

