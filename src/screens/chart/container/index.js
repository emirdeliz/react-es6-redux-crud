import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Chart from '../component';

class ChartContainer extends Component {
    render() {
        return <Chart data={this.props.data} />;
    }
}

ChartContainer.propTypes = {
    list: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        data: state.chart,
    };
};

export default connect(
    mapStateToProps
)(ChartContainer);
