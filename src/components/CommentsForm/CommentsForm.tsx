import { FC, useState } from 'react';
import useStore from '../../store/store';
import { CommentItemT } from '../../types/CommentItemT';
import "./commentsForm.scss"

const CommentsForm: FC = () => {
   const { addComment, activeItemId } = useStore()

   const [value, setValue] = useState("#000000")
   const [textAreaValue, setTextAreaValue] = useState("")

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const comment: CommentItemT = {
         id: Date.now(),
         color: value,
         itemId: activeItemId,
         text: textAreaValue
      }
      addComment(comment)
      setTextAreaValue("")
   }

   return (
      <form
         onSubmit={(e) => handleSubmit(e)}
         className='comments-form' >
         <input
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            className='comments-form__input-color'
            type="color" />
         <textarea
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.currentTarget.value)}
            className='comments-form__textarea'
            name="comment"
            required
            placeholder='Type comment here...'
         ></textarea>
         <button
            className='comments-form__button'
            type='submit'>Add New</button>
      </form >
   );
}

export default CommentsForm;