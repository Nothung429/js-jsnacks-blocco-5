// Crea un array composto da 10 automobili
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano)
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto

// Infine stampa separatamente i 3 array
const cars = [
    {
        marca: "BMW",
        modello: "A1",
        alimentazione: "benzina"
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "metano"
    },
    {
        marca: "AlfaRomeo",
        modello: "Stelvio",
        alimentazione: "elettrico"
    },
    {
        marca: "Ferrari",
        modello: "Enzo",
        alimentazione: "diesel"
    },
    {
        marca: "Audi",
        modello: "A1",
        alimentazione: "gpl"
    },
    {
        marca: "Mercedes",
        modello: "Sls",
        alimentazione: "benzina"
    },
    {
        marca: "Lamborghini",
        modello: "Aventador",
        alimentazione: "elettrico"
    },
    {
        marca: "Abarth",
        modello: "500",
        alimentazione: "diesel"
    },
    {
        marca: "Bugatti",
        modello: "Veiron",
        alimentazione: "gpl"
    },
    {
        marca: "Aston Martin",
        modello: "Gt",
        alimentazione: "benzina"
    },
];
console.log(cars);

const benzina = cars.filter(
    function (fuel) {
        return fuel.alimentazione === "benzina";
    }
);
console.log(benzina);

const diesel = cars.filter(
    function (fuel) {
        return fuel.alimentazione === "diesel";
    }
);
console.log(diesel);

const altro = cars.filter(
    function (fuel) {
        return (fuel.alimentazione !== "benzina" && fuel.alimentazione !== "diesel");
    }
);
console.log(altro);