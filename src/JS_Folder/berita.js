import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Berita() {
  return (
      <CardGroup>
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
       </CardGroup>
  );
}

export default Berita;