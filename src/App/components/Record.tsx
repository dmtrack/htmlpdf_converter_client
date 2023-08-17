import React from 'react';
import { IRecord } from '../interfaces/IRecord';

interface IRecordProps {
    record: IRecord;
}

function Record({ record }: IRecordProps) {
    const { id, name, executingTime, memory, link, createdAt } = record;

    return (
        <>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='px-5 py-4'>{id}</td>
                <td className='px-5 py-4'>{name}</td>
                <td className='px-5 py-4'>{executingTime}</td>
                <td className='px-5 py-4'>{memory}</td>
                <td className='px-5 py-4'>{link}</td>
                <td className='px-5 py-4'>{createdAt}</td>
            </tr>
        </>
    );
}

export { Record };
