import { createStore } from 'redux';
import rootReducer from '../reducers';

const storeConfig = (preloadedState) => {
    const store = createStore(rootReducer, preloadedState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
};

export default storeConfig;
