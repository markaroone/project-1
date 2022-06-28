import React, { useState, useRef } from 'react';
import styles from './AddNewItemForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const AddNewItemForm = ({ items, onAddNewItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [formError, setFormError] = useState();

  const nameInputRef = useRef();
  // const nameInputRef = useRef();

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const changeUrlHandler = (e) => {
    setUrl(e.target.value);
  };

  const changeCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const nameInputFocusHandler = (e) => {
    setFormError();
  };

  const isDuplicate = (name, category, arr) => {
    return arr.some((el) => {
      if (el.name.toLowerCase() !== name.toLowerCase()) return false;

      if (el.category !== category) return false;

      return true;
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (isDuplicate(name, category, items)) {
      setFormError('Duplicate item found.');
      return;
    }

    const newItem = {
      name: name,
      description: description,
      price: +price,
      img: url,
      category: category,
      favorite: false,
      inStock: true,
      rating: 0,
      date: new Date(),
      id: uuidv4(),
    };

    onAddNewItem(newItem);

    clearInputs();
  };

  const clearInputs = () => {
    setName('');
    setDescription('');
    setPrice(0);
    setUrl('');
    setCategory('');
  };

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitFormHandler}>
        
        <input
          placeholder='Item Name*'
          className={formError && styles.error}
          type='text'
          value={name}
          onChange={changeNameHandler}
          onFocus={nameInputFocusHandler}
          required
        />

        
        <textarea
          placeholder='Item Description*'
          name='description'
          value={description}
          onChange={changeDescriptionHandler}
          required
        ></textarea>

        <input
          placeholder='Item Price*'
          type='number'
          min='0.0'
          max='5000'
          step='0.5'
          value={price}
          onChange={changePriceHandler}
          required
        />

        <input placeholder='Item Image URL*' type='url' value={url} onChange={changeUrlHandler} required />

        <select
          name='category'
          onChange={changeCategoryHandler}
          defaultValue='promo'
          required
        >
          <option value='promo'>Promo</option>
          <option value='pizza'>Pizza</option>
          <option value='pasta'>Pasta</option>
          <option value='chicken'>Chicken</option>
          <option value='sides'>Sides</option>
          <option value='dessert'>Dessert</option>
          <option value='drinks'>Drinks</option>
        </select>

        <button>ADD ITEM</button>
      </form>

      <p>{formError}</p>
    </section>
  );
};

export default AddNewItemForm;
