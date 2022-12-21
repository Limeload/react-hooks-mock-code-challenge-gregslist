import React , {useState} from "react";

function ListingCard({
  list: { id, image, description, location}, onRemoveListing}) {
   const [isFavorite , setFavorite] = useState(true)

   function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }

  return (
    <li className="card">

      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
         onClick={handleDeleteClick}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
