import React from 'react';
import randomInteger from '../../Services/randomInteger';
import './Bar.css';

export default class Bar extends React.Component {
    constructor() {
        super();
        this.state = {
            cells: []
        };
    }

    componentWillMount() {
        let rows = 5;
        let columns = 20;
        let generatedCells = [];
        
        // Create 100 divs to represent the areas for notes within a bar
        for (let i = 0; i < (rows * columns); i++) {
            generatedCells.push(
                (<div key={i} className="c-bar__cell"></div>)
            )
        }

        this.setState({
            cells: generatedCells
        });
    }

    componentDidMount() {
        let updatedCells = this.state.cells.slice() //copy the array
        updatedCells[1] = (<span key='1' className="c-bar__cell"></span>); //execute the manipulations
        this.setState({
            cells: updatedCells
        });
    }

    render() {
        return (
            <div className="c-bar">
                {this.state.cells}
            </div>
        )
    }
}

// componentDidMount() {
    //     this.refs.cell.getDOMNode().setAttribute('data-note', 'some value');
    // }
    // componentDidMount() {
    //     const notes = 30;
    //     const noteAttributeValues = ['hi-hat', 'kick', 'snare'];
    //     // Math random between 0 and 2 to get the data-attribute value

    //     // need a for loop to go through the existing array 30 times
    //     // inside each loop, randomise 1 - 100 and for those things, add the data-attribute

    //     for (let i = 0; i < notes; i++) {
    //         const randomNote = noteAttributeValues[getRandomInt(0, noteAttributeValues.length)];
    //         const randomCell = barGrid[getRandomInt(0, barGrid.length)];

    //         console.log(randomCell);
    //         randomCell.setAttribute('data-note', randomNote);
    //     }
    // }
