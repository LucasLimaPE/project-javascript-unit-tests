const productDetails = require("../src/productDetails");

// ESCREVA SEUS TESTES ABAIXO:
// Teste se productDetails é uma função.
// Teste se o retorno da função é um array.
// Teste se o array retornado pela função contém dois itens dentro.
// Teste se os dois itens dentro do array retornado pela função são objetos.
// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails é uma função", () => {
    expect(typeof productDetails).toBe('function');
  });

  it("Verifica se a função `productDetails` retorna um array", () => {
    expect(Array.isArray(productDetails("mango", "avocado"))).toBe(true);
  });

  it("Verifica se o retorno da chamada da função `productDetails` contém dois itens dentro.", () => {
    expect(productDetails("mango", "avocado").length).toBe(2);
  });

  it("Verifica se os dois itens dentro do array retornado pela função são objetos.", () => {
    expect(typeof productDetails("mango", "avocado")[0]).toBe("object");
    expect(typeof productDetails("mango", "avocado")[1]).toBe("object");
  });

  it("Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.", () => {
    expect(
      productDetails("mango", "avocado")[0] !==
        productDetails("mango", "avocado")[1]
    ).toBe(true);
  });
  
  it("Verifica se os dois productIds terminam com 123.", () => {
    expect(
      productDetails("mango", "avocado")[0].details.productId === "mango123"
    ).toBe(true);
    expect(
      productDetails("mango", "avocado")[1].details.productId === "avocado123"
    ).toBe(true);
  });
});

