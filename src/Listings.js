import React from "react";
import ListingDetails from "./ListingDetails";
import ListingsCard from "./ListingsCard";
import './Listings.css'

export default function Listings() {
  return (
    <div className="listings-container">
      {ListingDetails.map((listing, index) => (
        <ListingsCard key={index} {...listing} />
      ))}
    </div>
  );
}