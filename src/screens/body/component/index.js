import React, { Component } from 'react'
import VehicleGridContainer from '../../vehicle-grid/container'

export default class Body extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="body">
                <VehicleGridContainer />
            </section>
        )
    }
}
