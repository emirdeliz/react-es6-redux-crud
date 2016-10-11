import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import VehicleGrid from '../component'
import { select, selectAll } from '../../../actions/vehicle'

class VehicleGridContainer extends Component {
    render () {
        const { vehicles, select, selectAll } = this.props
        const actions = { select, selectAll }
        return <VehicleGrid vehicles={vehicles} actions={actions}/>
    }
}

VehicleGridContainer.propTypes = {
    vehicles: PropTypes.array.isRequired,
    select: PropTypes.func.isRequired,
    selectAll: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicle
    }
}

export default connect(
    mapStateToProps,
    { select, selectAll }
)(VehicleGridContainer)
