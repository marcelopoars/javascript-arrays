// O método 'find(fn)' nos permite buscar a primeira ocorrência
// de um elementos no array com uma condição específica

// Sintaxe:
/*
let result = arr.find(function (item, index, array) {
  // se 'true', retorna o item e pára a iteração
  // se 'false' return undefined
});

    item é o elemento.
    index é o seu índice.
    array é o próprio array.
 */

let languages = ["C#", "Java", "Php", "C#", "JavaScript", "Python"];
let currentLanguage = "JavaScript";
let hasLanguage = languages.find((item) => item === currentLanguage);
console.log({ hasLanguage });

let users = [
  { id: 1, name: "João" },
  { id: 2, name: "Ana" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Maria" },
  { id: 5, name: "Ana" },
];

let firstUser = users.find((user) => user.id === 1);
console.log(firstUser.name);
console.log(firstUser);
console.log({ firstUser });

let currentUser = users.find(({ name }) => name === "Ana");
console.log({ currentUser });
