import React, { useState } from 'react';

import DropDown from "./UI/Dropdown";
import Card from "./UI/Card";
import Input from "./UI/Input";
import Button from "./UI/Button";

import styles from './styles/AddNews.module.css';

const initialValues = {
  title: "",
  text: "",
};

interface PropsAddNews {
  onAddNews: (title: string, category: any, date: string, text: string) => void;
};

const AddNews = (props: PropsAddNews) => {

  const [category, setCategory] = useState<any>("");
  const [values, setValues] = useState(initialValues);

  // La validité du formulaire est initialisée à true afin de ne pas afficher le message d'erreur au chargement de la page
  const [formValidity, setFormValidity] = useState(true);


  // On regroupe les changements d'inputs en une seule fonction (nb : les catégories sont traitées à part)
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const addNewsHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Gestion des erreurs à la validation => affichage du message d'erreur si condition non remplie
    if (values.title.trim() === '' || category.value === 'Tous' || values.text.trim() === '') {
      setFormValidity(false);
    } else {
      setFormValidity(true);

      // La date du jour de publication est créée et ajoutée automatiquement (on ne la demande pas au user)
      const date = new Date().toISOString().substring(0, 10);
      props.onAddNews(values.title, category.value, date, values.text);
    };
  };

  return (
    <Card className={styles['add-news-card']}>
      <form className={styles.input} onSubmit={addNewsHandler}>
        <Input
          label="Titre"
          input={{
            type: "text",
            value: values.title,
            onChange: inputChangeHandler,
            name: "title",
          }}
        />
        <DropDown
          defaultValue={category}
          onChange={setCategory}
        />
        <Input
          label="Texte"
          input={{
            type: "text",
            value: values.text,
            onChange: inputChangeHandler,
            name: "text",
          }}
        />
        <Button
          type="submit"
          name="Envoyer !"
        />
        {!formValidity && <p>Tous les champs doivent être remplis</p>}
      </form>
    </Card>
  );
};

export default AddNews;
