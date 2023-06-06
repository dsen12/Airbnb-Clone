import React from "react";
import './ListingsCard.css';

const ListingsCard = ({ url, location, stars, distance, dates, price }) => {
    return (
      <div className='listing-card'>
        <div>
          <img className="listing-image" width={307} height={292} src={url} alt="airbnb location listing in .."></img>
          <div className='heart-button'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'var(--f-mkcy-f)', strokeWidth: '2', overflow: 'visible' }}>
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
          </div>
          <div className='listing-info'>
            <div className='listing-title'>
              <div className='listing-location'>
                {location}
              </div>
              <div className='listing-stars'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}>
                    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
                  </svg>
                </span>
                <span>
                  {stars}
                </span>
              </div>
            </div>
            <div className='listing-distance'>
              {distance} kilometres away
            </div>
            <div className='listing-dates'>
              {dates}
            </div>
            <div className='listing-price'>
              <strong>${price} AUD</strong> total
            </div>
          </div>
        </div>
      </div>
    );
}
export default ListingsCard;
