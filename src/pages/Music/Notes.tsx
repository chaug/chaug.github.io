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

export const note2string = (note: number, with_octave: boolean = false) : string => {
    const octave = Math.floor((note+120)/12)-10;
    const degree = (note+120) % 12;
    const gram  = GRAMS[degree];
    const letter = gram[0];
    const inflexion = gram.substring(1)
    return with_octave ? (letter + octave + inflexion) : (letter + inflexion);
}

const GRAM_REGEX_WITH_OCTAVE = /(?<letter>[a-g])(?<octave>[-]?\d+)(?<inflexion>[#]?)/i
const GRAM_REGEX = /(?<letter>[a-g])(?<inflexion>[#]?)/i
export const string2note = (s: string, with_octave: boolean = false, keep: number = 48) : number => {
    const match = (with_octave ? GRAM_REGEX_WITH_OCTAVE : GRAM_REGEX).exec(s);
    if (match) {
        const letter = match.groups?.letter || 'A';
        const inflexion = match.groups?.inflexion || '';
        const octave = +(match.groups?.octave || 4);
        const gram = (letter+inflexion).toUpperCase();
        const degree = GRAMS.indexOf(gram);
        if (degree < 0) { return keep}
        const note = (+octave)*12 + degree;
        return note;
    }
    return keep
}
