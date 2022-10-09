interface INote {
    name: string;
    letter: string;
    inflexion: string;

    note: number;
    degree: number; // ( note % 12 )
    octave: number; // ( note // 12 )
}

interface IChord {
    name: string;
    notes: INote[];
}

export const GRAMS = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
];

export const number2note = (note: number, with_octave: boolean = false) : INote => {
    const octave = Math.floor((note+120)/12)-10;
    const degree = (note+120) % 12;
    const gram  = GRAMS[degree];
    const letter = gram[0];
    const inflexion = gram.substring(1)
    const name = with_octave ? (letter + octave + inflexion) : (letter + inflexion);
    return { name, letter, inflexion, note, octave, degree };
}

const GRAM_REGEX_WITH_OCTAVE = /(?<letter>[a-g])(?<octave>[-]?\d+)(?<inflexion>[#]?)/i
const GRAM_REGEX = /(?<letter>[a-g])(?<inflexion>[#]?)/i
export const name2note = (name: string, with_octave: boolean = false) : INote | undefined => {
    const match = (with_octave ? GRAM_REGEX_WITH_OCTAVE : GRAM_REGEX).exec(name);
    if (match) {
        const letter = match.groups?.letter || 'A';
        const inflexion = match.groups?.inflexion || '';
        const octave = +(match.groups?.octave || 4);
        const gram = (letter+inflexion).toUpperCase();
        const degree = GRAMS.indexOf(gram);
        if (degree < 0) { return undefined }
        const note = (+octave)*12 + degree;
        return { name, letter, inflexion, note, octave, degree };
    }
    return undefined
}
