import { createStore, applyMiddleware } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import reducers, { RootState } from './reducers';
import { AnyAction } from 'redux';

export const store = createStore(
    reducers, 
    {}, 
    applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AnyAction>)
);
