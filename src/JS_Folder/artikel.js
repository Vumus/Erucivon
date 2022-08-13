import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import '../CSS_Folder/artikel.css';
import { artikelMain } from '../apilink';
import { Link } from 'react-router-dom';

const Artikel = () => {
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
        <h1 className='artikel-header'>Artikel Terkini</h1>
        {(DataArtikel != null) ? 
            <Row className='artikel-row'>
                {
                    DataArtikel && DataArtikel.map((item, index) => {
                    return (
                            <Card className='artikel-card'>
                                <Card.Body className='card-body'>
                                    <Card.Img src={item.image_file_data} />
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.intro}</Card.Text>
                                    <Button href={`/ArtikelFull/${item.id}`}>Detail</Button>
                                </Card.Body>
                            </Card>
                    )
                    })
                }
            </Row>: ''
        }
        </>
    );
};

export default Artikel;