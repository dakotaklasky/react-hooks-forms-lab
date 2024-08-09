import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")

  function handleSearchChange(event){
    setSearchInput(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(newItem){
    //add new item to list, list state exists in App so need to use that
    setItems([...items,newItem])

  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filteredItemsToDisplay = itemsToDisplay.filter((item)=>{
    if(searchInput === "") return true;

    return item.name.toUpperCase().includes(searchInput.toUpperCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchInput}/>
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
