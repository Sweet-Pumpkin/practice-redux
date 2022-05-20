import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './counter/countSlice01';

export default function Redux01() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Redux02</p>
      <button onClick={() => dispatch(minus())}>-</button>
      Value: { count } 
      <button onClick={() => dispatch(plus())}>+</button>
    </div>
  );
}
