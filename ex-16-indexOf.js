// O método 'indexOf(item, from)' procura o 'item ' informado
// a partir do índice 'from'
// Retorna o índice da primeira ocorrência do item ou '-1' se não encontrar

let languages = ["C#", "Java", "Php", "C#", "JavaScript", "Python"];

let lang = languages.indexOf("C#", 0)
console.log(lang); // 2

lang = languages.indexOf("Java", 1)
console.log(lang); // -1


console.log(languages.indexOf("Python")); // 4