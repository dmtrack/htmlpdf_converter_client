import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecord, IRecordState } from '../../interfaces/IRecord';

const initialState: IRecordState = {
    loading: false,
    error: '',
    records: [],
};

export const recordSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IRecord[]>) {
            state.loading = false;
            state.records = action.payload;
        },
        fetchError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default recordSlice.reducer;
