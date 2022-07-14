import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const columns = [
  { field: 'orderId', headerName: 'Order Id', width: 150 },
  { field: 'noOfItems', headerName: 'No. of Items', width: 150 },
  { field: 'ORDER_DATE', headerName: 'Order date', width: 200 },
  { field: 'ORDER_TIME', headerName: 'Order time', width: 200 },
  { field: 'totalAmount', headerName: 'Total price', width: 150 }
];

const ItemsMenu = props => {
  const { orders } = props
  const navigate = useNavigate();

  const customizedOrders = orders.map(order => ({ ...order, noOfItems: order.items.length, totalAmount: `Rs.${order.totalAmount}` }));

  function navigateBack() {
    navigate('/');
  }

  const hideFooter = orders.length < 25;

  return (
    <div className='order-details' style={{ height: 550, width: '100%' }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={navigateBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: 'block', flexGrow: 1, justifyContent: 'flex-start' }}
          >
            My Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <DataGrid
        rows={customizedOrders}
        columns={columns}
        hideFooter={hideFooter}
        hideFooterSelectedRowCount={true}
        checkboxSelection />
    </div >
  )
}

export default ItemsMenu
