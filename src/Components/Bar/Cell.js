import React, { Component } from 'react';

export default class Cell extends Component {
    render() {
        return (
            <td className="bar__cell">
                {this.props.children}
            </td>
        );
    }
}
