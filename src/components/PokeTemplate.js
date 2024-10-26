import React, { useCallback, useState } from 'react'
import './css/PokeTemplate.css'
import { FaRegSquarePlus } from 'react-icons/fa6'

function PokeTemplate({ onInsert, children }) {
   const [inputName, setInputName] = useState('')

   const onChangeName = useCallback((e) => {
      setInputName(e.target.value)
   }, [])

   const onSubmit = useCallback(
      (e) => {
         onInsert(inputName)
         setInputName('')
         e.preventDefault()
      },
      [inputName, onInsert]
   )

   return (
      <div className="PokeTemplate">
         <div className="main-logo">
            <img src="/images/로고.png" />
         </div>
         <div className="Poke-title">
            <div className="Poke-logo">
               <img src="/images/포켓볼.png" className="ball-logo" />
               포켓몬 도감
            </div>
            {/* insert */}
            <form className="PokeInsert" onSubmit={onSubmit}>
               <input placeholder="추가할 포켓몬 이름을 입력하세요." value={inputName} onChange={onChangeName} />
               <button className="submit">
                  <FaRegSquarePlus />
               </button>
            </form>
         </div>

         <div className="content">{children}</div>
      </div>
   )
}

export default PokeTemplate
