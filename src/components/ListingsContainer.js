import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({arrayListings, onRemoveListing}) {
  return (
    <main>
      <ul className="cards">
        {arrayListings.map((list) => (
        <ListingCard 
        key={list.id}
        list = {list}
        onRemoveListing={onRemoveListing}
        />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
