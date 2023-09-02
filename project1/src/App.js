import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {id: 1, checked: true, item:"React Learning"}, 
    {id: 2, checked: true, item:"Youtube surfing"}, 
    {id: 3, checked: false, item:"PocketFm"}
  ]);

  const handleCheck = (id) => {
    const itemsNew = items.map((items) => items.id == id ? {...items,checked:!items.checked}: items)
    setItems(itemsNew)
    localStorage.setItem('todo_list', JSON.stringify(itemsNew))
  }

  const handleDelete = (id) => {
      const itemsNew = items.filter((items) => items.id !== id)
      setItems(itemsNew)
      localStorage.setItem('todo_list', JSON.stringify(itemsNew))
  }

  return (
    <div className="App">
        <Header title="My To Do List"/>
        <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
        <Footer length={items.length} />
    </div>
  );
}

export default App;
