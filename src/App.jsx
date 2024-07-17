import './App.css'
import Header from './components/Header'
import Buttons from './components/Buttons'
import MainPage from './components/MainPage'
import SecondSection from './components/SecondSection'
import { useState } from 'react'
import Footer from './components/Footer'
export default function App() {
  const[choice, setChoice]=useState('main')
   function handleClick(type){
    (setChoice(type))
   }
  return (
    <>
      <Header choice={choice} handleClick={handleClick}/>
      <main>
      {choice === 'main' && <MainPage />}
      {choice === 'contacts' && <SecondSection />}
      {choice === 'products' && <MainPage />}

      </main>
      <Footer choice={choice} handleClick={handleClick}/>
    </>
  )
}

