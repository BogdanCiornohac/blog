import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import './popupcard.css'


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

const PopUpCard = (props) => {

    const [, setRating1] = useState(0);
    const handleRating1 = (rate) => setRating1(rate);

    return (props.trigger) ? (
        <div className="popup-modal">
            <div className="popup-overlay" >
                <div className="popup-card" >
                    <div className="content-popup" >

                        <div className="header-popup">
                            <h1 style={{ fontSize: '60px' }}>Add Review</h1>
                            <button className="btn" onClick={() => props.setTrigger(false)} ><span>X</span></button>
                        </div>

                        <input type="text" placeholder="Write title here..." name="text" class="input" />

                        <textarea name="Say sometginh about it..." id="1" cols="60" rows="15"></textarea>

                        <Rating
                            onClick={handleRating1}
                            size={30}
                            transition
                            allowFraction
                            initialValue={0}
                            showTooltip
                            tooltipArray={tooltipArray}
                            fillColorArray={fillColorArray}
                        />

                    </div>
                </div>
            </div>
        </div>

    ) : "";
}

export default PopUpCard