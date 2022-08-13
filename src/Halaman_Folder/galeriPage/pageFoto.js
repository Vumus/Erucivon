import {React, useState, useEffect} from 'react';
import {Card, Row, Container} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { fotoFull } from '../../apilink';
import '../../CSS_Folder/galeri.css'

const FotoFull = () => {
    const {slug} = useParams();
    const [FullFoto, setFullFoto] = useState(null);
    useEffect(() => {
        getFullFoto();
        return () => {
            setFullFoto(null);
        };
    }, []);

    function getFullFoto() {
        const axios = require("axios");
        axios
            .get(fotoFull + slug)
            .then(function(response) {
                setFullFoto(response.data.data);
                console.log(response.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    console.log(slug);

    return (
        <>
            <Row className='foto-row-full'>
                <Beranda />
                {(FullFoto != null) ?
                    <Card className='foto-card-full'>
                        <Card.Img className='card-image' src={FullFoto[0].image_file_data} />
                    </Card>
                : ' '}
                <Footer />
            </Row>: ''
        </>
    )
}

export default FotoFull;