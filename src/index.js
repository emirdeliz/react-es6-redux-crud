import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import storeConfig from './store'
import App from './screens/app/container'
import './assets/scss/style.scss'

render(
    <Provider store={storeConfig()}>
        <App />
    </Provider>,
    document.querySelector('form')
)

/*

actions: actions
reducers: reducers
screens: containers (formulario, sidebar etc)
shared: utiltarios, components dummy (label, inputs, rotas etc)

*/



/*

actions: actions
reducers: reducers
screens: containers (formulario, sidebar etc)
shared: utiltarios, components dummy (label, inputs, rotas etc)

*/
