export interface IRecord {
    id: number;
    name: string;
    executingTime: number;
    memory: number;
    link: string;
    createdAt: string;
}

export interface IRecordState {
    loading: boolean;
    error: string;
    records: IRecord[];
}

export interface IServerResponce<T> {
    config: {};
    data: T[];
    message: string;
    headers: {};
    request: {};
    status: number;
    statusText: string;
}

export type RecordsListProps = {
    user: IRecord[];
    loading: boolean;
};
