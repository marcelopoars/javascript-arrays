// 1 - A lengthpropriedade é atualizada automaticamente quando modificamos o array
// 2 - O tamanho de um array, não é a quantidade de elementos, mas o maior índice numérico + 1

// Exemplo:

let languages = ["JavaScript", "Python"];
console.log("languages:", languages.length); // Retorna 2

let users = [];
users[50] = "Java";
console.log("users:", users.length); // Retorna 51

// Podemos alterar o tamanho do array
let numbers = [1, 2, 3, 4, 5];
console.log("numbers antes:", numbers.length);
console.log("numbers:", numbers);
console.log("numbers:", numbers[4]);

numbers.length = 3;
console.log("numbers depois:", numbers.length);
console.log("numbers:", numbers);
console.log("numbers[4]:", numbers[4]);

numbers.length = 5;
console.log("numbers depois:", numbers.length);
console.log("numbers:", numbers);
console.log("numbers[4]:", numbers[4]);


// A maneira mais simples para limpar um array é: arr.length = 0
numbers.length = 0;
console.log("numbers depois de limpar:", numbers.length);
console.log("numbers:", numbers);
console.log("numbers[4]:", numbers[4]);
