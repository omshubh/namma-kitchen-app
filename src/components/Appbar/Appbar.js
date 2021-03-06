import React, { useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

import CartPopover from '../CartPopover/CartPopover'
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const Appbar = props => {
  const {
    searchTerm,
    setSearchTerm,
    cartItems,
    updateCartItems,
    orders,
    setOrders
  } = props
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    return () => {
      setSearchTerm('')
    }
  }, [])

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: 'block', flexGrow: 1, justifyContent: 'flex-start' }}
        >
          Namma kitchen
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search???'
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Search>
        {orders.length > 0 && (
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ justifyContent: 'flex-start' }}
          >
            <Link to='/orders'>My Orders</Link>
          </Typography>
        )}
        {Object.keys(cartItems).length > 0 && (
          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
              edge='end'
            >
              <ShoppingCartCheckoutIcon />
            </IconButton>
            <CartPopover
              anchorEl={anchorEl}
              handleClose={handleClose}
              cartItems={cartItems}
              updateCartItems={updateCartItems}
              orders={orders}
              setOrders={setOrders}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
