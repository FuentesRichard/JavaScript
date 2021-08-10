console.log("\n Trabalhando com loops");

const lista = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("\n Destinos Possiveis: ");
console.log(lista)

const maiorIdade = 17;
const estaAcompanhada = "nao";

if (maiorIdade >= 18 || estaAcompanhada == "sim") {
    console.log("Venda autorizada");
    lista.splice(0, 1);
    console.log(lista);
    console.log("Destino: Salvador");
}

else {
    console.log("Não posso vender para menor de idade");
}
// Condicional while
// while (condição){execução}
let contador = 0;
while (contador < 3) {
    console.log(lista[contador]);
    contador = contador + 1;
}

console.log("\n --------------------------")

// Condicional for
// for (variavel = (0); condicao; variavel++/--){execuçao}

let contadorFor = 0;
for (contadorFor = 0; contadorFor < 3; contadorFor++ ) {
    console.log(lista[contadorFor]);
}
