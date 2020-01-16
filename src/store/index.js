import {createStore, applyMiddleware} from 'redux';
import reducers from './../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    city: 'Bogota,col',
};
export const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));