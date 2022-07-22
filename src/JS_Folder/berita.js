import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Berita() {
  return (
      <CardGroup>
        <Row>
          <div class="card">
          <div class="card-header">
            Featured
          </div>
          <img className="berita-logo:hover" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomNC1-7ZYZFjkExh0jChhSNNfypDcAcmtCQ&usqp=CAU'></img>
          <div class="card-body">
            <h5 class="card-title">Berita Penting</h5>
           <p class="card-text">Contoh berita penting #1</p>
           <a href="#" class="btn btn-primary">Lebih lanjut</a>
         </div>
        </div>
        </Row>
        <br></br>
        <Row>
        <br></br>
        <Col>
        <br></br>
        <Card>
            <Card.Img src="https://distan.bandungkab.go.id/uploads/slider_photos/thumbnails/qPKrpBDMvD0WoEvxeqQVplWmc7uIUswczweZBoPY_thumbnail_resize_624x351px.jpeg" />
            <Card.Body>
              <Card.Title>Card Pertama #1</Card.Title>
              <Card.Text>
                Contoh Card untuk berita #1
              </Card.Text>
              <Button variant="primary">Lebih Lanjut</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
        <br></br>
          <Card>
            <Card.Img src="https://diskes.baliprov.go.id/wp-content/uploads/photo-gallery/str-1-web_up.jpg?bwg=1640150431" />
            <Card.Body>
              <Card.Title> Card Pertama #2</Card.Title>
              <Card.Text>
                Contoh Card untuk berita #2
              </Card.Text>
              <Button variant="primary">Lebih Lanjut</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
        <br></br>
          <Card>
            <Card.Img src="https://dishub.semarangkota.go.id/wp-content/uploads/2016/12/IMG_6414-2000x1200.jpg" />
            <Card.Body>
              <Card.Title>Card Pertama #3</Card.Title>
              <Card.Text>
                Contoh Card untuk berita #3
              </Card.Text>
              <Button variant="primary">Lebih Lanjut</Button>
            </Card.Body>
         </Card>
         </Col>
         </Row>
       </CardGroup>
  );
}

export default Berita;