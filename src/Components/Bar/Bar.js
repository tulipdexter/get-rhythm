import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Note from './Note';
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
        barNotes: PropTypes.arrayOf(Array
        ).isRequired
    };

    renderCell(i) {
        /**
         * What is x?
         * This is using the remainder operator to create coordinates.
         * From 0 - 7, x will be the iterator.  At 8, i becomes 0 the increments up again.  At 16 it becomes 0, then increments up again, etc.
         * It always results in a number between 0 and 7, which is the number of columns.
         * 8 doesn't go into 0, leaves 0.
         * 8 doesn't go into 1, leaves 1.
         * ...
         * 8 goes into 8, leaves 0.
         * 9 goes into 8, leaves 1.
         * 
         * What is y?
         * This is rounding down the result of the division.
         * From 0 - 7, y will round down to 0. From 8 - 15, y will round down to 1.  From 16 - 23, y will round down to 3 etc.
         */
        const x = i % 8;
        const y = Math.floor(i / 8); // Even though this is the Y axis, it needs to go up to 8, so x coord from 0 - 7 can always have a Y of 0, 8-15 can have 1. The iterator will control the point at which it stops (which is 8x5);

        function renderNote(noteConfig, index) {
            const noteType = noteConfig.type;
            const noteX = noteConfig.posX;
            const noteY = noteConfig.posY;

            return (x === noteX && y === noteY && noteType) ? <Note key={index} noteType={noteType} /> : null;
        }

        // Calls map on something that's not an array?
        return (
            <Cell key={i}>
                {this.props.barNotes.map((note, index) => (
                    renderNote(note, index)
                ))}
            </Cell>
        )
    }

    render() {
        /**
         * This loops through the number of cells in the grid
         * and calls the renderCell function for each iteration,
         * passing i into it.
         */
        const cols = 10;
        const rows = 5;
        let cells = [];

        for (let i = 0; i < (rows * cols); i++) {
            cells.push(this.renderCell(i));
        }

        return (
            <div className="bar">
                <table className="bar__grid">
                    {cells}
                </table>
            </div>
        )
    }
}


/**
 * Need to be able to have notes 'on' the lines.
 * Lines / stave could just be overlaid on top of an invisible grid.
 * Two grids that overlap each other may make more sense.
 * One for the lines and one for the spaces.  Then can have some
 * validation upon drag and drop about which stave it can go on?
 * Lines are a different note so nothing can ever be on both grids,
 * each note must belong to a single grid.  E.g. a cymbal belongs to
 * the 'lines' grid and the snare belongs to the 'spaces' grid.
 */

 /**
  * TODO list:
  * Get the audio playing again.
  * Should this be based upon an event listener or should it be calculated based on time.
  * Event listener could stutter.  Time shouldn;'t have that issue.
  * If there was a stutter with time the whole thing would break.
  * Event listener is less performant.
  * Which would work best responsively?
  *
  * Work out how to have different 'notes' depending on their type.
  * Start by passing the note name into the component.
  *
  * Throw an error when 2 notes are placed at the same coords
  */

  // as the cursor moves along and encounters notes, it plays that note.
  // or, a bar lasts x seconds.  Note x is in grid column 1, so should be played
  // after x seconds / grid numbers. This could be a function that passes in the column
  // number in order to calculate when to play.  (x seconds / grid columns) * grid number the note is in.
  // The length of a bar in seconds is determined by the 'tempo'.

  // step 1.  set a defined number of seconds, e.g. 3. (0, 1, 2, 3);
  // the number of grid columns is 10.
  // note that the notes need to start on the lines (not in the middle of the column).
  // The 'columns' can actually be vertical lines.
  // the column will be passed into the object too?? No, that's how the coords system works.
  // hmm.

  // |----|----|----|    |----|----|----|
  // n    n    n    n    n    n    n    n


// It will be 2 tables, that overlap each other
// One that is say 'lines' and one thats 'spaces'.
// The lines are things like cymbals.
// Then CSS to somehow draw the stave over the top of this double grid.
// Knowing when to play the sound will be base purely on the 'columns'.