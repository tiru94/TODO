import React, { useState } from "react";
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const updatedItems = [...todoItems];
        updatedItems[editIndex] = inputValue;
        setTodoItems(updatedItems);
        setEditIndex(null);
      } else {
        setTodoItems([...todoItems, inputValue]);
      }
      setInputValue(""); 
    }
  };
  

  const deleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedItems);
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputValue(todoItems[index]);
  };

  return (
    <div className="container">
      <div className="App">
        <h1>TODO LIST</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add item"
          />
          <button className="add-btn" onClick={addItem}>{editIndex !== null ? "Edit" : "Add"}</button>
        </div>
        <ol className="list">
        {todoItems.map((item, index) => (
  <li key={index} className="list-item">
    <div className="item-text">{item}</div>
    <div className="item-buttons">
      <button className="edit-btn" onClick={() => editItem(index)}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => deleteItem(index)}>
        Delete
      </button>
    </div>
  </li>
))}

        </ol>
      </div>
    </div>
  );
}

export default App;