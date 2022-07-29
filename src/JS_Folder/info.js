import React from 'react';
import {
    Card,
    Col,
    Row
} from 'react-bootstrap';
import '../CSS_Folder/info.css';
import Box from '@material-ui/core/Box';

const Info = () => {
    return (
        <Box className='info-bg'>
            <Row className='Baris'>
                <Col md={3}>    
                    <Card className='Kartu'>
                    <Card.Header>Featured</Card.Header>
                    <img style={{width: '100%'}} src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg'/>
                    </Card>
                </Col>
                <br/>
                <Col md={3}>    
                    <Card className='Kartu'>
                    <Card.Header>Featured</Card.Header>
                    <img style={{width: '100%'}} src='https://dishub.kaltaraprov.go.id/storage/uploads/images/pembagian%20masker.jpg'/>
                    </Card>
                </Col>
                <br/>
                <Col md={3}>    
                    <Card className='Kartu'>
                    <Card.Header>Featured</Card.Header>
                    <img style={{width: '100%'}} src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg'/>
                    </Card>
                </Col>
            </Row>
        </Box>
    )
}

export default Info;