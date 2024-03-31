import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Tag {
   name: string;
   count: number;
}

interface SortTagState {
   sortedTags: Tag[];
   order: 'asc' | 'desc';
   sortBy: 'popular' | 'name';
}

const sortTagSlice = createSlice({
   name: 'sortTags',
   initialState: {order: 'desc', sortBy: 'popular'} as SortTagState,
   reducers: {
      setOrder(state, action: PayloadAction<'asc' | 'desc'>) {
         state.order = action.payload;
      },
      setSortBy(state, action: PayloadAction<'popular' | 'name'>) {
         state.sortBy = action.payload;
      },
   },
});
export const {setSortBy, setOrder} = sortTagSlice.actions;

export default sortTagSlice.reducer;
