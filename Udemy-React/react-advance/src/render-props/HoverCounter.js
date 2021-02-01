import React, { Component } from 'react'

export default class HoverCounter extends Component {
    render() {
        return (
            <button onMouseOver={this.props.incrementCount}>{this.props.count}(HoverCounter)</button>
        );
     }
}
