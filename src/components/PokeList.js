import PokeListItem from './PokeListItem'
import './css/PokeList.css'

function PokeList({ poke, onRemove, onDoubleClick }) {
   return (
      <div className="PokeList">
         {poke.map((poke) => (
            <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} onDoubleClick={onDoubleClick} />
         ))}
      </div>
   )
}

export default PokeList
