import { FC } from 'react';
import "./itemsList.scss"
import Form from '../Form/Form';
import Item from '../Item/Item';
import useStore from '../../store/store';


const ItemsList: FC = () => {
   const { items } = useStore()

   return (
      <div className='items'>
         <h3 className='items__title'>Items</h3>
         <Form />
         <ul className='items__list'>
            {
               items?.map((item) => {
                  return (
                     <Item key={item.id} {...item} />
                  )
               })
            }
         </ul>
      </div>
   );
}

export default ItemsList;
