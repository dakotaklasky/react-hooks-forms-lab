import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItemData, setNewItemData] = useState({
    name: "",
    category: "Produce"
  })
  // const [newItemName,setNewItemName] = useState("")
  // const [newCategoryName,setNewCategoryName] = useState("Produce")

  
  function handleChange(event){
    setNewItemData({...newItemData, [event.target.name]: event.target.value})
  }
  
  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemData.name,
      category: newItemData.category
      //...formData
    }

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" value={newItemData.name} />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category" value={newItemData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
