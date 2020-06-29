import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Garret Love",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: `I'm Hazwan`,
        subtitle: `Lorem Ipsum`,
        subtext: `Checkout my projects below`,
      },

      about: {
        title: `About Me`,
      },

      contact: {
        title: `Let's talk`,
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">

            <Navbar.Brand >Hazwan Faizul</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>

        </Container>
      </Router>
    );
  }
}

export default App;
