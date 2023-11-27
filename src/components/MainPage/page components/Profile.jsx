import React, { useState } /*,{ useState }*/ from "react";
import eu from '../../images/profile.png'
import PopUpCard from "./content/PopUpCard";
//import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
import './profile.css'

const Profile = () => {

    //const [profileImg, setProfileImg] = useState(eu);
    const [showPopUpCard, setShowPopUpCard] = useState(false);

    return (
        <div className="profile-section">
            <div className="profile-photo">
                <img src={eu} alt="profile" className="profile-photo-img" />
                {/* <input type='file' style={{ backgroundImage: `${MdOutlineAddPhotoAlternate}` }} className="change-photo" onChange={(event) => {
                    console.log(event.target.files[0]);
                    setProfileImg(URL.createObjectURL(event.target.files[0]));
                }} /> */}
            </div>

            <button className="button-create" onClick={()=> setShowPopUpCard(!showPopUpCard)}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create post
                </span>
            </button>
                
                <PopUpCard trigger = {showPopUpCard} setTrigger ={setShowPopUpCard}/>
                
            <div className="container-input">
                <input type="text" placeholder="Search" name="text" className="input1 input2" />
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill="#64c0c3"></path>
                </svg>
            </div>

        </div>
    );
}

export default Profile;