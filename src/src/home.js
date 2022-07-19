import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Induk(){
  return(
    function Home() {
      return (
        <>
          <Navbar bg="dark" variant="dark">
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' width={95} height={110}></img>
            <Container>
              <Navbar.Brand href="#main">Dinas Perhubungan</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Profile">Profile</Nav.Link>
                <Nav.Link href="#Berita">Berita</Nav.Link>
                <Nav.Link href="#Info">Info</Nav.Link>
                <Nav.Link href="#Galeri">Galeri</Nav.Link>
                <Nav.Link href="#Kontak">Kontak</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }
    
    function Berita() {
      return (
        <Card style={{ width: '30rem', height: '40rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Hot News!!</Card.Title>
            <Card.Text>
              Ini merupakan Kartu Berita yang akan diinput dari Halaman Admin (Front End)
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
  );
}


export default Induk;