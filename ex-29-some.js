// O método 'arr.some()' testa se ao menos um dos elementos no array
// passa no teste implementado pela função atribuída e retorna um valor 'true' ou 'false'.

let users = ["João", "Maria", "Pedro", "888anaw"];

const hasName = users.some(u => u.includes('Ana'))

console.log(hasName);
