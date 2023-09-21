import React from 'react';
import { FC, useState } from 'react';
import "./form.scss"
import useStore from '../../store/store';



const Form: FC = () => {
   const { addItem } = useStore();
   const [value, setValue] = useState("")

   const getRandomInt = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newItem = {
         text: value,
         id: getRandomInt(1, 5000),
      };

      if (value.length) {
         addItem(newItem)
         setValue("")
      }
   }

   return (
      <form className='add-form'
         onSubmit={(e) => handleSubmit(e)}
      >
         <input
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            className='add-form__input'
            required
            type="text"
            placeholder='Type name here...' />
         <button
            className='add-form__button'
            type='submit'>Add New</button>
      </form>
   );
}

export default Form;
