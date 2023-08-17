import { FC } from 'react';
import { useInputHook } from './inputHook';
import Button from '../button';
import axios from '../../axios';
import { useAppDispatch } from '../../hook/redux';
import { AxiosError } from 'axios';
import { recordSlice } from '../../store/slices/record.slice';

const baseURL = process.env.REACT_APP_BASE_URL;

export const FileInput: FC = () => {
    const dispatch = useAppDispatch();

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
            }
            // const users = await axios
            //     .get(`${baseURL}/getusers`)
            //     .then((data) => data);
        } catch (e) {
            if (e instanceof AxiosError) {
                dispatch(recordSlice.actions.fetchError(e.response?.data.text));
            }
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
            {/* <TextField
                variant='standard'
                value={selectedFile || 'browse a file'}
                style={{ ...styles.textField }}
            /> */}
            <Button
                variant='info'
                size='md'
                onClick={uploadFile}
                disabled={!file}>
                upload
            </Button>
            <Button
                variant='danger'
                size='md'
                onClick={resetSelection}
                disabled={!file}>
                reset
            </Button>
        </div>
    );
};
