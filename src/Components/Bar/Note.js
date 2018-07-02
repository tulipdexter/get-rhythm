import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Note.css';

export default class Note extends Component {
    static propTypes = {
        noteType: PropTypes.string.isRequired
    };

    /**
     * This is going to be the value of the static prop.
     */
    render() {
        console.log(this.props.noteType);
        return <span className={`note note--${this.props.noteType}`} data-type={this.props.noteType}></span>;
    }
}
