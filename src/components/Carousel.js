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
                imgSrc: omnifood0,
                link: 'https://www.google.com/',
                selected: false
            }, {
                id: 1, title: 'Project 1',
                subTitle: 'Project 1 Details',
                imgSrc: omnifood0,
                link: 'https://www.google.com/',
                selected: false
            }, {
                id: 2, title: 'Project 2',
                subTitle: 'Project 2 Details',
                imgSrc: omnifood0,
                link: 'https://www.google.com/',
                selected: false
            },
            {
                id: 3, title: 'Project 3',
                subTitle: 'Project 2 Details',
                imgSrc: omnifood0,
                link: 'https://www.google.com/',
                selected: false
            },
            {
                id: 3, title: 'Project 3',
                subTitle: 'Project 2 Details',
                imgSrc: omnifood0,
                link: 'https://www.google.com/',
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