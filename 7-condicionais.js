console.log(`Trabalhando com condicionais`);

const lista = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos Possiveis: ");
console.log(lista)

const maiorIdade = 17;
const estaAcompanhada = "nao";

if (maiorIdade >= 18) {
    console.log("Maior de idade");
    lista.splice(0, 1);
    console.log(lista);
    console.log("Destino: Salvador");
}
else if (estaAcompanhada == "sim") {
    console.log("Está acompanhada");
    lista.splice(0, 1);
    console.log(lista);
    console.log("Destino: Salvador");
}
else {
    console.log("Não posso vender para menor de idade");
}