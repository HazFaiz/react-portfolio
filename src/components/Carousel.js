import React from 'react'

import omnifood0 from "../assets/images/omnifood.png"
import omnifood1 from "../assets/images/omnifood1.png"
import omnifood2 from "../assets/images/omnifood2.png"

import Card from "./Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 0, title: 'Project 0',
                subTitle: 'Project 0 Details',
                imgSrc: "tbd",
                link: `tbd`,
                selected: false
            }, {
                id: 1, title: 'Project 1',
                subTitle: 'Project 1 Details',
                imgSrc: `tbd`,
                link: `tbd`,
                selected: false
            }, {
                id: 2, title: 'Project 2',
                subTitle: 'Project 2 Details',
                imgSrc: `tbd`,
                link: `tbd`,
                selected: false
            },
            {
                id: 3, title: 'Project 3',
                subTitle: 'Project 2 Details',
                imgSrc: `tbd`,
                link: `tbd`,
                selected: false
            },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        //For the particular item that was selected, if its selected is true, set it to false and vice versa
        items[id].selected = items[id].selected ? false : true

        //To get only 1 item active at a time, we set all the other unselected items to selected false
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }


}

export default Carousel;