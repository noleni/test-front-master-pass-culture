import styles from './styles/Button.module.css';

const Button = (props:any) => {
  return (
    <button className={styles['btn-main']}{...props}>{props.name}</button>
  );
};

export default Button;
