import * as React from "react";
import * as ReactDOM from "react-dom";

import { connect, Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose, Middleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import ExpressionEditor from "./containers/ExpressionEditor";

import * as reducers from "./store/reducers";

const loggerMiddleware: Middleware = createLogger();
const composeEnhancers: any = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers.expressions, 
composeEnhancers(
    applyMiddleware(
        thunk,
        loggerMiddleware
    )
));

ReactDOM.render(
    <Provider store={store}>
        <ExpressionEditor />
    </Provider>,
    document.getElementById('wrapper') as HTMLElement
);
