// Um array é um tipo especial de objeto

// Eles estendem objetos fornecendo métodos especiais para trabalhar com coleções ordenadas de dados e também a lengthpropriedade

let languages = ["JavaScript", "Python"];
console.log(typeof languages);
console.log(languages.length);

// Copiar array por referência
let newArray = languages
console.log(languages === newArray);

// Imprimindo conteúdo do array
console.log(newArray);
console.log({newArray});
console.log({newArray: newArray});

newArray.push('C#')
console.log({newArray});
console.log({languages});


// Tecnicamente podemos fazer isso com Arrays em JavaScript
// Isso é possível porque os arrays são objetos em sua base. Podemos adicionar quaisquer propriedades a eles
newArray[999] = 'Java' // Evite isso
newArray.age = 25 // Evite isso
console.log({newArray});

// *** Pense nos arrays como estruturas especiais para trabalhar com os dados ordenados. Eles fornecem métodos especiais para isso. Os arrays são cuidadosamente ajustados dentro de mecanismos JavaScript para trabalhar com dados ordenados contíguos, use-os desta forma. E se você precisa de chaves arbitrárias, há grandes chances de que você realmente precise de um objeto regular {}.

