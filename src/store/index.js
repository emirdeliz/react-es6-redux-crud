import { createStore } from 'redux'
import rootReducer from '../reducers'

const storeConfig = (preloadedState) => {
    const store = createStore(rootReducer, preloadedState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            console.log(nextReducer)
            store.replaceReducer(nextReducer)
        })
    }
    return store
}

export default storeConfig
