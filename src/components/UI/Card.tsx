import styles from './Card.module.css'

interface PropsCard {
  className? : string;
  children : JSX.Element | JSX.Element[];
}

const Card = (props:PropsCard) => {
  return (
    <div className={styles.card}>{props.children}</div>
  )
};

export default Card;
