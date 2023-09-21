import { FC } from 'react';
import "./aside.scss"

const Aside: FC = () => {
   return (
      <aside className='aside'>
         <h2 className='aside__title'>Dayry App</h2>
         <p className='aside__text'>Comment whit no sense</p>
      </aside>
   );
}

export default Aside;
