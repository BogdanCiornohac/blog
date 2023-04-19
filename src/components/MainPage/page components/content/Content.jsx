import React from "react";
import Card from "./Card";
import data from './data.js'
import './content.css'

const Content = () => {
    return (
        <div className="content-container">
            <div className="container-box">
                {data.map((item,key) => <Card key={key} user ={item.user} title={item.title} photo = {item.photo} text = {item.text} fav = {item.fav} rating={item.rating} goto={item.goto}/>)}
            </div>
        </div>

    );
}

export default Content;