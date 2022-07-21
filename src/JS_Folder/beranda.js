import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../CSS_Folder/beranda.css';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
    function Beranda() {
      return (
        <>
          <Navbar className='beranda'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' className='beranda-logo'></img>
            <Container>
              <Col>
              <Navbar.Brand href="#main" className='font-top' >Dinas Perhubungan</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className='font-top-s' href="#home">Home</Nav.Link>
                <Nav.Link className='font-top-s' href="#Profile">Profile</Nav.Link>
                <Nav.Link className='font-top-s' href="#Berita">Berita</Nav.Link>
                <Nav.Link className='font-top-s' href="#Info">Info</Nav.Link>
                <Nav.Link className='font-top-s' href="#Galeri">Galeri</Nav.Link>
                <Nav.Link className='font-top-s' href="#Kontak">Kontak</Nav.Link>
              </Nav>
              </Col>
            </Container>
          </Navbar>
        </>
      );
    }

export default Beranda;