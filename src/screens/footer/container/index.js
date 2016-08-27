import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Footer from '../component';

export default class FooterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Footer vehicles={this.props.vehicles} />
        )
    }
}

FooterContainer.propTypes = {
    vehicles: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicle
    }
}

export default connect(
    mapStateToProps
)(FooterContainer)
