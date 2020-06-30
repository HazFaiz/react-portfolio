import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Footer(props) {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Hazwan Faizul
                    </Col>
                    <Col className="p-0 d-flex justify-content-end footer-logo" md={3} sm={12}>
                        <a href="https://github.com/HazFaiz"
                        >Made with &hearts; by Haz <ion-icon name="logo-github"></ion-icon
                        ></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer

