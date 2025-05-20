/**
 * Inverte una stringa.
 * @param {string} str - La stringa da invertire.
 * @returns {string} - La stringa invertita.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Verifica se una stringa è palindroma (ignorando maiuscole/minuscole e spazi).
 * @param {string} str - La stringa da verificare.
 * @returns {boolean} - True se la stringa è palindroma, altrimenti false.
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    return cleaned === reverseString(cleaned);
}

/**
 * Tronca una stringa a una lunghezza massima, aggiungendo "..." se necessario.
 * @param {string} str - La stringa da troncare.
 * @param {number} maxLength - La lunghezza massima.
 * @returns {string} - La stringa troncata.
 */
function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

/**
 * Conta i caratteri di una stringa.
 * @param {string} str - La stringa da analizzare.
 * @returns {Object} - Un oggetto con il conteggio dei caratteri.
 */
function countCharacters(str) {
    const counts = {};
    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

module.exports = {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
};