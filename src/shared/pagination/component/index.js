import React, { Component, PropTypes } from 'react'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
    }

    buildNumPages() {
        let numPages = this.props.items.length / 5
        return Math.floor((numPages % 1 !== 0 ? numPages + 1: numPages))
    }

    buildPagination() {
        let pages = []
        let numPages = this.buildNumPages()

        for(var i=0; i< numPages; i++)
            pages.push(<PaginationItem index={(i + 1)} key={i} goPage={this.props.actions.goPage}/>)

        return pages
    }

    render() {
        return (
            <div className="container-pagination">
                <div className="pagination">
                    <div onClick={this.props.actions.prevPage.bind(this)}></div>
                    {this.buildPagination()}
                    <div onClick={this.props.actions.nextPage.bind(this)}></div>
                </div>
            </div>
        )
    }
}

class PaginationItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick={this.props.goPage.bind(this, this.props.index)}>{this.props.index}</div>
        )
    }
}
