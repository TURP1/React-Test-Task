import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile_reducer';



let reducers = combineReducers({
    profilePage: profileReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

window.store = store;



