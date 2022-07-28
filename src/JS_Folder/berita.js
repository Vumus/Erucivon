import { Card, Container, Row, Col, Image, Button, ListGroup } from "react-bootstrap";

function Berita() {

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <Card style={{ width: "50vmax", height: "95%"}}>
            <Card.Header>
              Featured
            </Card.Header>
            <img src="https://cdn-2.tstatic.net/wartakota/foto/bank/images/bus-sekolah-untuk-mengangkut-warga-lanjut-usia-lansia.jpg"/>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br></br>
          </Col>
          </Row>
          <Row>
          <Col md={3}>
            <Card style={{width: "auto", height: "auto"}}>
              <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-1 m-1 text-white">
                  <Card.Title className="text-center">Hindari Jalan-jalan sempit, gelap dan sepi</Card.Title>
                  <Card.Text className="text-left">
                    Penelitian mengungkap bahwa pelaku kriminal lebih sering melakukan kegiatannya pada saat sedikitnya saksi mata. 
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          <br></br>
          </Col>
          <Col md={3}>
            <Card style={{width: "auto", height: "auto"}}>
              <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-1 m-1 text-white">
                  <Card.Title className="text-center">Waspada Pelaku Pelecehan Sexual!</Card.Title>
                  <Card.Text className="text-left">
                    Pelecehan Terhadap Semut Rangrang didepan sumur kalo kopi iya tapi kemudian kakang bahwa selalu.
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            </Card>
          </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Berita;
