import { render } from '@testing-library/react';
import axios from 'axios';
import {react, useState, useEffect, Fragment} from 'react';
import { Card, Row } from 'react-bootstrap';
import '../CSS_Folder/berita.css';

function Berita() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    getArtikel();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function getArtikel() {
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=4&per_page=3').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

    return (
    <>
      {
        (DataResponse != null) ? 
          <div className="container-main">
        {
          DataResponse && DataResponse.map((item, index) => {
            return (
              <Card className='berita-blk'>
                <Card.Body className='berita-body'>{item.title}</Card.Body>
              </Card>
            )
          })
        }
        </div>: ''
      }
    </>
  );
  
}

export default Berita;