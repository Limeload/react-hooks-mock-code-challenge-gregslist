import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {
  const [arrayListings , setListings] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((response) => response.json())
    .then((data) => setListings(data));
  }, []);

  function handleRemoveListing(id) {
    const newListings = arrayListings.filter((list) => list.id !== id);
    setListings(newListings);
  }

  let filterSearch = arrayListings.filter((list) => 
  list.description.toLowerCase().includes(searchString.toLowerCase()));

  return (
    <div className="app">
      <Header onSearch={setSearchString} />
      <ListingsContainer 
      arrayListings={filterSearch} 
      onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
