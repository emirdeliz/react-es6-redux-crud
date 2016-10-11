import React, { Component } from 'react'
import VehicleGridContainer from '../../vehicle-grid/container'

export default class Body extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="body">
                <a className="button button-new-car is-success">Novo Carro</a>
                <p className="control has-addons search-box">
                    <input className="input" type="text" placeholder="Pesquisar" ng-model="query" />
                    <a className="button button-zoom"><i className="zoom"></i></a>
                </p>
                <VehicleGridContainer />
            </section>
        )
    }
}
