console.log(`Trabalhando com listas`);

const lista = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

lista.push(`curitiba`); // Add item
lista.splice(2 , 1); // Remove 3 item(Conta a partir de 0)

console.log("Destinos Possiveis: ");
console.log(lista); //Exibe toda lista
console.log(lista[1]); // Exibe 2nd item