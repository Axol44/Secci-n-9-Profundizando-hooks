import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const state = useFetch('https://www.breakingbadapi.com/api/quotes/1');


  console.log(state);

  return (
    <div>
      <h1> BrekingBad Quotes</h1>
      <hr />

      <div className='alert alert-info text-center'>
        Loading....
      </div>

      <blockquote className='blockquote text-right'>
        <p className='mb-0'></p>
        <footer className='blockquote-footer'> Fernando </footer>
      </blockquote>
    </div>   
  )
}
