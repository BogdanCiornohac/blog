import React, { useState } from "react";
import { AiFillHeart } from 'react-icons/ai'
import { Rating } from "react-simple-star-rating";
import { BsTrash } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import './card.css'

const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+"
];
const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045"
];

const Card = (props) => {
    const [liked, setLiked] = useState(props.fav);
    const [, setRating1] = useState(0);
    const handleRating1 = (rate) => setRating1(rate);
    return (
        <div className="review">
            <div className="text-container">
                <div className="title-review">
                    <h1>{props.title}</h1>
                </div>
                <div className="rev-img">
                    <div>
                        <img src={props.photo} alt="cat" />
                        <p style={{textAlign:"center"}}>By @{props.user}</p>
                    </div>
                    <p> {props.text}</p>
                </div>
            </div>
            <div className="heart-container">
                <Rating
                    onClick={handleRating1}
                    size={30}
                    readonly
                    transition
                    allowFraction
                    initialValue={props.rating}
                    showTooltip
                    tooltipArray={tooltipArray}
                    fillColorArray={fillColorArray}
                />
                <AiFillHeart className={liked ? "heart active" : "heart"} onClick={() => setLiked(!liked)} />
                <BiLinkExternal className="icon-style" onClick={() => { window.open(props.goto, "_blank"); }} />
                <BsTrash className="icon-style" />
            </div>
        </div>
    );
}

export default Card;