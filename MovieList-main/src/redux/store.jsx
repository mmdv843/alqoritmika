// import {applyMiddleware, compose, createStore} from "redux"
// import thunk from "redux-thunk";
// import reducer from "./reducers/reducer";

// const allEnhancers =compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const  store = createStore(reducer,allEnhancers);

// export default store

import { createStore } from "redux";

import reducer from "./reducers/reducer"

const store = createStore(reducer);

export default store;