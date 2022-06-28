import React, { useState, useEffect } from 'react';
import styles from './OrderPage.module.css';
import useWidth from '../../../hooks/useWidth';
import SidebarOrderPage from './SidebarOrderPage';
import HeaderOrderPage from './HeaderOrderPage';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import AddNewItemForm from './AddNewItemForm';

const OrderPage = ({ items, dispatchCartItems, onAddNewItem }) => {
  const { category } = useParams();

  const screenWidth = useWidth();
  const isMobileView = screenWidth <= 768;
  const addNewItem = category === 'add';

  const [sortType, setSortType] = useState('all');

  const changeSortTypeHandler = (type) => {
    setSortType(type);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        {!isMobileView && <SidebarOrderPage />}

        {!addNewItem && (
          <div className={styles.items}>
            <HeaderOrderPage
              onChangeSortType={changeSortTypeHandler}
              category={category}
            />
            
            <ItemList
              items={items}
              sortBy={sortType}
              category={category}
              dispatchCartItems={dispatchCartItems}
            />
          </div>
        )}

        {addNewItem && (
          <AddNewItemForm items={items} onAddNewItem={onAddNewItem} />
        )}
      </div>
    </section>
  );
};

export default OrderPage;
