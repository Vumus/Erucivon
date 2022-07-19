import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

export default Berita;