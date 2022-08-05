import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
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
            .get(("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=5&per_page=4"))
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
                {
                    DataGaleri && DataGaleri.map((item, index) => {
                    return (
                        <Card className='galeri-card'>
                            <Card.Body className='body-galeri-card'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
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
