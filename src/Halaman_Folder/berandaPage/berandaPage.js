import  { React, useState } from 'react';
import { Nav, Navbar, NavDropdown, Container, Row, Card, Carousel } from 'react-bootstrap';
import Beranda from '../../JS_Folder/beranda';
import Sleding from '../../JS_Folder/sleding';
import Galeri from '../../JS_Folder/galeri';
import News from '../../JS_Folder/berita';
import Footer from '../../JS_Folder/footer';

const BerandaPage = () => {
    <div>
        <Container>
            <div><Beranda /></div>
            <div><Sleding /></div>
            <div><Galeri /></div>
            <div><News /></div>
            <div><Footer /></div>
        </Container>
    </div>
}

export default BerandaPage;