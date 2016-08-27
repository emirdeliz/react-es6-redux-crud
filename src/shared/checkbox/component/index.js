import React, { Component } from 'react'
import classnames from 'classnames'

export default class Checkbox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="checkbox">
                <div onClick={this.props.select.bind(this)}>
                    <label className={classnames({
                        checked: this.props.isSelect,
                    })}></label>
                </div>
            </div>
        )
    }
}
