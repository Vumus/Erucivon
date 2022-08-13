import { React, useEffect, useState } from "react"
import {Row} from "react-bootstrap"
import Beranda from "../../JS_Folder/beranda"
import Footer from "../../JS_Folder/footer"
import "../../CSS_Folder/statis.css"
import { useParams } from "react-router"
import { staticPage } from "../../apilink"

const StatisPage = () => {
    const { id } = useParams()
    const [halStatis, setStatis] = useState(null)
    useEffect(() => {
        getStatis();
        return () => {
            setFullFoto(null);
        };
    }, []);

        function halStatis () {
            const axios = require ("axios");
            axios
                .get(staticPage + id)
                .then(function(response) {
                    setFullFoto(response.data.data);
                    console.log(response.data);
                })
                .catch(function(error) {})
                .then(function() {});
        }

    return (
        <>
            <Row>
                <Beranda />
                    <h3>StatisPage</h3>
                <Footer />
            </Row>
        </>
    )

}
export default StatisPage;