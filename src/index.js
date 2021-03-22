import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const composeEnhancers = composeWithDevTools({

});
const store = createStore(appReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk),
));
// const store = createStore(
//     appReducers,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

