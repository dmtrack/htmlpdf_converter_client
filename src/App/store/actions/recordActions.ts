import { recordSlice } from '../slices/record.slice';
import { AppDispatch } from '..';
import axios from '../../axios';
import {
    IServerResponce,
    IRecord,
    IRecordState,
} from '../../interfaces/IRecord';

export const fetchRecords = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(recordSlice.actions.fetching());
            const response = await axios.get<IServerResponce<IRecord>>(
                'getrecords'
            );
            dispatch(recordSlice.actions.fetchSuccess(response.data.data));
        } catch (e) {
            dispatch(recordSlice.actions.fetchError(e as string));
        }
    };
};
