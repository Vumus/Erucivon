import "./berandaPage.css";
import React from "react";
import Beranda from '../../JS_Folder/beranda';
import Slider from '../../JS_Folder/slider';
import News from '../../JS_Folder/berita';
import Galeri from '../../JS_Folder/galeriFoto';
import Artikel from '../../JS_Folder/artikel';
import Footer from '../../JS_Folder/footer';
import Dokumen from "../../JS_Folder/dokumen";

const BerandaPage = () => {
  return (
    <>
      <div>
        <div>
            <Beranda />
        </div>
        <div>
            <Slider />
        </div>
        <div>
            <Dokumen />
        </div>
        <div>
            <News />
        </div>
        <div>
            <Galeri />
        </div>
        <div>
            <Artikel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BerandaPage;