console.log("\n Trabalhando com operadores logicos");

const lista = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos Possiveis: ");
console.log(lista)

const compradorIdade = 17;
const estaAcompanhada = "nao";

if (compradorIdade >= 18 || estaAcompanhada == "sim") {
    console.log("Venda autorizada");
    lista.splice(0, 1);
    console.log(lista);
    console.log("Destino: Salvador");
}

else {
    console.log("Não posso vender para menor de idade");
}

console.log("\n --------------------");

if (compradorIdade >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    lista.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}