import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Note from './Note';
// import randomInteger from '../../Services/randomInteger';
import './Bar.css';

export default class Bar extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         cells: []
    //     };
    // }
    static propTypes = {
        notePosition: PropTypes.arrayOf(
            // https://reactjs.org/docs/typechecking-with-proptypes.html
            // array of a certain type (number)
            // You can chain any of the above with `isRequired` 
            // to make sure a warning is shown if the prop isn't provided.
            PropTypes.number.isRequired
        ).isRequired
    };

    renderCell(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);

        const [noteX, noteY] = this.props.notePosition;
        // If x and y are equal to the props passed in, render the note
        const note = (x === noteX && y === noteY) ? <Note /> : null;

        console.log(note); // first item in array is a React symbol, all others are null.

        return (
            <div key={i} className="bar__cell">
                <Cell>
                    {note}
                </Cell>
            </div>
        )
    }

    render() {
        const rows = 5;
        const cols = 8;
        let cells = [];

        for (let i = 0; i < (rows * cols); i++) {
            cells.push(this.renderCell(i))
        }

        return (
            <div className="bar">
                {cells}
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
