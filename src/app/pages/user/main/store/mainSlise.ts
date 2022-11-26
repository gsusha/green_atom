import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Event } from '../../../../models';
import apiMakeRequest from '../../../../api/api';

export const getDetailEvent = createAsyncThunk<Event, string>('event/getDetail', async (id: string, { dispatch }) => {
  return await apiMakeRequest('event/list/', { id });
});

interface HotelsState {
  event: Event;
}

const initialState: HotelsState = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  event: {
    name: '',
  },
};

const mainSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailEvent.fulfilled.toString()]: (state, action) => ({ ...state, event: action.payload }),
  },
});

export default mainSlice.reducer;
