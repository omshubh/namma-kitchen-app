import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import List from '@mui/material/List'
import Box from '@mui/material/Box'

import ItemDetailsInCart from '../ItemDetailsInCart/ItemDetailsInCart'

function onRemoveFromCartClick (
  cartItems,
  item,
  updateCartItems,
  handleClose,
  showInPage
) {
  const updatedCartItems = JSON.parse(JSON.stringify(cartItems))
  delete updatedCartItems[item.id]
  if (Object.keys(updatedCartItems).length === 0 && !showInPage) {
    handleClose()
  }
  updateCartItems(updatedCartItems)
}

const updateCartItemQuantity = (
  itemId,
  quantity,
  cartItems,
  updateCartItems
) => {
  const updatedCartItems = JSON.parse(JSON.stringify(cartItems))
  updatedCartItems[itemId].quantity = quantity
  updateCartItems(updatedCartItems)
}
const CartDetails = props => {
  const {
    cartItems,
    updateCartItems,
    showInPage,
    handleClose = () => {},
    total
  } = props

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          {Object.values(cartItems).map((cartItem, index) => {
            return (
              <ItemDetailsInCart
                key={index}
                cartItem={cartItem}
                onRemoveFromCartClick={cartItem =>
                  onRemoveFromCartClick(
                    cartItems,
                    cartItem,
                    updateCartItems,
                    handleClose,
                    showInPage
                  )
                }
                updateCartItemQuantity={(itemId, quantity) =>
                  updateCartItemQuantity(
                    itemId,
                    quantity,
                    cartItems,
                    updateCartItems
                  )
                }
              />
            )
          })}

          <ListItem>
            <ListItemText primary='Total' secondary={`Rs.${total}`} sx={{}} />
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default CartDetails
