import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface Tag {
   name: string;
   count: number;
}

interface TagSliceType {
   tags: Tag[];
   error: string;
   loading: boolean;
   apiPage: number;
   apiPageSize: number;
   hasMore: boolean;
}

export const fetchTags = createAsyncThunk<{tags: Tag[]; hasMore: boolean}, {sort?: string; order?: string; page?: number; pageSize?: number}>('tags/fetchTags', async ({sort, order, page, pageSize}) => {
   try {
      const filterID = '!bMsg5CXICdlFSp';
      const key = import.meta.env.VITE_API_KEY;

      const response = await axios.get(`https://api.stackexchange.com/2.3/tags`, {
         params: {
            page,
            pagesize: pageSize,
            site: 'stackoverflow',
            key,
            filter: filterID,
            order,
            sort,
         },
      });

      const tags: Tag[] = response.data.items.map((item: any) => ({name: item.name, count: item.count}));
      const hasMore: boolean = response.data.has_more;
      return {tags, hasMore};
   } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
   }
});

const tagSlice = createSlice({
   name: 'tags',
   initialState: {tags: [] as Tag[], error: '', loading: true, apiPage: 1, apiPageSize: 30, hasMore: true} as TagSliceType,
   reducers: {
      incrementApiPage(state) {
         state.apiPage += 1;
      },
      decrementApiPage(state) {
         if (state.apiPage > 1) {
            state.apiPage -= 1;
         }
      },
      setPageSize(state, action: PayloadAction<number>) {
         state.apiPageSize = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchTags.pending, (state) => {
            state.loading = true;
            state.error = '';
         })
         .addCase(fetchTags.fulfilled, (state, action) => {
            state.loading = false;
            state.tags = action.payload.tags;
            state.hasMore = action.payload.hasMore;
            state.error = '';
         })
         .addCase(fetchTags.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to fetch data. Please try again later.';
         });
   },
});

export const {incrementApiPage, setPageSize, decrementApiPage} = tagSlice.actions;

export default tagSlice.reducer;
