import { useEffect, useState } from 'react';

import './Powder.scss';

export const powderDensity = 1.09      // gr/cm3
const grainInGram   = 0.0647989 // grammes

interface IMeasures {
  grain: number;
  gram: number;
  volume: number;
}
interface IState {
  field: string;
  measures: IMeasures;
}

const SPECS = Object.entries({
  grain : [ "Masse (gr, grain)", ],
  gram  : [ "Masse (g, gramme)", ],
  volume: [ "Volume (ml, cm3)" , ],
})

const computeState = (field:string, value:number, density:number) : IState => {
  let measures : IMeasures
  switch (field) {
    case "grain": {
      measures = {
        grain: value,
        gram:  value * grainInGram ,
        volume: value * grainInGram / density,
      }
      break;
    }
    case "gram": {
      measures = {
        grain: value / grainInGram,
        gram:  value,
        volume: value / density,
      }
      break;
    }
    default: {
      measures = {
        grain: value * density / grainInGram,
        gram:  value * density,
        volume: value,
      }
      break;
    }
  }
  return { field, measures }
}

const getMeasure = (state: IState, field: string|undefined = undefined) : number => {
  const f = field || state.field
  return (new Map(Object.entries(state.measures))).get(f)
}

interface PowderPanelProps {
  density: number;
  intialGrain: number;
}

function PowderPanel({ density = powderDensity, intialGrain = 20.0} : PowderPanelProps) {

  const [ state, setState  ] = useState(computeState('grain', intialGrain, density))
  const field = state.field

  const changeValue = (newValue:number) => {
    setState(computeState(field, newValue, density))
  }
  const changeField = (newField:string) => {
    setState({...state, field: newField})
  }

  useEffect(() => {
    console.log(`useEffect ${density}`)
    changeValue(getMeasure(state))
  }, [density])

  return <form className="powder-panel panel"><ul>
      { SPECS.map(
        ( spec: [string, string[]] ) => {
          const [name, [ title ]] = spec
          return <li key={name}>
            <label>
              { title }
            </label>
            <input type="number" className='measure'
              name={name}
              disabled={name !== field}
              value={getMeasure(state, name)}
              onChange={(event) => changeValue(parseFloat(event.target.value))}
            />
            <input type="radio" className='field-radio'
              name="field"
              checked={name === field}
              onChange={() => { changeField(name) } }
            />
          </li>
        }
      )}
    </ul></form>;
}

export default PowderPanel;