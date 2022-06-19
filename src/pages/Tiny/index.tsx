import { useState } from 'react';

import PowderPanel from './Powder';
import { powderDensity } from './Powder';

function TinyPage() {
  const [ density, setDensity ] = useState(powderDensity)

  return <div className="tiny-page">
    <h2>Petites choses</h2>
    <h3>Powder</h3>
    <div className="powder">
      <div className="common-inputs">
        <label>
          Powder density
        </label>
        <input name="density"
          type="number"
          value={density}
          onChange={(event) => {setDensity(parseFloat(event.target.value))}}
        />
      </div>
      <div className="panels">
        <PowderPanel density={density} intialGrain={20}/>
        <PowderPanel density={density} intialGrain={40}/>
        <PowderPanel density={density} intialGrain={60}/>
      </div>
    </div>
  </div>;
}

export default TinyPage;