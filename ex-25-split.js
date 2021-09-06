// O método 'split(delimitador)' divide uma string
// em um array de acordo com o seu delimitador

let names = "João, Maria, Pedro, Ana";
console.log({ names });

let arrayNames = names.split(", ");
console.log({ arrayNames }); // [ 'João', 'Maria', 'Pedro', 'Ana' ]

for (let name of arrayNames) {
  console.log({ name });
}

//***************************************/
// O método 'split()' possui um segundo argumento numérico opcional
// - um limite no comprimento do array. Se for fornecido, os elementos extras serão ignorados.
let languages = "C#, Java, Php, C#, JavaScript, Python";

let arrayLanguages = languages.split(", ", 3);

console.log(arrayLanguages); // [ 'C#', 'Java', 'Php' ]

//************************************** */
// Ao chamar o método split('') com um vazio, dividirá a string
// em um array de letras:
let lang = "JavaScript";
console.log(lang.split(""));
