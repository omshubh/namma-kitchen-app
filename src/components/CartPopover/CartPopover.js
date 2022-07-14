import React, { useState } from 'react'

import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import CartDetails from './CartDetails'
import { Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'

function formatAMPM(date) {
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  var strTime = hours + ':' + minutes + ' ' + ampm
  const currentDate = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return { time: strTime, date: `${currentDate}-${month}-${year}` }
}

const CartPopover = props => {
  const {
    anchorEl,
    handleClose,
    cartItems,
    updateCartItems,
    orders,
    setOrders
  } = props
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const open = Boolean(anchorEl)
  const total = Object.values(cartItems).reduce((acc, value) => {
    acc += Number(value.PRICE) * value.quantity
    return acc
  }, 0)

  const createOrder = () => {
    const curentDate = new Date()
    const { time: ORDER_TIME, date: ORDER_DATE } = formatAMPM(curentDate)
    const orderObject = {
      id: orders.length + 1,
      orderId: orders.length + 1,
      totalAmount: total,
      items: Object.values(cartItems),
      ORDER_TIME,
      ORDER_DATE
    }

    setOpenSnackbar(true)
    const updatedOrders = [...orders, orderObject]
    setOrders(updatedOrders)
    setTimeout(() => updateCartItems({}), 3000)
    console.log(updatedOrders)
    handleClose()
  }

  return (
    <>
      <Drawer anchor={'right'} open={open} onClose={handleClose}>
        <Typography variant='h6' component='div' sx={{ p: 2 }}>
          My Cart
        </Typography>
        <CartDetails
          cartItems={cartItems}
          updateCartItems={updateCartItems}
          handleClose={handleClose}
          total={`Rs.${total}`}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
          }}
        >
          <Button onClick={createOrder}>Place Order</Button>
        </div>
      </Drawer>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message='Your order is placed'
        autoHideDuration={6000}
      />
    </>
  )
}

export default CartPopover
