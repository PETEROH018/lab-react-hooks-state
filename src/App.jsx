import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './components/ProductList'

const App = () => {
  const [isDark,setIsDark] = useState(false)

  const[cart,setCart] = useState([])

  const [category,setCategory] = useState("all")
  function handleToggle(){
    setIsDark(!isDark)
  }
  function handleAddToCart(id){
    const newCartItem = sampleProducts.filter(product => product.id === id)
    setCart(prev => [...prev,...newCartItem])
    console.log(cart)
  }


  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDark={isDark} handleToggle={handleToggle}/>

      <label>Filter by Category: </label>
      <select value={category} onChange = {(event)=> setCategory(event.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} handleAddToCart ={handleAddToCart}/>

      <Cart cart={cart}/>
    </div>
  )
}

export default App
