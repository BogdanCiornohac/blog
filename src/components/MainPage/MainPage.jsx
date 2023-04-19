import React from "react";
import Profile from "./page components/Profile";
import Content from "./page components/content/Content";
import './main.css'

const MainPage = ()=>{


    return(
        <div className="main-page">
            <div className="spacer3 layer2"></div>
            <Profile/>
            <Content/>
        </div>
    );

}

export default MainPage;