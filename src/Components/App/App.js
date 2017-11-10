import React, { Component } from 'react';
import RhythmContainer from '../../Components/Rhythm/RhythmContainer';
import './App.css';

export default class App extends Component {
    // TODO: Should u-container be here?  Or should there be a component called 'container'
    // that can have HMTL added into it.
    render() {
        return (
            <div className="u-container">
                <RhythmContainer />
            </div>
        );
    }
};
