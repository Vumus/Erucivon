import React from 'react';
import {
    Card,
    Col,
    Row
} from 'react-bootstrap';
import '../CSS_Folder/galeri.css';
import Box from '@mui/material/Box';

const Galeri = () => {
    return (
        <Box className='galeri-bg'>
            <Row className='Baris'>
                <Col md={3}>    
                    <Card className='Kartu'>
                    <img style={{width: '100%'}} src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg'/>
                    </Card>
                </Col>
            </Row>
        </Box>
    )
}

export default Galeri;