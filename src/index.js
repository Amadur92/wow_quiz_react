import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/ReduxStore.js"
//import store from "./redux/state.js"
import storeContext from "./StoreContext/StoreContext.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
<storeContext.Provider value = {store}>
    <App
        //state={store.getState()} dispatch={store.dispatch.bind(store)}
    />
</storeContext.Provider>
  </React.StrictMode>
);
}
rerenderEntireTree(store.getState)
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
