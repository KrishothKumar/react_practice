import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';
import { useState, useEffect } from "react";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";

function App() {
  // [
  //   {id: 1, checked: true, item:"React Learning"}, 
  //   {id: 2, checked: true, item:"Youtube surfing"}, 
  //   {id: 3, checked: false, item:"PocketFm"}
  // ]
  const [items, setItems] = useState([]);

  // It will run many time with and without dependancy.
  useEffect(() => {
    JSON.parse(localStorage.getItem('todo_list'))
  }, [])

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  
  const addItem = (item) => {
    const id = (items.length > 0) ? items[items.length-1].id+1 : 0;
    const addNewItem = {id, checked: false, item}
    const addListItems = [...items, addNewItem]
    setItems(addListItems)
    localStorage.setItem('todo_list', JSON.stringify(addListItems))
  }

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

  const handleSubmit = (e) => {
      e.preventDefault()
      if(!newItem) return;
      addItem(newItem)
      setNewItem('')
  }

  return (
    <div className="App">
        <Header title="My To Do List"/>
        <AddItems newItem={newItem}  setNewItem={setNewItem} handleSubmit={handleSubmit} />
        <SearchItems search={search} setSearch={setSearch}/>
        <Content items={items.filter(items => ((items.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
        <Footer length={items.length} />
    </div>
  );
}

export default App;