import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recordReducer from './slices/record.slice';

const rootReducer = combineReducers({
    records: recordReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
