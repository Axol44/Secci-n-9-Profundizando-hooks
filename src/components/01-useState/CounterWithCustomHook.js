import React from 'react'
import { useCouter } from '../hooks/useCouter';

import './counter.css'

//Funcional component
export const CounterWithCustomHook = () => {
  
  const { state, increment, decrement, reset } = useCouter( 100 );

  return (
    <>
      <h1>Counter with Hook: { state }</h1>
      <hr />

      <button className='btn' onClick={ () => increment(2) }> +1 </button>
      <button className='btn' onClick={ reset }> reset </button>
      <button className='btn' onClick={ () => decrement(2) }> -1 </button>
    </>
  )
}
