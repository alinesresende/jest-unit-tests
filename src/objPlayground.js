/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

*/

const calculator = (number1, number2) => {
  const myObject = {
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  };
  return myObject;
};

const arrayGenerator = (type, object) => {
  try {
    if (type === 'keys') {
      return Object.keys(object);
    }
    if (type === 'values') {
      return Object.values(object);
    }
    if (type === 'entries') {
      return Object.entries(object);
    }
    throw new Error('Type incorrect!');
  } catch (e) {
    return console.log(e.message);
  }
};

module.exports = { calculator, arrayGenerator };
