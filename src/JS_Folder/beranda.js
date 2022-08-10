import '../CSS_Folder/beranda.css';
import { Nav, Navbar, NavDropdown, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Beranda() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-default'>
      <Container>
        <Navbar.Brand className='text-header' href="/" style={{fontSize: "20px", fontFamily: "Times", fontWeight: "bold"}}>
          <img src='https://rekreartive.com/wp-content/uploads/2019/03/Logo-Lampung-Timur-Warna.png' className="header-logo"></img>
          DINAS PERHUBUNGAN
          <br/>Kab. Lampung Timur
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/Berita">Berita</Nav.Link>
            <Nav.Link href="/Artikel">Artikel</Nav.Link>
            <NavDropdown title="Galeri" id="collasible-nav-galeri">
              <NavDropdown.Item href="/GaleriFoto">Foto</NavDropdown.Item>
              <NavDropdown.Item href="/GaleriVideo">Video</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
