/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.
*/

const average = (list) => {
  let soma = 0;
  if (list.length === 0) {
    return undefined;
  }
  for (let index = 0; index < list.length; index += 1) {
    soma += list[index];
    if (typeof list[index] !== 'number') {
      return undefined;
  }
  }
  const media = Math.round(soma / list.length);
  return media;
};
average([1, 2, 3, 4, 5]);

module.exports = average;
