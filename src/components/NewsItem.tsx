import Card from './UI/Card';

import styles from './styles/NewsItem.module.css';


interface NewsItemProps {
  title : string;
  category: string;
  date: string;
  text: string;
  images?: string | string[];
}

const NewsItem = (props : NewsItemProps) => {
  return (
    <li className={styles.li}>
      <Card className={styles.card}>
        <h3>{props.title}</h3>
        <div className={styles.infos}>
          <p>{props.category}</p>
          <p>{props.date}</p>
        </div>
        <p>{props.text}</p>
      </Card>
    </li>
  )
}

export default NewsItem;
