import Button from "./Button"
import { useState } from "react"
import { differences } from "../datasets/data"
export default function Buttons() {
    const[opt, setOpt]=useState(null)
    function handleClick(type){
    setOpt(type)
  }
  return (
    <>
        <section>
        <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, inventore.
        </h3>
        <Button isActive={opt=='way'?true:false}handleClick={()=>handleClick('way')}>Первая кнопка</Button>
        <Button isActive={opt=='easy'?true:false}handleClick={()=>handleClick('easy')}>Вторая кнопка</Button>
        <Button isActive={opt=='program'?true:false}handleClick={()=>handleClick('program')}>Третья кнопка</Button>
        {opt ? <p>{differences[opt]}</p>:<p>Ничего не выбрано</p>}
        </section>  
    </>
  )
}
