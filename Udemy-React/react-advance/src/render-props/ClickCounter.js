import React, { Component } from 'react'

export default class ClickCounter extends Component {
    render() {
        return (
            <button onClick={this.props.incrementCount}>{this.props.count}(ClickCounter)</button>
        );
    }
}
