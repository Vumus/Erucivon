import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {Row, Col, Card, Button} from "react-bootstrap";
import { dokumenList } from '../../apilink';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import '../../CSS_Folder/dokumen.css';

const DokumenPage = () => {
    const [DataDokumen, setDataDokumen] = useState(null);
    useEffect(() => {
        getDokumen();
        return () => {
            setDataDokumen(null);
        };
    }, []);

    function getDokumen() {
        const axios = require("axios");
        axios
            .get(dokumenList)
            .then(function(response) {
                setDataDokumen(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        {(DataDokumen != null) ? 
            <Row className='dokumen-row'>
                <Beranda />
                <h1 className='dokumen-header-page'>Dokumen</h1>
                {
                    DataDokumen && DataDokumen.map((item, index) => {
                    return (
                        <Card className='dokumen-card'>
                            <Card.Body className='card-body'>
                                <Card.Title>{item.dokumen_item[0].dokumen_file_name}</Card.Title>
                                <Card.Text>{item.dokumen_item[0].description_dokumen}</Card.Text>
                                <Button href={`/DokumenFull/${item.slug}`}>Detail</Button>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
                <Footer />
            </Row>: ''
        }
        </>
    );
};

export default DokumenPage;