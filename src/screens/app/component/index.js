import React, { Component } from 'react';

import HeaderContainer from '../../header/container';
import BodyContainer from '../../body/container';
import FooterContainer from '../../footer/container';

export default class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <BodyContainer />
                <FooterContainer />
            </div>
        );
    }
}
