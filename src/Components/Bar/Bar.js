import React from 'react';
import Cell from './Cell';
import Cymbal from './Cymbal';
// import randomInteger from '../../Services/randomInteger';
import './Bar.css';

export default class Bar extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         cells: []
    //     };
    // }

    render() {
        return (
            <div className="Bar">
                <Cell>
                    <Cymbal />
                </Cell>
            </div>
        )
    }
}


// componentWillMount() {
    //     const rows = 5;
    //     const columns = 8;
    //     let cellGrid = [];

    //     // Ignore the grid lines for now as you can drop onto a line in a stave.
    //     // Generate multiple rows each consisting of columns
    //     for (let i = 0; i < rows; i++) {
    //         let cellRow = [];

    //         for (let i = 0; i < columns; i++) {
    //             cellRow.push(
    //                 (<div key={i} className="c-bar__cell"></div>)
    //             )
    //         }

    //         cellGrid.push(
    //             (<div key={i} className="c-bar__row">{cellRow}</div>)
    //         )
    //     }

    //     this.setState({
    //         cells: cellGrid
    //     });
    // }

    // componentDidMount() {
    //     let updatedCells = this.state.cells.slice() //copy the array
    //     // updatedCells[0] = (<span key='1' className="c-bar__cell"></span>); //execute the manipulations

    //     const noteAttributeValues = ['hi-hat', 'kick', 'snare'];

    //     // Loop through the number of notes set
    //     // get a random index between 0 and 2 (noteAttributeValues.length) to be use to select the note to play
    //     // get a random cell from the 100 cells available (set earlier as 5 rows, 20 columns) and set it's data-note attribute to the value from random note attribute
    //     for (let i = 0; i < numberOfNotes; i++) {
    //         const randomNote = noteAttributeValues[randomInteger(0, noteAttributeValues.length)];
    //         const randomCell = updatedCells[randomInteger(0, updatedCells.length)];

    //         console.log(randomCell);
    //         this.refs.cell.getDOMNode().setAttribute('data-note', 'some value');
    //         randomCell.setAttribute('data-note', randomNote);
    //     }

    //     this.setState({
    //         cells: updatedCells
    //     });
    // }

    // render() {
    //     return (
    //         <div className="c-bar">
    //             {this.state.cells}
    //         </div>
    //     )
    // }
