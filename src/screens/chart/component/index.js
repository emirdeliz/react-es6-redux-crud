import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs';
import * as chartConfig from 'chart.js';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        chartConfig.defaults.global.responsive = true;
        chartConfig.defaults.global.maintainAspectRatio = false;
    }

    render() {
        return (
            <div>
                <h1 className="title is-5 title-chart">Nr de programadores por cidade/mês</h1>
                <Line className="chart" data={this.props.data}/>
                <Bar className="chart" data={this.props.data}/>
            </div>
        );
    }
}
