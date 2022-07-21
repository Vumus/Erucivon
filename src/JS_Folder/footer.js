import React from 'react';
import {
    Row,
    Container,
    Col as Column,
} from 'react-bootstrap';
import '../CSS_Folder/footer.css';
import Box from '@material-ui/core/Box';


const Footer = () => {
    return (
        <Box>
                <div className='Box'>
                    <div className='head-foot'>DINAS PERHUBUNGAN KABUPATEN TULANG BAWANG</div>
                    <br></br>
                    <Row>
                        <Column>
                            <h1 className='Column'>Tentang Kami</h1>
                            <div href="#">Contoh Tentang Kami #1</div>
                            <div href="#">Contoh Tentang Kami #2</div>
                        </Column>
                        <Column>
                            <h1 className='Column'>Pelayanan</h1>
                            <div href="#">Contoh Pelayanan #1</div>
                            <div href="#">Contoh Pelayanan #2</div>
                        </Column>
                        <Column>
                            <h1 className='Column'>Hubungi Kami</h1>
                            <div href="#">Contoh Hubungi Kami #1</div>
                            <div href="#">Contoh Hubungi Kami #2</div>
                        </Column>
                        <Column>
                            <h1 className='Column'>Sosial Media</h1>
                            <div href="#">Facebook</div>
                            <div href="#">Instagram</div>
                            <div href="#">Twitter</div>
                        </Column>
                    </Row>
                </div>
            
        </Box>
    );
  };
  export default Footer;