import { useState } from 'react';

import { number2note, name2note } from './Notes';
import HexaGrid from './HexaGrid';

function MusicPage() {

  const [ withOctave, setWithOctave ] = useState( true )
  const [ centralNote, setCentralNote ] = useState( name2note("A4", withOctave)?.note || 48 )

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
            value={number2note(centralNote, withOctave).name}
            onChange={(event) => {
              const note = name2note(
                event.target.value,
                withOctave
              )?.note || centralNote
              setCentralNote(note)
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