import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer';
import membershipReducer from './store/reducers/membershipReducer'

import thunk from 'redux-thunk';

// import { AdTokenActionType } from './store/adTokenActionType';
// import IInitialSate from './interfaces/IInitialState';


 const rootReducer = combineReducers({
  adr: reducer,
  msr: membershipReducer
});




const logger = (store: { getState: () => any; }) => {
  return (next: (arg0: any) => any) => {
    return (action: any) => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}><App /></Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export type RootState = ReturnType<typeof rootReducer>;
