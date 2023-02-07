// CONSEGNA

// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. 
// Se il numero è dispari, lo salviamo in una lista. 
// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 
// Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.

// DICHIARO LE VARIABILI E L'ARRAY
let oddNumList = []
let num = 2
let remainder
// AVVIO IL CICLO WHILE (oddNumList.lenght < 10)
do {
    num = parseInt(prompt('Inserisci un numero'))
    remainder = num % 2
    // PUSHO I NUMERI DISPARI, MAGGIORI DI 0 E NON ANCORA PRESENTI NELL'ARRAY
    if (num > 0 && !isNaN(num) && remainder === 1 && !oddNumList.includes(num)) {
        oddNumList.push(num)
    }
} while (oddNumList.length < 10);

console.log(num, remainder, oddNumList)
// STAMPO I NUMERI IN CONSOLE
for (let i = 0; i < oddNumList.length; i++) {
    let currentNum = oddNumList[i]
    console.log(currentNum)
}

// num < 0 || isNaN(num) || remainder === 0