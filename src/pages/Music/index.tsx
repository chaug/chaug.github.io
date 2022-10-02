import { useState } from 'react';

import { string2note, note2string } from './Notes';
import HexaGrid from './HexaGrid';

function MusicPage() {

  const [ withOctave, setWithOctave ] = useState( true )
  const [ centralNote, setCentralNote ] = useState( string2note("A4", withOctave) )

  return <div className="music-page">
    <h2>Exploration les accords</h2>
    <div className="music-chord">
      <div className="chord-input">
        <h3>Saisir un accord</h3>
        <div>
          <label>
            With Octaves
          </label>
          <input type="checkbox" name="withOctave"
            checked={withOctave}
            onChange={(event) => {
              console.dir(event)
              setWithOctave(event.target.checked)
            }}
          />
        </div>
        <div>
          <label>
            Central Note
          </label>
          <input name="centralNote"
            value={note2string(centralNote, withOctave)}
            onChange={(event) => {
              setCentralNote(string2note(
                event.target.value,
                withOctave,
                centralNote
              ))
            }}
          />
        </div>
      </div>
      <div className="chord-displays">
        <HexaGrid
          centralNote={centralNote} withOctave={withOctave}
          width={3} height={2}
        />
      </div>
    </div>
  </div>;
}

export default MusicPage;