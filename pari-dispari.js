console.log("PARI E DISPARI");

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

let player_even;
let player_number;
let cpu_number;
let final_number;

if (confirm("Scegli un numero pari?")) {
    player_even = true;
    console.log("Pari");
    alert("Hai scelto pari");
} else {
    player_even = false;
    console.log("Dispari");
    alert("Hai scelto dispari");
}

player_number = Number(prompt("Inserisci un numero da 1 a 5"));
cpu_number = Math.floor(Math.random() * 5 + 1);

console.log(`Player: ${player_number} | CPU: ${cpu_number} = ${player_number + cpu_number}`);
alert(`Player: ${player_number} | CPU: ${cpu_number} = ${player_number + cpu_number}`);

final_number = player_number + cpu_number;

if (final_number % 2 == 0 && player_even == true || final_number % 2 != 0 && player_even == false) {
    console.log("Player wins");
    alert("HAI VINTO");
} else {
    console.log("CPU wins");
    alert("hai perso, VINCE CPU");
}