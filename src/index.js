import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS_Folder/index.css';
import Beranda from './JS_Folder/beranda';
import News from './JS_Folder/berita';
import Sleding from './JS_Folder/sleding';
import Footer from './JS_Folder/footer';
import Galeri from './JS_Folder/galeri';
import { Row, Col } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Row>
      <div>
        <Beranda />
      </div>
      <div>
        <Sleding />
      </div>
      <div>
        <Galeri />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Footer />
      </div>
    </Row>
  </React.StrictMode>
);