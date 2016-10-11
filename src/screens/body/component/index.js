import React, { Component } from 'react';
import ChartContainer from '../../chart/container';

export default class Body extends Component {
    render() {
        return (
            <section className="body">
                <div className="container">
                    <ChartContainer/>
                </div>
            </section>
        );
    }
}
