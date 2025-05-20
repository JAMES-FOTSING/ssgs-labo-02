const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('./src/stringUtils');

// Otteniamo gli argomenti dalla riga di comando
// process.argv[0] è 'node', process.argv[1] è il percorso dello script
const args = process.argv.slice(2);

if (args.length < 2) {
    console.error("Utilizzo: node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]");
    console.error("Numero funzione:");
    console.error("  1: Inverti Stringa (reverseString)");
    console.error("  2: Controlla Palindromo (isPalindrome)");
    console.error("  3: Tronca Stringa (truncateString) - richiede [lunghezza_massima]");
    console.error("  4: Conta Caratteri (countCharacters)");
    process.exit(1); // Esce con codice di errore
}

const functionChoice = parseInt(args[0], 10);
const mainString = args[1];
let result;

switch (functionChoice) {
    case 1: // reverseString
        result = reverseString(mainString);
        console.log(`Stringa invertita: "${result}"`);
        break;
    case 2: // isPalindrome
        result = isPalindrome(mainString);
        console.log(`La stringa "${mainString}" è palindroma? ${result}`);
        break;
    case 3: // truncateString
        if (args.length < 3) {
            console.error("Per la funzione 'Tronca Stringa' (3), è necessaria una lunghezza massima.");
            console.error("Utilizzo: node index.js 3 <stringa_input> <lunghezza_massima>");
            process.exit(1);
        }
        const maxLength = parseInt(args[2], 10);
        if (isNaN(maxLength) || maxLength < 0) {
            console.error("La lunghezza massima per troncare deve essere un numero positivo.");
            process.exit(1);
        }
        result = truncateString(mainString, maxLength);
        console.log(`Stringa troncata (max ${maxLength}): "${result}"`);
        break;
    case 4: // countCharacters
        result = countCharacters(mainString);
        console.log(`Conteggio caratteri per "${mainString}":`, result);
        break;
    default:
        console.error(`Numero funzione non valido: ${functionChoice}. Scegliere un numero da 1 a 4.`);
        process.exit(1);
}