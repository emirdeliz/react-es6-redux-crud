import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Pagination from '../component'
import {goPage, nextPage, prevPage} from '../../../actions/pagination'

class PaginationContainer extends Component {
    render () {
        const { items, goPage, nextPage, prevPage} = this.props
        const actions = {goPage, nextPage, prevPage}
        return <Pagination items={ items } actions={ actions }/>
    }
}

PaginationContainer.propTypes = {
    items: PropTypes.array.isRequired,
    goPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {

}

export default connect(
    mapStateToProps,
    { goPage , nextPage, prevPage }
)(PaginationContainer)
