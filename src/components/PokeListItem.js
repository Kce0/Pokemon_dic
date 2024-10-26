import './css/PokeListItem.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import classnames from 'classnames'

function PokeListItem({ poke, onRemove, onDoubleClick }) {
   const { id, name, img, checked } = poke

   return (
      <div className="PokeListItem">
         <div className="Poke-image">
            <img
               src={img}
               alt={name}
               className={classnames('Poke-img', { checked })}
               onDoubleClick={() => {
                  onDoubleClick(id)
               }}
            />
         </div>
         <div className="Poke-id">No.{id}</div>
         <div className="Poke-flex">
            <div
               className={classnames('Poke-name', { checked })}
               onDoubleClick={() => {
                  onDoubleClick(id)
               }}
            >
               {name}
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
               <RiDeleteBin6Line />
            </div>
         </div>
      </div>
   )
}

export default PokeListItem
