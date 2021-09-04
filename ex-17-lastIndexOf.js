// O método 'lastIndexOf(item, from)' procura o 'item ' informado
// a partir do índice 'from' (da direita para a esquerda)
// Retorna o índice da primeira ocorrência do item ou '-1' se não encontrar

let languages = ["C#", "Java", "Php", "C#", "JavaScript", "Python"];

let lang = languages.lastIndexOf("C#", 4)
console.log(lang); // 2

lang = languages.lastIndexOf("Php", 0)
console.log(lang); // -1
