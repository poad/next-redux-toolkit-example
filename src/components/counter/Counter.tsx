import React from 'react';
import Box from '@mui/material/Box';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { CounterState } from '../../@types';
import { decrement, increment } from '../../reducer/counter';
import store from '../../store';

export const Counter = () => {
  // stateは、storeのstateでcounterは、storeのreducerのkeyが入って、valueは、createSliceのinitialValueが参照されます。
  useSelector((state: CounterState) => state);
  const dispatch = useDispatch();

  return (
    <Box>
      <Box>
        <IconButton color="success" onClick={() => dispatch(increment())}>
          <Add />
        </IconButton>
        {store.getState().counter.value}
        <IconButton color="error" onClick={() => dispatch(decrement())}>
          <Remove />
        </IconButton>
      </Box>
    </Box>
  );
};
