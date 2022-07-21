import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS_Folder/index.css';
import Beranda from './JS_Folder/beranda';
import Berita from './JS_Folder/berita';
import Sleding from './JS_Folder/sleding';
import Footer from './JS_Folder/footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Beranda />
    <br></br>
    <Sleding />
    <br></br>
    <Berita />
    <br></br>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

