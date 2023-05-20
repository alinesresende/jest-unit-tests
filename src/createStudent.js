/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

*/

const createStudent = (nome) => {
  let newObject = {
  name: nome,
  feedback: () => 'Eita pessoa boa!',
  };
  return newObject;
};

module.exports = createStudent;
