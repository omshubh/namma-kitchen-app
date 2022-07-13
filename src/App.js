import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import items from './mockData/items'
import ItemsMenu from './components/ItemsMenu/ItemsMenu'
import Orders from './components/Orders/Orders'
//import './App.css';

function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(items)
  const [cartItems, setCartItems] = useState({})
  const [orders, setOrders] = useState([])

  function filterItem (searchTerm1) {
    setSearchTerm(searchTerm1)
    const filterBasedOnSearchTerm = items.filter(
      item =>
        item.NAME.toLowerCase().includes(searchTerm1.toLowerCase()) ||
        item.TYPE.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    setFilteredData(filterBasedOnSearchTerm)
  }

  useEffect(() => {
    console.log(
      'executing under useEffect App.js',
      searchTerm,
      filteredData,
      cartItems
    )
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ItemsMenu
                filteredData={filteredData}
                setCartItems={setCartItems}
                cartItems={cartItems}
                searchTerm={searchTerm}
                filterItem={filterItem}
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
          <Route path='/orders' element={<Orders orders={orders} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
