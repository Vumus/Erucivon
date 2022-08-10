import {React, useState, useEffect} from 'react';
import {Card, Row, Container} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { newsDetail } from '../../apilink';

const BeritaFull = () => {
    const {id} = useParams();
    const [FullBerita, setFullBerita] = useState([]);
    useEffect(() => {
        getFullBerita();
        return () => {
            setFullBerita(null);
        };
    }, []);

    function getFullBerita() {
        const axios = require("axios");
        axios
            .get(newsDetail + id)
            .then(function(response) {
                setFullBerita(response.data.data);
                console.log(response.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    console.log(id);

    return (
        <>
            <Row className='berita-row'>
                <Beranda />
                <div>
                    <Card>
                        <Card.Title className='berita-header'>{FullBerita.title}</Card.Title>
                        <Card.Img src={FullBerita.image_file_data} />
                        <Card.Text>{FullBerita.content}</Card.Text>
                    </Card>
                </div>
                <Footer />
            </Row>: ''
        </>
    )
}

export default BeritaFull;