import React from "react";

import styles from './styles/Input.module.css';

const Input = (props:any) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.name}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
};

export default Input;
