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
        <Box className='Box'>
                <div className='footer-wide'>
                    <div className='head-foot'>DINAS PERHUBUNGAN KABUPATEN TULANG BAWANG</div>
                    <br></br>
                    <Row>
                        <Column className='List'>
                            <h1 className='Column'>Pelayanan</h1>
                            <div href="#">Contoh Pelayanan #1</div>
                            <div href="#">Contoh Pelayanan #2</div>
                            <br></br>
                        </Column>
                        <Column className='List'>
                            <h1 className='Column'>Hubungi Kami</h1>
                            <div href="#">Contoh Hubungi Kami #1</div>
                            <div href="#">Contoh Hubungi Kami #2</div>
                            <br></br>
                        </Column>
                        <Column className='List'>
                            <h1 className='Column'>Sosial Media</h1>
                            <div href="#">Facebook</div>
                            <div href="#">Instagram</div>
                            <div href="#">Twitter</div>
                            <br></br>
                        </Column>
                    </Row>
                </div>
                <div className='footer-narrow'>
                    <div className='head-foot'>DINAS PERHUBUNGAN KABUPATEN TULANG BAWANG</div>
                    <br></br>
                    <Row className='List'>
                        <h1 className='Column'>Pelayanan</h1>
                        <div href="#">Contoh Pelayanan #1</div>
                        <div href="#">Contoh Pelayanan #2</div>
                        <br></br>
                    </Row>
                    <Row className='List'>
                        <h1 className='Column'>Hubungi Kami</h1>
                        <div href="#">Contoh Hubungi Kami #1</div>
                        <div href="#">Contoh Hubungi Kami #2</div>
                        <br></br>
                    </Row>
                        <Row className='List'>
                        <h1 className='Column'>Hubungi Kami</h1>
                        <div href="#">Contoh Hubungi Kami #1</div>
                        <div href="#">Contoh Hubungi Kami #2</div>
                        <br></br>
                    </Row>
                </div>
        </Box>
    );
  };
  export default Footer;