const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
    test('dovrebbe invertire una stringa normale', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('dovrebbe restituire una stringa vuota se l\'input è vuoto', () => {
        expect(reverseString('')).toBe('');
    });

    test('dovrebbe gestire una stringa con un solo carattere', () => {
        expect(reverseString('a')).toBe('a');
    });
});

describe('isPalindrome', () => {
    test('dovrebbe restituire true per una stringa palindroma', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('dovrebbe restituire true per una stringa palindroma ignorando maiuscole e spazi', () => {
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('dovrebbe restituire false per una stringa non palindroma', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('dovrebbe restituire true per una stringa vuota', () => {
        expect(isPalindrome('')).toBe(true);
    });
});

describe('truncateString', () => {
    test('dovrebbe troncare una stringa più lunga della lunghezza massima', () => {
        expect(truncateString('hello world', 5)).toBe('hello...');
    });

    test('dovrebbe restituire la stringa originale se è più corta o uguale alla lunghezza massima', () => {
        expect(truncateString('hello', 5)).toBe('hello');
        expect(truncateString('hi', 5)).toBe('hi');
    });

    test('dovrebbe gestire una lunghezza massima di 0', () => {
        expect(truncateString('hello', 0)).toBe('...');
    });

    test('dovrebbe gestire una stringa vuota', () => {
        expect(truncateString('', 5)).toBe('');
    });
});

describe('countCharacters', () => {
    test('dovrebbe contare correttamente i caratteri in una stringa', () => {
        expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });

    test('dovrebbe restituire un oggetto vuoto per una stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('dovrebbe gestire caratteri ripetuti e spazi', () => {
        expect(countCharacters('aabb cc')).toEqual({ a: 2, b: 2, ' ': 1, c: 2 });
    });

    test('dovrebbe essere case-sensitive', () => {
        expect(countCharacters('Aa')).toEqual({ A: 1, a: 1 });
    });
});