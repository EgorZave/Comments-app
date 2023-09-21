import { FC } from 'react';
import "./item.scss"
import useStore from '../../store/store';
import { ItemT } from '../../types/ItemT';


const Item: FC<ItemT> = ({ id, text }) => {
   const { deleteItem, activeItemId, setActiveItem, comments } = useStore();

   const handleClick = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
      e.preventDefault();
      if (e.target instanceof HTMLButtonElement) {
         deleteItem(id);
      } else {
         setActiveItem(id)
      }
   }

   const isActive = activeItemId === id;
   const currentComments = comments.filter((comment) => comment.itemId === id);

   return (
      <li
         onClick={(e) => handleClick(e, id)}
         className={`list-item${isActive ? "--active" : ""}`}>
         <p className='list-item__text'>
            {text}
         </p>
         <span className='list-item__length'>
            {currentComments.length}
         </span>
         <button
            className='list-item__btn'
         >Delete</button>
      </li>
   );
}

export default Item;

