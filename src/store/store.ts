import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ItemsT } from '../types/ItemsT';

const useStore = create<
   ItemsT,
   [
      ['zustand/persist', {}],
   ]
>(
   persist(
      (set) => ({
         items: [],
         comments: [],
         activeItemId: null,
         addItem: (item) => {
            set((state) => ({
               items: [...state.items, item],
            }));
         },
         addComment: (item) => {
            set((state) => ({
               comments: [...state.comments, item],
            }));
         },
         deleteItem: (id) => {
            set((state) => ({
               items: state.items.filter((item) => item.id !== id),
               comments: state.comments.filter((comment) => comment.itemId !== id),
               activeItemId: null,
            }));
         },
         setActiveItem: (id) => {
            set({ activeItemId: id });
         },
      }),
      {
         name: "Comments",
         getStorage: () => localStorage,
      }
   )
);

export default useStore;

