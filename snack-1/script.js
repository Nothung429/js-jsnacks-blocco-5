// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza
// Calcola quanto pesano tutte le zucchine
const zucchine = [
    {
        varietà: "varietà 1",
        peso: 100,
        lunghezza: 10
    },
    {
        varietà: "varietà 2",
        peso: 200,
        lunghezza: 10
    },
    {
        varietà: "varietà 3",
        peso: 300,
        lunghezza: 10
    },
    {
        varietà: "varietà 4",
        peso: 400,
        lunghezza: 10
    },
    {
        varietà: "varietà 5",
        peso: 500,
        lunghezza: 10
    },
    {
        varietà: "varietà 6",
        peso: 600,
        lunghezza: 10
    },
    {
        varietà: "varietà 7",
        peso: 700,
        lunghezza: 10
    },
    {
        varietà: "varietà 8",
        peso: 800,
        lunghezza: 10
    },
    {
        varietà: "varietà 9",
        peso: 900,
        lunghezza: 10
    },
    {
        varietà: "varietà 10",
        peso: 1000,
        lunghezza: 10
    }
];

let somma = 0;

for ( let i = 0 ; i < zucchine.length ; i++) {
    somma += zucchine[i].peso;
}

console.log(zucchine);
console.log(somma);