import '../CSS_Folder/beranda.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container, Row, Card } from 'react-bootstrap';

export default function Beranda() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background: "linear-gradient(#35858B, #4FBDBA)"}}>
      <Container>
        <Navbar.Brand className='text-header' href="#home" style={{fontSize: "20px", fontFamily: "Times", fontWeight: "bold"}}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' className="header-logo"></img>
          DINAS PERHUBUNGAN
          <br/>Kab. Tulang Bawang
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#beranda">Beranda</Nav.Link>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <NavDropdown title="Galeri" id="collasible-nav-galeri">
              <NavDropdown.Item href="#galeri1.1">Foto</NavDropdown.Item>
              <NavDropdown.Item href="#galeri1.1">Video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#informasi">Informasi</Nav.Link>
            <NavDropdown title="Layanan" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Live Chat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kotak Keluhan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
