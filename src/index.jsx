// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from "react-router-dom";
// import {createBrowserHistory} from 'history';
//
// import {applyMiddleware, createStore} from "redux";
// import {Provider} from 'react-redux';
// import {thunk} from "redux-thunk";
// import reducer from "./store/reducers/reducers";
// import App from "./App";
//
// const history = createBrowserHistory();
// const store = createStore(reducer,applyMiddleware(thunk));
//
// store.subscribe(() => {
//     console.log('Изменение', store.getState());
// });
//
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <BrowserRouter history={history}>
//             <App/>
//         </BrowserRouter >
//     </Provider>
// )
import '@assets/styles/style.scss'
import ReactDOM from 'react-dom/client'

import Root from './root'

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
