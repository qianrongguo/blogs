import { AppContainer } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore, { history } from './configureStore'
import * as serviceWorker from './serviceWorker';
import App from "./App";

const store = configureStore();
const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history}/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render();

// serviceWorker.unregister();
