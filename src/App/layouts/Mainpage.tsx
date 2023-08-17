import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordsList } from '../components/Recordslist';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { fetchRecords } from '../store/actions/recordActions';
import { FileInput } from '../components/FileInput/FileInput';

export function MainPage() {
    const dispatch = useAppDispatch();
    const { records, loading, error } = useAppSelector(
        (state) => state.records
    );

    useEffect(() => {
        dispatch(fetchRecords());
    }, []);

    return (
        <>
            {loading && <p className='text-center text-lg'>Loading...</p>}

            <div className='container mx-auto mt-60 '>
                <FileInput />
                {error && (
                    <div className='ml-2 text-center text-sm text-red-500 flex self-start'>
                        {error}
                    </div>
                )}
                <RecordsList recordsProps={records} />
            </div>
        </>
    );
}
