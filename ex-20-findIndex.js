// O método 'findIndex' tem a mesma sintaxe do 'find()',
// no entanto retorna o 'índice' da primeira ocorrência do elemento se encontrado
// e retorna '-1' caso não encontre o elemento no array

let users = [
  { id: 1, name: "João" },
  { id: 2, name: "Ana" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Maria" },
];


let currentUser = users.findIndex(({name}) => name === 'Maria')

console.log(currentUser === -1 ? 'Ops! Usuários não encontrado.': users[currentUser].name);