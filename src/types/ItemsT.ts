import { CommentItemT } from "../types/CommentItemT"
import { ItemT } from "./ItemT";

export type ItemsT = {
   items: ItemT[];
   comments: CommentItemT[];
   activeItemId: number | null;
   addItem: (item: { text: string; id: number }) => void;
   addComment: (item: { text: string, color: string, id: number, itemId: number | null }) => void;
   deleteItem: (id: number) => void;
   setActiveItem: (id: number | null) => void;
};