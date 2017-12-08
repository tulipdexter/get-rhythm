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
        notePosition: PropTypes.arrayOf(Array
        ).isRequired
    };

    test() {
        for (let j = 0; j < this.props.notePosition.length; j++) {
            console.log(j); // logs correctly (0, 1);
            console.log(this.props.notePosition[j]); // logs correctly first array, second array
        }
    }

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

        // this logs 40 times due to the for loop called above (looping through each cell);
        // The loop above (looping through the grid) has to happen, as that is what is generating
        // the grid cells.  It always returns a cell, but someimtes the cell contains a note.
        // So the for loop for the array SHOULD be in here.
        // Loop through the number cells to be made, and for each one, loop through the properties
        // in the array and pass create a cell with that note if it matches.
        // Because you need to check whether for each cell, does it match any of the coords.

        // console.log(this.props.notePosition.length);

        // console.log(this.props.notePosition.length); // 2.

        for (let j = 0; j < this.props.notePosition.length; j++) {
            console.log(`loop number is ${j}`);
            console.log(this.props.notePosition[j]);

            const [noteX, noteY] = this.props.notePosition[j]; // compiles down to two variables, noteX and noteY with the corresponding values from props.
            console.log(noteX, noteY); // logs correctly
            
            const note = (x === noteX && y === noteY) ? <Note /> : null;
            console.log(note); // logs 2 notes (react.element)

            // need some kind of a 'buildHtml' function here
            // or appendNote function
        }

        function buildHtml(note) {
            if (note) {
                <Cell>
                    {/*note*/}
                </Cell>
            }
        }

        // maybe this should build the cells, not render them
        // once completely built, then render?

        //this would end up like <div class="bla">{html}</div>
        return (
            <div key={i} className="bar__cell">
                <Cell>
                    {/*note*/}
                </Cell>
            </div>
        )
    }

    render() {

        /**
         * This loops through the number of cells in the grid
         * and calls the renderCell function for each iteration,
         * passing i into it.
         */
        const cols = 8;
        const rows = 5;
        let cells = [];

        // for (let j = 0; j < this.props.notePosition.length; j++) {
        //     console.log(j); // logs correctly (0, 1);
        //     console.log(this.props.notePosition[j]); // logs correctly first array, second array
        // }

        // this.test();

        for (let i = 0; i < (rows * cols); i++) {
            cells.push(this.renderCell(i)); // this is the function call, and where the logs are spat out many times
        }

        return (
            <div className="bar">
                {cells}
            </div>
        )
    }
}
