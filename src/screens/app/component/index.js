import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'

import HeaderContainer from '../../header/container';
import BodyContainer from '../../body/container';
import FooterContainer from '../../footer/container';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <IntlProvider locale={navigator.language} messages={navigator.language}>
                <div>
                    <HeaderContainer />
                    <BodyContainer />
                    <FooterContainer />
                </div>
             </IntlProvider>
        )
    }
}
