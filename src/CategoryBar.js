import React from "react";
import "./CategoryBar.css";
import omg from "./images/category-logos/1-omg.jpeg";
import rooms from "./images/category-logos/2-rooms.jpeg"
import tinyhomes from "./images/category-logos/3-tinyhomes.jpeg"
import amazingviews from "./images/category-logos/4-amazingviews.jpeg"
import thearctic from "./images/category-logos/5-thearctic.jpeg"
import tropical from "./images/category-logos/6-tropical.jpeg"
import mansions from "./images/category-logos/7-mansions.jpeg"
import treehouses from "./images/category-logos/8-treehouses.jpeg"
import boats from "./images/category-logos/9-boats.jpeg"
import countryside from "./images/category-logos/10-countryside.jpeg"
import castles from "./images/category-logos/11-castles.jpeg"
import cabins from "./images/category-logos/12-cabins.jpeg"
import beaches from "./images/category-logos/13-beaches.jpeg"
import islands from "./images/category-logos/14-islands.jpeg"
import trending from "./images/category-logos/15-trending.jpeg"
import farms from "./images/category-logos/16-farms.jpeg"
import offthegrid from "./images/category-logos/17-offthegrid.jpeg"

export default function CategoryBar() {
    return (
        <div className='category-bar section-padding sticky-top'>
            <div className='category-scroll'>
                 <span>
                    <img className='category-icon' src={omg} alt='icon for OMG! category'></img>
                    <div className='category-label'>OMG!</div>
                </span>
                 <span >
                    <img className='category-icon' src={rooms} alt='icon for OMG! category'></img>
                    <div className='category-label'>Rooms</div>
                </span>
                 <span>
                    <img className='category-icon' src={tinyhomes} alt='icon for OMG! category'></img>
                    <div className='category-label'>Tiny Homes</div>
                </span>
                 <span>
                    <img className='category-icon' src={amazingviews} alt='icon for OMG! category'></img>
                    <div className='category-label'>Amazing Views</div>
                </span>
                 <span>
                    <img className='category-icon' src={thearctic} alt='icon for OMG! category'></img>
                    <div className='category-label'>The Arctic</div>
                </span>
                 <span>
                    <img className='category-icon' src={tropical} alt='icon for OMG! category'></img>
                    <div className='category-label'>Tropical</div>
                </span>
                 <span>
                    <img className='category-icon' src={mansions} alt='icon for OMG! category'></img>
                    <div className='category-label'>Mansions</div>
                </span>
                 <span>
                    <img className='category-icon' src={treehouses} alt='icon for OMG! category'></img>
                    <div className='category-label'>Treehouses</div>
                </span>
                 <span>
                    <img className='category-icon' src={boats} alt='icon for OMG! category'></img>
                    <div className='category-label'>Boats</div>
                </span>
                 <span>
                    <img className='category-icon' src={countryside} alt='icon for OMG! category'></img>
                    <div className='category-label'>Countryside</div>
                </span>
                 <span>
                    <img className='category-icon' src={castles} alt='icon for OMG! category'></img>
                    <div className='category-label'>Castles</div>
                </span>
                 <span>
                    <img className='category-icon' src={cabins} alt='icon for OMG! category'></img>
                    <div className='category-label'>Cabins</div>
                </span>
                 <span>
                    <img className='category-icon' src={beaches} alt='icon for OMG! category'></img>
                    <div className='category-label'>Beaches</div>
                </span>
                 <span>
                    <img className='category-icon' src={islands} alt='icon for OMG! category'></img>
                    <div className='category-label'>Islands</div>
                </span>
                 <span>
                    <img className='category-icon' src={trending} alt='icon for OMG! category'></img>
                    <div className='category-label'>Trending</div>
                </span>
                 <span>
                    <img className='category-icon' src={farms} alt='icon for OMG! category'></img>
                    <div className='category-label'>Farms</div>
                </span>
                 <span>
                    <img className='category-icon' src={offthegrid} alt='icon for OMG! category'></img>
                    <div className='category-label'>Off The Grid</div>
                </span>
            </div>
            <div className='filters-menu'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style={{display: 'block', height: '14px', width: '14px', fill: 'currentColor'}} aria-hidden="true" role="presentation" focusable="false" className="">
                    <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
                Filters
            </div>
        </div>
    );
}

