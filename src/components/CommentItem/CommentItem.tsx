import { FC } from "react"
import "./commentItem.scss"
import { CommentItemProps } from "../../types/propsTypes/CommentItemProps";

const CommentItem: FC<CommentItemProps> = ({ color, text }) => {
   return (
      <li className="comment">
         <div
            className="comment__block"
            style={{ backgroundColor: color }}></div >
         <p className="comment__text">{text}</p>
      </li>

   );
}

export default CommentItem;
