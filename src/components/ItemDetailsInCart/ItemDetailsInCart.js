import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import ListItemButton from '@mui/material/ListItemButton';

import QuantityCounter from '../QuantityCounter/QuantityCounter';


function checkIsVeg(itemType) {
  return itemType === 'Veg';
}

const ItemDetailsInCart = (props) => {
  const { onRemoveFromCartClick, cartItem, updateCartItemQuantity } = props;
  const { NAME, PRICE, TYPE, quantity, id } = cartItem;
  const isVeg = checkIsVeg(TYPE);

  return (
    <div>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => onRemoveFromCartClick(cartItem)} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Brightness1Icon sx={{ color: isVeg ? 'green' : 'red' }} />
        </ListItemAvatar>
        <ListItemText
          primary={NAME}
          secondary={`Rs.${PRICE}`}
        />
        <ListItemButton>
          <QuantityCounter quantity={quantity} setQuantity={(quantity) => { updateCartItemQuantity(id, quantity) }} />
        </ListItemButton>

      </ListItem>
    </div>
  );
};

export default ItemDetailsInCart;