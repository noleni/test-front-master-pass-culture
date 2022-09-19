import "./App.css";

import React, {useState} from "react";

import NewsList from "./components/NewsList";
import DropDown from "./components/UI/Dropdown";

function App() {

  const [selectedCategory, setSelectedCategory] = useState({ value: 'Tous', label: 'Tous' });

  const selectionHandler = (data : any) => {
    if (selectedCategory.value !== 'Tous') {
      return data.filter((option:any) => option.category.includes(selectedCategory.value));
    } else {
      return data;
    }
  }

  return (
    <div className="App">
      <DropDown defaultValue={selectedCategory}
                onChange={setSelectedCategory}
      />
      <NewsList onSelectCategory={selectionHandler}/>
    </div>
  );
}

export default App;
