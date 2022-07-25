import '../CSS_Folder/beranda.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

export default function Beranda() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' className='image'></img>
          Dinas Perhubungan
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
