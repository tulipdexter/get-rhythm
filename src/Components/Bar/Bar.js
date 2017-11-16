import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Note from './Note';
// import randomInteger from '../../Services/randomInteger';
import './Bar.css';

export default class Bar extends React.Component {
    static propTypes = {
        /* 
         *https://reactjs.org/docs/typechecking-with-proptypes.html
         * array of a certain type (number)
         * You can chain any of the above with `isRequired` 
         * to make sure a warning is shown if the prop isn't provided.
         * PropTypes.number.isRequired
         */
        notePosition: PropTypes.arrayOf(
        ).isRequired
    };

    renderCell(i) {
        /**
         * What is x?
         * This is using the remainder operator to create coordinates.
         * From 0 - 7, x will be the iterator.  At 8, i becomes 0 the increments up again.  At 16 it becomes 0, then increments up again, etc.
         * It always results in a number between 0 and 7, which is the number of columns.
         * 
         * What is y?
         * This is rounding down the result of the division.
         * From 0 - 4, y will round down to 0. From 5 - 9, y will round down to 1.  From 10 to 14, y will round down to 3 etc.
         */
        const x = i % 8;
        const y = Math.floor(i / 5);

        const [noteX, noteY] = this.props.notePosition; // compiles down to two variables, noteX and noteY with the corresponding values from props.
        const note = (x === noteX && y === noteY) ? <Note /> : null;

        return (
            <div key={i} className="bar__cell">
                <Cell>
                    {note}
                </Cell>
            </div>
        )
    }

    render() {
        const cols = 8;
        const rows = 5;
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
