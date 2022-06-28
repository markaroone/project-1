import React, { useReducer, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Pages/HomePage/HomePage';
import OrderPage from './components/Pages/OrderPage/OrderPage';
import CheckoutPage from './components/Pages/CheckoutPage/CheckoutPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import ITEMS_JSON from './assets/json/food-items-complete.json';
import './App.css';

export const ITEMS_COMMAND = {
  ADD_ITM: 'add-itm',
  DECREASE_QTY: 'dec-qty',
  REMOVE_ITM: 'rm-itm',
};

const reducerCartItems = (cartItems, action) => {
  if (action.type === ITEMS_COMMAND.ADD_ITM) {
    const updatedTotalAmount =
      cartItems.totalAmount + action.item.price * action.qty;

    const existingCartItemIndex = cartItems.arr.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = cartItems.arr[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + action.qty,
      };

      updatedItems = [...cartItems.arr];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...cartItems.arr, { ...action.item, qty: action.qty }];
    }

    return {
      arr: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === ITEMS_COMMAND.DECREASE_QTY) {
    const existingCartItemIndex = cartItems.arr.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = cartItems.arr[existingCartItemIndex];

    const updatedTotalAmount = cartItems.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.qty === 1) {
      updatedItems = cartItems.arr.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
      updatedItems = [...cartItems.arr];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      arr: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === ITEMS_COMMAND.REMOVE_ITM) {
    const existingCartItemIndex = cartItems.arr.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = cartItems.arr[existingCartItemIndex];

    const updatedTotalAmount =
      cartItems.totalAmount - existingItem.price * existingItem.qty;

    const filteredArr = cartItems.arr.filter((item) => item.id !== action.id);

    return { arr: filteredArr, totalAmount: updatedTotalAmount };
  }

  return cartItems;
};

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    return () => {
      setItems(JSON.parse(JSON.stringify(ITEMS_JSON)));
    };
  }, []);

  const [cartItems, dispatchCartItems] = useReducer(reducerCartItems, {
    arr: [],
    totalAmount: 0,
  });

  const addNewItemHandler = (newItem) => {
    setItems(items.concat(newItem));
  };

  return (
    <div className='App'>
      <Navigation cartItems={cartItems} />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>

        <Route
          path='/order/:category'
          element={
            <OrderPage
              items={items}
              dispatchCartItems={dispatchCartItems}
              onAddNewItem={addNewItemHandler}
            />
          }
        ></Route>

        <Route
          path='/checkout'
          element={
            <CheckoutPage
              cartItems={cartItems}
              dispatchCartItems={dispatchCartItems}
            />
          }
        ></Route>

        <Route path='/about' element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
