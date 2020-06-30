import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import CardInfo from "./CardInfo"

function Card(props) {
    return (
        <div class="flip-card-container">
            <div class="flip-card d-inline-block g-card">
                <div class="flip-card-front">
                    <img className="g-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
                </div>
                <div class="flip-card-back">
                    <div className="g-card-info">
                        <p className="g-card-title">{props.item.title}</p>
                        <p className="g-card-subtitle">{props.item.subTitle}</p>
                        <p><a href={props.item.link} target="_blank" rel="noopener noreferrer">Live Site</a> Check the Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;



















{/* <div className="d-inline-block g-card" onClick={e => props.click(props.item)}>
    <img className="g-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
    {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
</div>

    <animated.div className="g-card-info" style={style}>
        <p className="g-card-title">{props.title}</p>
        <p className="g-card-subtitle">{props.subTitle}</p>
        <p><a href={props.link} target="_blank" rel="noopener noreferrer">Live Site</a> Check the Github</p>
    </animated.div> */}