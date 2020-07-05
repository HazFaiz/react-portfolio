import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Footer(props) {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3 footer-logo">
                    <Col className="p-0" md={3} sm={12}>
                        <p>Contact @ haz.faizul@gmail.com</p>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end " md={3} sm={12}>

                        <a href="https://www.linkedin.com/in/hfaizul/"><ion-icon id="linkedin" name="logo-linkedin" className="icon-big"></ion-icon></a>

                        <a href="https://github.com/HazFaiz"
                        ><ion-icon name="logo-github" id="github" className="icon-big"></ion-icon
                        ></a>

                        <p>Made with &hearts; by Haz</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer

