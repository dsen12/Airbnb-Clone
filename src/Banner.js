import React from "react";
import './Banner.css';
import BannerImage from "./images/Banner-Image.png";


export default function Banner() {
    return (
        <div className='banner section-padding'>
          <h1>Introducing Airbnb Rooms and more</h1>
          <span> 
            <img src={BannerImage} alt='screenshot of video' height={30} width={53}></img>
            <div>Watch the Rooms film (US)</div>
            <div className='divider'></div>
            <div>Learn more</div>
          </span>
        </div>
    );
}