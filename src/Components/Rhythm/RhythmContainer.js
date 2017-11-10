import React, { Component } from 'react';
import Rhythm from './Rhythm';
import audioContext from '../../Services/audioContext';

export default class RhythmContainer extends Component {
    constructor() {
        super();
        this.state = {
            sounds: []
        };
    }

    // https://reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount() {
        const fileNames = ['hi-hat', 'kick', 'snare'];
        
        const promises = fileNames.map(file => {
            return fetch(`./dist/audio/${file}.wav`)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.arrayBuffer();
                })
                .then(buffer => {
                    // I don't know why this needs to be a new promise
                    // (thought decodeAudioData returns a promise)
                    return new Promise(resolve => {
                        audioContext.decodeAudioData(buffer, decodedData => {
                            resolve(decodedData);
                        });
                    });
                })
                .catch(err => console.log(err));
        });

        Promise.all(promises).then(decodedBuffers => {
            this.setState({
                sounds: decodedBuffers
            });
        });
    }

    render() {
        if (this.state.sounds) {
            return (
                <Rhythm sounds={this.state.sounds} />
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}
