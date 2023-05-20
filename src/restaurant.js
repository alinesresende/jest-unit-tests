/* eslint-disable sonarjs/no-one-iteration-loop */
/* eslint-disable max-len */

// 4: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }.
// { food: {}, drink: {} }

const createMenu = (object) => {
  const newObject = {
    fetchMenu: () => object,
    consumption: [],
    order: (pedido) => {
      if (Object.keys(object.food).includes(pedido) || Object.keys(object.drink).includes(pedido)) {
       newObject.consumption.push(pedido);
       return newObject.consumption;
      }
        return 'Item indisponível';
    },
    pay: () => {
      let soma = 0;
      for (let index = 0; index < newObject.consumption.length; index += 1) {
        const produtoAtual = newObject.consumption[index];
        if (object.food[produtoAtual]) {
          soma += object.food[produtoAtual];
        }
        if (object.drink[produtoAtual]) {
          soma += object.drink[produtoAtual];
        }
      }
      return soma + soma * 0.1;
    },
  };
  return newObject;
};
// Faça o item 5 no arquivo tests/restaurant.spec.js

// 6: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.

// Faça o item 7 no arquivo tests/restaurant.spec.js

// 8: Crie uma função, associada à chave 'order', que, ao receber uma string como parâmetro, adiciona essa string ao array da chave 'consumption'.
// - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
// - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
// Ex: obj.order('coxinha') --> ['coxinha']
// Ex: obj.order('picanha') --> Exibe "Item indisponível"

// Faça os ítens de 9 a 11 no arquivo tests/restaurant.spec.js

// 12: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;
