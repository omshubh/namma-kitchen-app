import React from 'react'

import Item from '../Item/Item'

import Appbar from '../Appbar/Appbar'

const ItemsMenu = props => {
  const {
    filteredData,
    setCartItems,
    cartItems,
    searchTerm,
    filterItem,
    orders,
    setOrders
  } = props
  return (
    <>
      <Appbar
        searchTerm={searchTerm}
        setSearchTerm={filterItem}
        cartItems={cartItems}
        updateCartItems={setCartItems}
        orders={orders}
        setOrders={setOrders}
      />
      <div className='menu-items'>
        {filteredData.map((item, index) => (
          <Item
            item={item}
            key={index}
            updateCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </div>
    </>
  )
}

export default ItemsMenu
