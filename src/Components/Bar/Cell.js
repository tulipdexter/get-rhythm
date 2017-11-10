import React, { Component } from 'react';

export default class Cell extends Component {
    render() {
        return (
            <div className="cell">
                {this.props.children}
            </div>
        );
    }
}
