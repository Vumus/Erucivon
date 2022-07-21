import Carousel from 'react-bootstrap/Carousel';
import '../CSS_Folder/sleding.css'

function Sleding() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="slide"
          src="https://kepulauanselayarkab.go.id/foto_berita/40img-20210715-wa0021_resize_72.jpg"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="slide"
          src="http://gorontaloprov.go.id/wp-content/uploads/2021/09/4184d51d-c928-4ac7-9876-71dd93e3f227-e1631859054891.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sleding;