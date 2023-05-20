/* eslint-disable max-len */

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

*/

const circle = (radius) => {
  const PI = 3.14;

  if (!radius || typeof radius !== 'number') { return undefined; }

  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};
const retorno = circle(3);
console.log(retorno);

module.exports = circle;
