import { FC } from 'react';
import "./comments.scss"
import useStore from '../../store/store';
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentItem from '../CommentItem/CommentItem';


const Comments: FC = () => {
   const { activeItemId, comments } = useStore()
   const currentComments = comments.filter((comment) => comment.itemId === activeItemId)

   return (
      <>
         {activeItemId !== null && (
            <div className='items'>
               <h2 className='items__comments-title'>Comments #{activeItemId}</h2>
               <ul className='items__comments-list'>
                  {currentComments?.map((comment) => {
                     return (
                        <CommentItem key={comment.id} {...comment} />
                     )
                  })}
               </ul>
               <CommentsForm />
            </div>
         )}
      </>
   );
}

export default Comments;
