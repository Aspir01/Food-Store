import './App.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import Cart from "./components/Cart/Cart"
const { getData } = require("./db/db")
const foods = getData()

function App() {

  const [cartItems, setCartItems] = useState([])

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, score: exist.score + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...food, score: 1 }])
    }
  }

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id)
    if (exist.score === 1) {
      setCartItems(cartItems.filter((x) =>
        x.id !== food.id
      ))
    } else {
      setCartItems(cartItems.map((x) =>
        x.id === food.id ? { ...exist, score: exist.score - 1 } : x
      ))
    }
  }

  return (
    <div>
      <h1 className='text1'>Список еды</h1>
      <div className="card_container">{foods.map(food => {
        return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
      })} </div>

      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
