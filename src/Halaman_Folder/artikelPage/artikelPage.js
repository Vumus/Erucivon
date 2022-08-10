import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {Row, Col, Card, Button} from "react-bootstrap";
import { artikelMain } from '../../apilink';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import '../../CSS_Folder/artikel.css';

const ArtikelPage = () => {
    const [DataArtikel, setDataArtikel] = useState(null);
    useEffect(() => {
        getArtikel();
        return () => {
            setDataArtikel(null);
        };
    }, []);

    function getArtikel() {
        const axios = require("axios");
        axios
            .get(artikelMain)
            .then(function(response) {
                setDataArtikel(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        {(DataArtikel != null) ? 
            <Row className='artikel-row'>
                <Beranda />
                <h1 className='artikel-header'>Artikel</h1>
                {
                    DataArtikel && DataArtikel.map((item, index) => {
                    return (
                        <Card className='artikel-card'>
                            <Card.Body className='card-body'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.intro}</Card.Text>
                                <Button href={`/ArtikelFull/${item.id}`}>Detail</Button>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
                <Footer />
            </Row>: ''
        }
        </>
    );
};

export default ArtikelPage;