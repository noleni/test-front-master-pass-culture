import NewsItem from './NewsItem';

import styles from './styles/NewsList.module.css';


const NewsList = (props: any) => {
  const news = props.onSelection(props.news).map((newsEach:any, index:number) => (
    <NewsItem
      key={index}
      title = {newsEach.title}
      category = {newsEach.category}
      date = {newsEach.date}
      text = {newsEach.text}
      images = {newsEach.images}
    />
  ));
  return <ul className={styles.cards}>{news}</ul>
};

export default NewsList;
