import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav className="nav header">
                <div className="container">
                    <div className="nav-center">
                        <i className="fa fa-pie-chart"></i>
                        <h1 className="title is-3">Exemplo Gráfico React</h1>
                    </div>
                </div>
            </nav>
        );
    }
}
