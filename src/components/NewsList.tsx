import React, {useState} from 'react';

import NewsData from '../news.json';
import NewsItem from './NewsItem';

import styles from './styles/NewsList.module.css';



const NewsList = (props:any) => {

  const [dataNews, setDataNews] = useState(NewsData.news);

  const news = dataNews.map((newsEach) => (
    <NewsItem
      title = {newsEach.title}
      category = {newsEach.category}
      date = {newsEach.date}
      text = {newsEach.text}
      images = {newsEach.images}
    />

  ))

  return <ul className={styles.cards}>{news}</ul>
};

export default NewsList;
