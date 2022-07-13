import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import MuiSelect from '../MuiSelect/MuiSelect'
import QuantityCounter from '../QuantityCounter/QuantityCounter';

function checkIsVeg(itemType) {
  return itemType === 'Veg';
}

function onAddToCartClick(cartItems, item, updateCartItems, quantity, setQuantity) {
  const updatedCartItems = JSON.parse(JSON.stringify(cartItems));
  if (updatedCartItems.hasOwnProperty(item.id)) {
    updatedCartItems[item.id] = { ...updatedCartItems[item.id], quantity: updatedCartItems[item.id].quantity + quantity }
  } else {
    updatedCartItems[item.id] = { ...item, quantity };
  }
  updateCartItems(updatedCartItems);
  setQuantity(1);
  console.log(updatedCartItems);
}

const Item = (props) => {
  const { updateCartItems, cartItems, item } = props
  const { NAME, CUISINE, AVAILABILITY, PRICE, TYPE } = item;
  const [quantity, setQuantity] = useState(1);
  const isVeg = checkIsVeg(TYPE);
  return (
    <Card sx={{ minWidth: 275 }} className={'item-details-card'}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {CUISINE}
        </Typography>
        <Typography variant="h5" component="div" className='item-name-with-icon'>
          <Brightness1Icon sx={{ color: isVeg ? 'green' : 'red' }} />
          {NAME}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {PRICE}
        </Typography>
        <Typography variant="body2" component={'div'}>
          <MuiSelect availabilityOptions={AVAILABILITY} availablityType={''} />
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        <Button size="small" onClick={() => onAddToCartClick(cartItems, item, updateCartItems, quantity, setQuantity)}>Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default Item;