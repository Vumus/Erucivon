import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import '../CSS_Folder/berita.css';

const News = () => {
    const [DataNews, setDataGaleri] = useState(null);
    useEffect(() => {
        getNews();
        return () => {
            setDataGaleri(null);
        };
    }, []);

    function getNews() {
        const axios = require("axios");
        axios
            .get(("http://adminmesuji.embuncode.com/api/news?instansi_id=5&per_page=6"))
            .then(function(response) {
                setDataGaleri(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        <h1 className='judul'>Berita Terkini</h1>
        {(DataNews != null) ? 
            <Row className='news-row'>
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

export default News;