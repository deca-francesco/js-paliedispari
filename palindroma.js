console.log("PALINDROMA");

/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

// variabili
let user_word = String();

// devo prendere la parola con un prompt
user_word = prompt("Inserisci una parola per vedere se è palindroma");

// METODO 1
console.log("METODO 1");


// richiamo le funzioni
isPalindrome(user_word);

// verifico se la parola inserita è uguale invertendo le lettere
/**
 * given a word returns a message if it is a palindrome
 * @param {string} user_word
*/
function isPalindrome(user_word) {
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
    alert(`${user_word} | ${mirrored_word} 
${msg}`);
}



// Metodo 2
console.log("METODO 2");

isPalindromeArray(user_word);

// un modo per ciclare nell'array
function isPalindromeArray(user_word) {
    let user_word_array = user_word.split("");
    console.log(user_word_array);
 
// ciclo for dove comparo le coppie di lettere partendo dalla prima e dall'ultima. Se sono diverse mi fermo subito,
// altrimenti basta arrivare al centro della parola
// l'indice i parte dall'inizio dell'array mentre l'indice j parte dalla fine dell'array
// arrivano a confrontare la parola fino a metà. Se nel centro avanza una lettera sarà ovviamente uguale letta sia dall'inizio che dalla fine
    for (let i = 0, j = user_word_array.length - 1; i < user_word_array.length / 2, j > user_word_array.length / 2; i++, j--) {
        console.log(`Indice ${i}: "${user_word_array[i]}" | Indice ${j}: "${user_word_array[j]}"`);
        if (user_word_array[i] == user_word_array[j]) {
            continue;
        } else {
            console.log(`La parola: "${user_word}" NON è palindroma`);
            alert(`La parola: "${user_word}" NON è palindroma`)
            return
        }
    }
    console.log(`La parola: "${user_word}" è palindroma`);
    alert(`La parola: "${user_word}" è palindroma`);
}

