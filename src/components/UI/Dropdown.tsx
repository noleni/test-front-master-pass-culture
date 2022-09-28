import React from 'react';
import Select from 'react-select';

import styles from './styles/Dropdown.module.css';

const DropDown = (props: any) => {

  const options = [
    { value: 'Évènement', label: 'Évènement' },
    { value: 'Utilisateurs', label: 'Utilisateurs' },
    { value: 'Au bureau', label: 'Au bureau' },
    { value: 'Acteurs culturels', label: 'Acteurs culturels' },
    { value: 'Ambassadeurs', label: 'Ambassadeurs' },
    { value: 'Tous', label: 'Tous' }
  ]
  return (
    <>
      <label className={styles.label}>Filtre par catégorie</label>
      <Select
        options={options}
        {...props}
        placeholder={<div>Sélectionne une catégorie</div>}
        className={styles['dropdown-input']}
      />
    </>
  )
};

export default DropDown;
