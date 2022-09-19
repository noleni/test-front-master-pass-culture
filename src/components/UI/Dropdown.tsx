import Select from 'react-select';

const options = [
  { value: 'Évènement', label: 'Évènement' },
  { value: 'Utilisateurs', label: 'Utilisateurs' },
  { value: 'Au bureau', label: 'Au bureau' },
  { value: 'Acteurs culturels', label: 'Acteurs culturels' },
  { value: 'Ambassadeurs', label: 'Ambassadeurs' },
  { value: 'Tous', label: 'Tous' }
]

const DropDown = (props: any) => {
  return <Select options={options} {...props} />
};

export default DropDown;
