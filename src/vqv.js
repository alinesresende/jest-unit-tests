/* eslint-disable no-unused-vars */

const vqv = (nome, idade) => {
  if (nome === undefined && idade === undefined) {
    return undefined;
  }
  let result = `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return result;
};
vqv('Tunico', 30);

module.exports = vqv;
