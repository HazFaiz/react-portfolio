import React from 'react'

import omnifood from "../assets/images/omnifoodv2.JPG"
import forkify from "../assets/images/forkifyv2.png"
import marbles from "../assets/images/marblesv2.png"

import Card from "./Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 0, title: 'OmniFood',
                subTitle: `Static page for the fictional healthy food delivery 'OmniFood'`,
                imgSrc: omnifood,
                link: 'https://hazfaiz-omnifood.netlify.app/',
                github: 'https://github.com/HazFaiz/Omni-Static-Page',

                selected: false
            }, {
                id: 1, title: 'Forkify',
                subTitle: 'A simple meal and recipe search app using Javascript ES6, Babel, Webpack and third APIs',
                imgSrc: forkify,
                link: 'https://reverent-mcclintock-fa7efa.netlify.app/',
                github: 'https://github.com/HazFaiz/Forkify',
                selected: false
            }, {
                id: 2, title: 'Marbles',
                subTitle: 'A full Stack Mental Health community support and outreach app built using ReactJS, Python Flask, PostgreSQL with external email and texting APIs',
                imgSrc: marbles,
                link: 'https://marbles-jan-20.netlify.app/',
                github: 'https://github.com/HazFaiz/Marbles',
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

    makeItems = (item) => {

        return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />

    }

    render() {

        let columns = []

        this.state.items.forEach((item, idx) => {
            columns.push(
                this.makeItems(item)
            )

            // if ((idx + 1) % 2 === 0) { columns.push(<div className="w-100 separating-div" key={null}></div>) }
        })

        return (
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {columns}
                </Row>
            </Container>
        )
    }


}

export default Carousel;




// render() {
//     let columns = []
//     this.state.items.forEach((item, idx) => {

//         columns.push(
//             this.makeItems(item)
//         )
//         if ((idx + 1) % 3 === 0) { columns.push(<div className="w-100" key={null}></div>) }
//     })


//     return (
//         <Container fluid={true}>
//             <Row className="justify-content-around">
//                 {columns}
//             </Row>
//         </Container>
//     )
// }




{/* <div className="d-inline-block g-card" onClick={e => props.click(props.item)}>
    <img className="g-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
    {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
</div>

    <animated.div className="g-card-info" style={style}>
        <p className="g-card-title">{props.title}</p>
        <p className="g-card-subtitle">{props.subTitle}</p>
        <p><a href={props.link} target="_blank" rel="noopener noreferrer">Live Site</a> Check the Github</p>
    </animated.div> */}