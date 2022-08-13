import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { galeriVid } from '../../apilink';
import Box from '@mui/material/Box';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import '../../CSS_Folder/galeri.css';

const GaleriVideo = () => {
    const [GaleriVideo, setGaleriVideo] = useState(null);
    useEffect(() => {
        getVideo();
        return () => {
            setGaleriVideo(null);
        };
    }, []);

    function getVideo() {
        const axios = require("axios");
        axios
            .get(galeriVid)
            .then(function(response) {
                setGaleriVideo(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        {(GaleriVideo != null) ? 
            <Box className='galeri-full-bg'>
                <Row className='Baris'>
                    <Beranda />
                    <h1 className='galeri-header'>Galeri Video</h1>
                {
                    GaleriVideo && GaleriVideo.map((item, index) => {
                    return (
                        <Card className='galeri-card'>
                            <Card.Body className='body-galeri-card'>
                                <Card.Img className='card-image' src={item.image_gallery_item[0].thumbnail_url} />
                            </Card.Body>
                            <Button href={`/VideoFull/${item.slug}`}>Detail</Button>
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

export default GaleriVideo;