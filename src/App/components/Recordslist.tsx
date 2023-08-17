import axios from 'axios';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { IRecord } from '../interfaces/IRecord';
import { recordSlice } from '../store/slices/record.slice';
import Button from './button';
import { Record } from './Record';

interface IRecordsListProps {
    recordsProps: IRecord[];
}

const RecordsList = ({ recordsProps }: IRecordsListProps) => {
    const { records } = useAppSelector((state) => state.records);

    return (
        <>
            {records.length > 0 ? (
                <div>
                    <div className='flex justify-end'></div>
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>
                                        id
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        name
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        executingTime
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        memory
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        link
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        createdAt
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {records &&
                                    records.map((record) => (
                                        <Record
                                            key={record.id}
                                            record={record}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export { RecordsList };
