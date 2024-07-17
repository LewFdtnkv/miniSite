import React from 'react'
import HeaderButtons from './HeaderButtons'
import {useState, useEffect} from 'react'
export default function Header({choice, handleClick}) {
  
  return (
    <>
      <header>
        <h3 className='icon'>
            <img className='eyeIcon'src="/icons8-маленькие-кошмары-50.png" alt="Title Text" />Title Text</h3>
        <ul>
            <HeaderButtons choice={choice} handleClick={handleClick}/>
        </ul>
        
      </header>
    </>
  )
}

