import React from 'react';


import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import Brightness1Icon from '@mui/icons-material/Brightness1';

function checkIsVeg(itemType) {
  return itemType === 'Veg';
}

function onRemoveFromCartClick(cartItems, item, updateCartItems,handleClose) {
  const updatedCartItems = JSON.parse(JSON.stringify(cartItems));
  delete updatedCartItems[item.id];
	if(Object.keys(updatedCartItems).length===0){
		handleClose();
	}
  updateCartItems(updatedCartItems);
  
}

const CartPopover = (props) => {
  const { anchorEl, handleClose, cartItems,updateCartItems } = props;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography sx={{ p: 2 }}>The content of your Cart</Typography>
      <List>
        {
          Object.values(cartItems).map(cartItem => {
            const { NAME, PRICE, TYPE, quantity } = cartItem;
            const isVeg = checkIsVeg(TYPE);
            return <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={()=>onRemoveFromCartClick(cartItems,cartItem,updateCartItems,handleClose)}/>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Brightness1Icon sx={{ color: isVeg ? 'green' : 'red' }} />
              </ListItemAvatar>
              <ListItemText
                primary={NAME}
                secondary={PRICE}
              />
            </ListItem>
          })
        }

      </List>
	  <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
		<Button variant="outlined">Checkout</Button>
	  </div>
    </Popover>
  );
};

export default CartPopover;