import React, { Component } from 'react';
import Pagination from '../../../shared/pagination/container';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <Pagination items={this.props.vehicles}/>
            </footer>
        )
    }
}
