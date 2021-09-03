// O método 'lastIndexOf(item, from)' procura o 'item ' informado
// a partir do índice 'from' (da direita para a esquerda)
// Retorna o índice do item ou '-1' se não encontrar

let languages = ["Java", "Php", "C#", "JavaScript", "Python"];

let lang = languages.lastIndexOf("C#", 3)
console.log(lang); // 2

lang = languages.lastIndexOf("Php", 0)
console.log(lang); // -1