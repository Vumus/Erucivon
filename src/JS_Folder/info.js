import React from 'react';
import {
    Card,
    ListGroup
} from 'react-bootstrap';
import '../CSS_Folder/info.css';
import Box from '@material-ui/core/Box';


const Info = () => {
    return (
        <Box className='info-bg'>
            <Card style={{ width: '30%' }}>
            <Card.Header>Featured</Card.Header>
            <img src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg'/>
            </Card>
        </Box>
    )
}

export default Info;