import {applyMiddleware, compose, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, logger());

const enhancers = [];
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
}
const composeEnhancers = compose(
    middleware,
    ...enhancers
);
const store = createStore(reducer, composeEnhancers);

export default store;
