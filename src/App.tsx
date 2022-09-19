import "./App.css";

import React, {useState} from "react";

import NewsList from "./components/NewsList";
import DropDown from "./components/UI/Dropdown";
import AddNews from "./components/AddNews";

function App() {

  const [selectedCategory, setSelectedCategory] = useState({ value: 'Tous', label: 'Tous' });
  const [displayForm, setDisplayForm] = useState(false);
  const [newItem, setNewItem] = useState([{}]);

  const selectionHandler = (data : any) => {
    if (selectedCategory.value !== 'Tous') {
      return data.filter((option:any) => option.category.includes(selectedCategory.value));
    } else {
      return data;
    }
  }

  const displayFormhandler = (event : React.SyntheticEvent) => {
    event.preventDefault();
    setDisplayForm(true);
  };

  const addNewsHandler = (title:string, category:string, date:any, text:string) => {
    setDisplayForm(false);
    setNewItem([{ title: title, category: category, date: date, text: text }])
  };

  return (
    <div className="App">
      {!displayForm &&<DropDown defaultValue={selectedCategory}
                onChange={setSelectedCategory}
                /> }
      {!displayForm && <button type="button" onClick={displayFormhandler}>Ajoute une news</button> }
      {!displayForm && <NewsList onSelectCategory={selectionHandler} newItem={newItem} /> }
      {displayForm && <AddNews onAddNews={addNewsHandler}  /> }
    </div>
  );
}

export default App;
