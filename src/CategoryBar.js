import React from "react";
import "./CategoryBar.css";
import omg from "./images/category-logos/1-omg.jpeg";

export default function CategoryBar() {
    return (
        <div className='category-bar section-padding'>
            <div className='category-scroll'>
                 <span>
                    <img className='category-icon' src={omg} alt='icon for OMG! category'></img>
                    <div className='category-label'>OMG!</div>
                </span>
            </div>
            <div className='filters-menu'>
                filters
            </div>
        </div>

    );
}
