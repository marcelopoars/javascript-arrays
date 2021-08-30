// Arrys

// Declaração

let arr1 = new Array();
let arr2 = []; // mais usado

// Imprimir no console todo array (neste caso, vazio)
console.log(arr1);

let languages = ["JavaScript", "Python", "Php", "Java"];

// Obter elemento do array pelo seu índice
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[3]);
console.log(languages);

// Substituir elemento em determinado índica
languages[3] = "TypeScript";
console.log(languages);

// Adicionar um novo índice e um novo elemento no array
languages[4] = "C#";
console.log(languages);

// Ober o tamanho do array (número de elementos)
console.log("Tamanho do array:", languages.length);

// Um array pode armazenar elementos de qualquer tipo
let myArray = [
  "JavaScript",
  { version: "ES2020" },
  true,
  (arr) => console.log("Tamanho do array:", arr.length),
];

console.log(myArray[0]);
myArray[3](languages);

// Um array, assim como um objeto, pode terminar com 'vírgula'
let users = ["João", "Pedro", "Maria",];
