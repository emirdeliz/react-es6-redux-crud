import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import {addLocaleData} from 'react-intl';
import pt from 'react-intl/locale-data/pt'
import { FormattedNumber } from 'react-intl'
import CheckboxContainer from '../../../shared/checkbox/container';

addLocaleData([...pt]);

export default class VehicleGrid extends Component {
    constructor(props) {
        super(props)

    }

    renderThead(vehicles) {
        const selectCount = vehicles.reduce((count, vehicle) => vehicle.isSelect ? count + 1 : count, 0)
        const isSelectAll = (selectCount === this.props.vehicles.length)

        return (
            <thead>
                <tr>
                    <th>
                        <CheckboxContainer select={this.props.actions.selectAll.bind(this, !isSelectAll)} isSelect={isSelectAll}/>
                    </th>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Foto</th>
                    <th>Combustivel</th>
                    <th>Valor</th>
                </tr>
            </thead>
        )
    }

    renderTbody(vehicles) {
        let vehiclesRow = [], _self = this;

        vehicles.slice(0, 5).forEach(function (value, i) {
            vehiclesRow.push(_self.renderVehicleRow(value))
        });

        return (
            <tbody>{vehiclesRow}</tbody>
        )
    }

    renderVehicleRow(vehicle) {
        let image = !vehicle.image ?
            <span>Sem foto</span> :
            <a href={vehicle.image}>Imagem</a>

        return (
            <tr className={classnames({
                selected: vehicle.selected
            })}>
                <td>
                    <CheckboxContainer select={this.props.actions.select.bind(this, vehicle.id, !vehicle.isSelect)}
                        isSelect={vehicle.isSelect}/>
                </td>
                <td ng-click="editCar(vehicle)">{vehicle.plate}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.brand}</td>
                <td>{image}</td>
                <td>{vehicle.fuel}</td>
                <td>
                    <FormattedNumber value={vehicle.value} style="currency" currency="BRL"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table grid">
                {this.renderThead(this.props.vehicles)}
                {this.renderTbody(this.props.vehicles)}
            </table>
        )
    }
}
