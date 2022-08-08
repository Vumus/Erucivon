import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { galeriImg } from '../apilink';
import Box from '@mui/material/Box';
import '../CSS_Folder/galeri.css';

const Galeri = () => {
    const [DataGaleri, setDataGaleri] = useState(null);
    useEffect(() => {
        getNews();
        return () => {
            setDataGaleri(null);
        };
    }, []);

    function getNews() {
        const axios = require("axios");
        axios
            .get(galeriImg)
            .then(function(response) {
                setDataGaleri(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        {(DataGaleri != null) ? 
            <Box className='galeri-bg'>
                <h1 className='galeri-header'>Galeri</h1>
                {
                    DataGaleri && DataGaleri.map((item, index) => {
                    return (
                        <Card className='galeri-card'>
                            <Card.Body className='body-galeri-card'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
            </Box>: ''
        }
        </>
    );
};

export default Galeri;
