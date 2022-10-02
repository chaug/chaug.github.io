import React from 'react';

import { note2string } from './Notes';
import './HexaGrid.scss';

const range = (start:number, end:number) => Array.from({length: (1+end-start)}, (value, key) => start+key)

interface HexaGridProps {
    centralNote: number;
    withOctave: boolean;
    width: number;
    height: number;
    ur_step?: number;
    dr_step?: number;
}

function HexaGrid({
    centralNote = 48,
    withOctave = false,
    height = 2,
    width = 3,
    ur_step = 5,
    dr_step = 4
} : HexaGridProps) {

    const r_step = ur_step + dr_step;

    return <div className="hexa-grid">
    { range( -height, height ).map( i => {
            const parity = (i % 2) ? 'odd' : 'even';
            const offset = Math.floor(i / 2);
            return <div key={`hexa-line-${i}`} className={`hexa-line hexa-line-${parity}`}>
            { range( -width, width ).map( j => {
                const note = centralNote + i*dr_step + (j-offset)*r_step;
                return <div key={`hexa-cell-${i}-${j}`} className="hexa-cell">
                        { note2string(note, withOctave) }
                    </div>;
                }
            )}
            </div>;
        }
    )}
    </div>;
}

export default HexaGrid;