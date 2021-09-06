// O método 'Array.isArray(value)' retorna 'true' se 'value' for array
// e 'false' se não for um array

// Arrays são baseados em objetos
// Portanto typeof, não ajuda a distinguir um objeto simples de um array:
console.log(typeof {}); // object
console.log(typeof []); // object

let numbers = [1, 2, 3, 4, 5];
console.log("isArray:", Array.isArray(numbers));

let user = { id: 1, name: "João" };
console.log("isArray:", Array.isArray(user));
