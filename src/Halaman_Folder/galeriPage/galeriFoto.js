import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { galeriImg } from '../../apilink';
import Box from '@mui/material/Box';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import '../../CSS_Folder/galeri.css';

const GaleriFoto = () => {
    const [GaleriFoto, setGaleriFoto] = useState(null);
    useEffect(() => {
        getFoto();
        return () => {
            setGaleriFoto(null);
        };
    }, []);

    function getFoto() {
        const axios = require("axios");
        axios
            .get(galeriImg)
            .then(function(response) {
                setGaleriFoto(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
        {(GaleriFoto != null) ? 
            <Box className='galeri-full-bg'>
                <Row className='Baris'>
                    <Beranda />
                    <h1 className='galeri-header'>Galeri Foto</h1>
                {
                    GaleriFoto && GaleriFoto.map((item, index) => {
                    return (
                        <Card className='galeri-card'>
                            <Card.Body className='body-galeri-card'>
                                <Card.Img className='card-image' src={item.image_gallery_item[0].image_file_data} />
                                <Card.Title>{item.title}</Card.Title>
                                <Button href={`/FotoFull/${item.slug}`}>Full Image</Button>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
                <Footer />
                </Row>
            </Box>: ''
        }
        </>
    );
};

export default GaleriFoto;