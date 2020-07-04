import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";

import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hazwan Faizul - WebDev Portfolio",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: `Hazwan F`,
        subtitle: `Full Stack Web Developer`,
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
        <Container className="p-0 content" fluid={true}>

          {/**** Navbar Section *******/}
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

          {/**** Routers Section *******/}

          <Route path="/" exact render={() => <Homepage title={this.state.home.title} subtitle={this.state.home.subtitle} subtext={this.state.home.subtext} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />


          {/**** Footer Section *******/}
          <Footer />

        </Container>
      </Router >
    );
  }
}

export default App;
