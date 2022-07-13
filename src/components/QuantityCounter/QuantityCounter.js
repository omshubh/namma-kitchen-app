import React from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const HOC = (WrappedComponent) => {
  function NewComponent(props) {
    const { quantity, setQuantity } = props;
    return (
      <WrappedComponent count={quantity} onIncrement={() => setQuantity(quantity + 1)} onDecrement={() => setQuantity(quantity - 1)} {...props} />
    );
  }
  return NewComponent;
};

const QuantityCounter = (props) => {
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <IconButton aria-label="decrement" onClick={onDecrement} disabled={count === 1}>
          <RemoveIcon />
        </IconButton>
        {count}
        <IconButton aria-label="increment" onClick={onIncrement}>
          <AddIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default HOC(QuantityCounter);