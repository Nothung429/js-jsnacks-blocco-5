// Crea 10 oggetti che rappresentano una zucchina
// Dividi in due array separati le zucchine che misurano meno o più di 15cm
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

const zucchine = [
    {
        varietà: "varietà 1",
        peso: 100,
        lunghezza: 6
    },
    {
        varietà: "varietà 2",
        peso: 200,
        lunghezza: 16
    },
    {
        varietà: "varietà 3",
        peso: 300,
        lunghezza: 4
    },
    {
        varietà: "varietà 4",
        peso: 400,
        lunghezza: 15
    },
    {
        varietà: "varietà 5",
        peso: 500,
        lunghezza: 8
    },
    {
        varietà: "varietà 6",
        peso: 600,
        lunghezza: 18
    },
    {
        varietà: "varietà 7",
        peso: 700,
        lunghezza: 9
    },
    {
        varietà: "varietà 8",
        peso: 800,
        lunghezza: 19
    },
    {
        varietà: "varietà 9",
        peso: 900,
        lunghezza: 3
    },
    {
        varietà: "varietà 10",
        peso: 1000,
        lunghezza: 13
    }
];

let sommaMax = 0;
let sommaMin = 0;
let zucchine1 = [];
let zucchine2 = [];

for ( let i = 0 ; i < zucchine.length ; i++) {
    if (zucchine[i].lunghezza >= 15) {
        sommaMax += zucchine[i].peso;
        zucchine1.push(zucchine[i]);

    } else {
        sommaMin += zucchine[i].peso;
        zucchine2.push(zucchine[i]);
    }
}

console.log(zucchine);
console.log(sommaMax);
console.log(zucchine1);
console.log(sommaMin);
console.log(zucchine2);