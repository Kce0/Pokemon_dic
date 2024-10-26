import React, { useCallback, useRef, useState } from 'react'
import PokeTemplate from './components/PokeTemplate.js'
import PokeList from './components/PokeList.js'

function App() {
   const [poke, setPoke] = useState([
      {
         id: 1,
         name: '파이리',
         img: '/images/파이리.png',
         checked: false,
      },
      {
         id: 2,
         name: '리자드',
         img: '/images/리자드.png',
         checked: false,
      },
      {
         id: 3,
         name: '리자몽',
         img: '/images/리자몽.png',
         checked: false,
      },
   ])

   const nextId = useRef(4)

   const onInsert = useCallback(
      (name) => {
         const pokes = {
            id: nextId.current,
            name,
            img: 'images/' + name + '.png',
            checked: false,
         }
         setPoke(poke.concat(pokes))
         nextId.current += 1
      },
      [poke]
   )

   const onRemove = useCallback(
      (id) => {
         const removedPoke = poke.filter((poke) => poke.id !== id)
         setPoke(removedPoke)
      },
      [poke]
   )

   const onDoubleClick = useCallback(
      (id) => {
         const checkPoke = poke.map((pokes) =>
            pokes.id === id
               ? {
                    ...pokes,
                    checked: !pokes.checked,
                 }
               : pokes
         )
         setPoke(checkPoke)
      },
      [poke]
   )

   return (
      <PokeTemplate onInsert={onInsert}>
         <PokeList poke={poke} onRemove={onRemove} onDoubleClick={onDoubleClick} />
      </PokeTemplate>
   )
}

export default App
