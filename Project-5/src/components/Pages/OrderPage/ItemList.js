import React from 'react';
import Item from './Item';
import styles from './ItemList.module.css';
import { v4 as uuidv4 } from 'uuid';

const ItemList = ({ items, sortBy, category, dispatchCartItems }) => {
  const filterItems = (arr, category, sortType) => {
    const arrToFilter = arr.filter((item) => item.category === category);

    if (sortType === 'all') return arrToFilter;

    if (sortType === 'favorite')
      return arrToFilter.filter((item) => item.favorite);

    if (sortType === 'popular')
      return arrToFilter.sort((a, b) => a.rating - b.rating);

    if (sortBy === 'price-ascending')
      return arrToFilter.sort((a, b) => a.price - b.price);

    if (sortBy === 'price-descending')
      return arrToFilter.sort((a, b) => b.price - a.price);

    if (sortBy === 'latest')
      return arrToFilter.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sortBy === 'oldest')
      return arrToFilter.sort((a, b) => new Date(a.date) - new Date(b.date));

    return arrToFilter;
  };

  return (
    <ul className={styles.ul}>
      {filterItems(items, category, sortBy).map((item) => (
        <Item
          key={uuidv4()}
          item={item}
          dispatchCartItems={dispatchCartItems}
        />
      ))}
    </ul>
  );
};

export default ItemList;
