import createSagaMiddleware from "redux-saga";
import { compose, applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
import { watcherSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composed = compose(applyMiddleware(sagaMiddleware), reduxDevTools);

export const store = createStore(reducer, composed);

sagaMiddleware.run(watcherSaga);