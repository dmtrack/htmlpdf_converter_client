import {
    ChangeEventHandler,
    DragEventHandler,
    MouseEventHandler,
    useRef,
    useState,
} from 'react';
import { recordSlice } from '../../store/slices/record.slice';
import { useAppDispatch } from '../../hook/redux';

export const useInputHook = () => {
    const dispatch = useAppDispatch();
    let inputFileRef = useRef<HTMLInputElement>(null);
    const [objectURL, setObjectURL] = useState('');
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const resetSelection = () => {
        dispatch(recordSlice.actions.fetchError(''));
        if (inputFileRef.current?.value) inputFileRef.current.value = '';
        setSelectedFile(null);
        setFile(null);
    };
    const handleFiles = (files: FileList | null) => {
        dispatch(recordSlice.actions.fetchError(''));
        if (!files || files?.length === 0) return;
        const file = files[0];

        if (file.size > 2048000) {
            setSelectedFile(null);
            setFile(null);
            if (inputFileRef.current?.value) inputFileRef.current.value = '';
            dispatch(recordSlice.actions.fetchError('Max file size is 2gb'));
        }
        setSelectedFile(file.name);
        setObjectURL(objectURL);
        setFile(file);
    };
    const openDialog: MouseEventHandler<HTMLButtonElement> = () => {
        const inputFile = inputFileRef.current;
        if (!inputFile) return;
        inputFile.click();
    };

    const handleFileDialog: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget.files;
        handleFiles(files);
    };

    return {
        handleFileDialog,
        inputFileRef,
        resetSelection,
        openDialog,
        selectedFile,
        file,
        setFile,
        setSelectedFile,
    };
};
