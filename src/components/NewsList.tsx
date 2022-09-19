import React, {useState, useEffect} from 'react';

import NewsData from '../news.json';
import NewsItem from './NewsItem';

import styles from './styles/NewsList.module.css';

const NewsList : React.FC<{onSelectCategory: (NewsData : {}) => []; newItem :{}[]}> = (props) => {

  const [dataNews, setDataNews] = useState(NewsData.news);
  let count = 0;

  useEffect(() => {
    setDataNews(props.onSelectCategory(NewsData.news))
  }, [props]);

  console.log(props.newItem);

  const news = dataNews.map((newsEach) => (
    <NewsItem
      key = {count++}
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
