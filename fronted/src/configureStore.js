import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import thunk from 'redux-thunk';
import agent from './agent'
import {createLogger} from 'redux-logger'
import {ReceiveToken} from "./actions/signup";

export const history = createBrowserHistory();
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger())
}

// const localStorageMiddleware = store => next => action => {
//     if (action.type === ReceiveToken ) {
//         if (!action.error) {
//             window.localStorage.setItem('jwt', action.token);
//             agent.setToken(action.token);
//         }
//     }
//
//     next(action);
// };
export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                ...middleware
            ),
        ),
    );

    return store
}
