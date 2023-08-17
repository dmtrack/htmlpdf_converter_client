import { FC } from 'react';
import { useInputHook } from './inputHook';
import Button from '../button';
import axios from '../../axios';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { AxiosError } from 'axios';
import { recordSlice } from '../../store/slices/record.slice';
import { fetchRecords } from '../../store/actions/recordActions';

const baseURL = process.env.REACT_APP_BASE_URL;

export const FileInput: FC = () => {
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((state) => state.records);
    const { resetSelection, handleFileDialog, inputFileRef, file, setFile } =
        useInputHook();

    async function uploadFile() {
        try {
            let formData = new FormData();
            if (file) {
                formData.append('file', file);
                await axios.post(`${baseURL}/upload`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setFile(null);
                if (inputFileRef.current?.value)
                    inputFileRef.current.value = '';

                dispatch(fetchRecords());
            }
        } catch (e: any) {
            dispatch(recordSlice.actions.fetchError(e.response?.data.message));
        }
    }

    return (
        <div>
            <input
                className='btn sm'
                type='file'
                accept='*'
                onChange={handleFileDialog}
                ref={inputFileRef}
            />

            <Button
                variant='info'
                size='md'
                onClick={uploadFile}
                disabled={!!error}>
                upload
            </Button>
            <Button variant='danger' size='md' onClick={resetSelection}>
                reset
            </Button>
        </div>
    );
};
