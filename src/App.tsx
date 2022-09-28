import React, { useState, useEffect } from "react";

import NewsData from './news.json';
import NewsList from "./components/NewsList";
import AddNews from "./components/AddNews";
import Navbar from "./components/Navbar";


function App() {

  const [dataNews, setDataNews] = useState<{}[] >([]);
  useEffect(() => {
    setDataNews(NewsData.news)
  }, []);
  const [selectedCategory, setSelectedCategory] = useState({ value: 'Tous', label: 'Tous' });
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const selectionHandler = (data : any) => {
    if (selectedCategory.value !== 'Tous') {
      return data.filter((option:any) => option.category.includes(selectedCategory.value));
    } else if (selectedDate !== '') {
      return data.filter((option:any) => option.date === selectedDate)
    };
    return data;
  };

  const dateChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const displayFormhandler = (event : React.SyntheticEvent) => {
    event.preventDefault();
    setDisplayForm(true);
  };

  const addNewsHandler = (title:string, category:string, date:any, text:string) => {
    setDataNews(prev => [...prev, { title: title, category: category, date: date, text: text }]);
    setDisplayForm(false);
  };

  return (
    <div className="App">
      {!displayForm &&
        <>
          <Navbar
            value={selectedDate}
            onSelect={setSelectedCategory}
            onChange={dateChangeHandler}
            onClick={displayFormhandler}
          />
          <NewsList
            news={dataNews}
            onChange={setSelectedCategory}
            onSelection={selectionHandler}
          />
        </>
      }
      {displayForm && <AddNews onAddNews={addNewsHandler} /> }
    </div>
  );
};

export default App;
