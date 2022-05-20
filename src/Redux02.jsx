import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './counter/countSlice02';

export default function Redux02() {
  const count = useSelector(state => state.newCounter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Redux03</p>
      <button onClick={() => dispatch(minus())}>-</button>
      Value: { count } 
      <button onClick={() => dispatch(plus())}>+</button>
    </div>
  );
}
