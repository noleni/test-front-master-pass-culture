import Card from './UI/Card';

import logo from "../logo-pass-culture.svg";

import styles from './styles/NewsItem.module.css';

interface NewsItemProps {
  title : string;
  category: string;
  date: string;
  text: string;
  images?: string[];
};

const NewsItem = (props : NewsItemProps) => {

// Pour l'affichage des images, le dossier images a été déplacé dans le dossier public.
// On affiche une seule image par news (la première de l'array)
// Si aucune image n'est présente pour l'item, on affiche le logo pass Culture à la place

  return (
    <Card className={styles.card}>
      <li className={styles.li}>
        <h3>{props.title}</h3>
        <div className={styles.infos}>
          <p>#{props.category}</p>
          <p>{props.date}</p>
        </div>
        <p>{props.text}</p>
        {props.images !== undefined ?
          <img src={props.images[0]} alt={props.title} />
        : <img src={logo} className="App-logo" alt="logo" />
        }
      </li>
    </Card>
  );
};

export default NewsItem;
