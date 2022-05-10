
import { Colors } from './colors';
import { Measures } from './measures';

const renoroc = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 0 },
             to:   {x: 0.5, y: 1 },
           },
            stops: [
             {
               color: "#00000000",
               position: 0
             },
             {
               color: "#000000",
               position: 1
             },
           ],
         };


export const Gradients = {
  /** Design system */
      renoroc,
}
