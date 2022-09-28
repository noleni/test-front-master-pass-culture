import styles from './styles/Card.module.css';

interface PropsCard {
  className? : string;
  children : JSX.Element | JSX.Element[];
}

const Card = ({ className, children}: PropsCard) => {
  return (
    <div className={`${styles.cards} ${className}`}>{children}</div>
  )
};

export default Card;
