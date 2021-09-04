// O método 'includes(item, from)' procura o 'item' a partir do índice 'from',
// e retorna 'true' se encontrar

let languages = ["C#", "Java", "Php", "C#", "JavaScript", "Python"];

let lang1 = languages.includes("C#"); // true
console.log({ lang1 });

let lang2 = languages.includes("C#", 4);
console.log({ lang2 }); // false

// Se quisermos verificar a inclusão e não quisermos saber o índice exato,
// o método 'includes()' é preferível

// Além disso, uma diferença é que o método 'includes()' lida corretamente NaN,
// ao contrário de indexOf/lastIndexOf:

let newArray = [NaN];
console.log("indexOf:", newArray.indexOf(NaN));
console.log("includes", newArray.includes(NaN));
