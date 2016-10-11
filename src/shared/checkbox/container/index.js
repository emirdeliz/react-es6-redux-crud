import React, { Component} from 'react'
import Checkbox from '../component'

export default class CheckboxContainer extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <Checkbox select={this.props.select} isSelect={this.props.isSelect}/>
    }
}
