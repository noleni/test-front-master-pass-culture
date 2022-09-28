import DropDown from "./UI/Dropdown";
import Input from "./UI/Input";
import Button from "./UI/Button";

import styles from './styles/Navbar.module.css';

const Navbar = (props:any) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['dropdown-fields']}>
        <DropDown onChange={props.onSelect} />
          <Input
            label="Filtre par date"
            input={{
              type: "date",
              value: props.value,
              onChange: props.onChange,
              name: "date"
            }}
          />
        </div>
      <Button
        type="button"
        onClick={props.onClick}
        name="Ajoute une news"
      />
    </nav>
  )
};

export default Navbar;
