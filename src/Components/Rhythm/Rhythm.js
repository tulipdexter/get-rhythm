import React, { Component } from 'react';
import Bar from "../Bar/Bar";

/**
 * If it turns out that this doesn't render to the DOM,
 * then make it another container (or hoist data shit up 
 * into RhythmContainer (where most data comes from anyway))
 * 
 * Currently this is generating a single bar.  I could pass a config through from RhythmContainer and loop through that number?
 * That will ultimately allow the state to change based on an 'addition' of a bar which will cause a re-render.
 *
 */

export default class Rhythm extends Component {
    render () {
        if (this.props.sounds.length) {
            return (
                // TODO: make this outer grid
                <div>
                    <div>
                        <button>Play</button>
                    </div>
                    <Bar barNotes={[
                        {
                            type: 'snare',
                            posX: 0,
                            posY: 1
                        },
                        {
                            type: 'hi-hat',
                            posX: 1,
                            posY: 2
                        },
                        {
                            type: 'bass',
                            posX: 2,
                            posY: 3
                        }
                    ]}/>
                </div>
            );
        } else {
            return null;
        }
    }
}

// export default class Rhythm extends React.Component {
//     // https://stackoverflow.com/questions/38357234/is-it-possible-to-use-async-await-in-react-js
//     // May need to do some constructor stuff up here?

//     // Trying to get the component to only return the HTML IF the await returns with sounds.
//     // If it doesn't, it can return with a message in the UI saying couldn't retrieve sounds.
//     // But the site furniture (which isn't yet built), will be there and built.
//     // So this particular component can return and error or something.
//     async getAllSounds() {
//         const sounds = await getSounds();
//         // console.log(sounds);
//         // this needs a try catch to set the message to something else?
//     }

//     render() {
//         // Want to get the functions from playRhythm into here.

//         return (
//             <div className="p-rhythm" data-rhythm>
//                 <button type="button" 
//                         className="p-rhythm__play-button" 
//                         data-play>Play</button>
//                 <div className="p-rhythm__sheet">
//                     <div className="p-rhythm__bar" 
//                          data-bar>
//                         <span className="p-rhythm__cursor" 
//                               data-cursor></span>
//                     </div>
//                     <div className="p-rhythm__bar" 
//                          data-bar>
//                         <span className="p-rhythm__cursor" 
//                               data-cursor></span>
//                     </div>
//                     <div className="p-rhythm__bar" 
//                          data-bar>
//                         <span className="p-rhythm__cursor" 
//                               data-cursor></span>
//                     </div>
//                     <div className="p-rhythm__bar" 
//                          data-bar>
//                         <span className="p-rhythm__cursor" 
//                               data-cursor></span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// };
