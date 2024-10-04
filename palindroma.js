console.log("PALINDROMA");

/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

// variabili
let user_word = String();

// devo prendere la parola con un prompt
user_word = prompt("Inserisci una parola per vedere se è palindroma");
isPalindrome(user_word);
// verifico se la parola inserita è uguale invertendo le lettere
/**
 * given a word returns a message if it is a palindrome
 * @param {string} word
 */
function isPalindrome(word) {
    // il messaggio per leggere se la parola è o no palindroma
    let msg;
    // separiamo la parola lettera per lettera in un array, invertiamo l'ordine delle lettere e le riuniamo in una nuova stringa
    let mirrored_word = user_word.split("").reverse().join("");
    // le posso leggere in console
    console.log(`${user_word} | ${mirrored_word}`);
    // la verifica
    if (mirrored_word == user_word) {
        msg = "La tua parola è palindroma"
    } else {
        msg = "La tua parola NON è palindroma"
    }
    // output
    console.log(msg);
    alert(msg);
}