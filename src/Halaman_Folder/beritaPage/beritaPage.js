import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {Row, Col, Card} from "react-bootstrap";
import { artikelNews } from '../../apilink';
import Beranda from '../../JS_Folder/beranda';
import './beritaPage.css'

const BeritaPage = () => {
    const [DataNews, setDataNews] = useState(null);
    useEffect(() => {
        getNews();
        return () => {
            setDataNews(null);
        };
    }, []);

    function getNews() {
        const axios = require("axios");
        axios
            .get(artikelNews)
            .then(function(response) {
                setDataNews(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        <h1 className='berita-header'>Berita</h1>
        {(DataNews != null) ? 
            <Row className='news-row'>
                <Beranda />
                {
                    DataNews && DataNews.map((item, index) => {
                    return (
                        <Card className='card-news'>
                            <Card.Body className='card-body'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                                <button>Detail</button>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
            </Row>: ''
        }
        </>
    );
};

export default BeritaPage;