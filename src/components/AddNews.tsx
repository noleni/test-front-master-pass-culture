import React, {useRef, useState} from 'react';

import DropDown from "./UI/Dropdown";
import Card from "./UI/Card";

import styles from './styles/AddNews.module.css';

const AddNews = (props : any) => {

  const refTitle = useRef<HTMLInputElement | null>(null);
  const refDate = useRef<HTMLInputElement | null>(null);
  const refText = useRef<HTMLInputElement | null>(null);
  const [category, setCategory] = useState<any | null >(null);

  const addNewsHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAddNews(refTitle.current?.value, category, refDate.current?.value, refText.current?.value)
  }

  return (
    <Card>
      <form action="" className={styles.input}>
        <label htmlFor="title">Titre</label>
        <input type="text" ref={refTitle} />
        <DropDown defaultValue={category} onChange={setCategory}/>
        <label htmlFor="date">Date</label>
        <input type="date" ref={refDate} />
        <label htmlFor="text">Texte</label>
        <input type="text" ref={refText} />
        <button type="submit" onClick={addNewsHandler}>Envoyer !</button>
      </form>
    </Card>
  )
};

export default AddNews;
