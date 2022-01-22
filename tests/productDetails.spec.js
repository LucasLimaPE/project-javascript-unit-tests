const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails é uma função', () => {
    expect(typeof productDetails).toEqual('function');
  });
  it('Verifica se a função `productDetails` retorna um array', () => {
    expect(Array.isArray(productDetails('mango', 'avocado'))).toEqual(true);
  });
  it('Verifica se o retorno da chamada da função `productDetails` contém dois itens dentro.', () => {
    expect(productDetails('mango', 'avocado').length).toEqual(2);
  });
  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('mango', 'avocado')[0]).toEqual('object');
    expect(typeof productDetails('mango', 'avocado')[1]).toEqual('object');
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('mango', 'avocado')[0] !== productDetails('mango', 'avocado')[1])
    .toEqual(true);
  });
  it('Verifica se os dois productIds terminam com 123.', () => {
    expect(productDetails('mango', 'avocado')[0].details.productId === 'mango123').toEqual(true);
    expect(productDetails('mango', 'avocado')[1].details.productId === 'avocado123').toEqual(true);
  });
  // it('Verifica se a função `productDetails é uma função', () => {
    // expect(typeof productDetails).toEqual(function);
  // });
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  
});
