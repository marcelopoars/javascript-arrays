// O método 'reduceRight()' faz o mesmo que o 'reduce()'
// só que da 'direita' para a 'esquerda'

let numbers = [ 1, 2, 3, 4];

let sum = numbers.reduceRight(function (accumulator, currentValue) {
  console.log({ accumulator });
  console.log({ currentValue });
  return accumulator + currentValue;
});

console.log({sum});
