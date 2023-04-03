const createMenu = require("../src/restaurant");

describe("10 - Implemente os casos de teste e a função 'createMenu'", () => {
  let returnedObject;
  let myMenu;

  beforeEach(() => {
    returnedObject = createMenu({ food: {}, drink: {} });
    myMenu = createMenu({
      food: { acaraje: 10, coxinha: 10.5 },
      drink: { agua: 5, refrigetante: 10.5 },
    });
  });

  it("Verifica se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.", () => {
    expect(createMenu()).toHaveProperty("fetchMenu");
    expect(typeof createMenu()).toBe("object");
    expect(typeof createMenu().fetchMenu).toBe("function");
  });

  it("Verifica se ao chamar a função createMenu com o parametro '{food: {}, drink: {}}, a chave fetchMenu, que é uma função, retorna um objeto cujas chaves são somente 'food' e 'drink'", () => {
    expect(Object.keys(returnedObject.fetchMenu()).length).toBe(2);
    expect(returnedObject.fetchMenu()).toHaveProperty("food");
    expect(returnedObject.fetchMenu()).toHaveProperty("drink");
  });

  it("Verifica se ao chamar a função createMenu com o parametro '{food: {}, drink: {}}, a chave fetchMenu, que é uma função, retorna um objeto identico ao que foi passado como parâmetro", () => {
    expect(returnedObject.fetchMenu()).toStrictEqual({ food: {}, drink: {} });
  });

  it("Verifica se o a chave consumption do objeto retornado na chamada da função createMenu retorna um array vazio", () => {
    expect(returnedObject.consumption).toStrictEqual([]);
  });

  it("Verifica se ao chamar uma função associada à chave 'order' no objeto retornado na função createMenu passando uma string 'returnedObject.order('coxinha')' a string é adicionada ao array retornado em 'retunedObject.consumption'", () => {
    expect(returnedObject).toHaveProperty("order");
    returnedObject.order("coxinha");
    expect(returnedObject.consumption).toStrictEqual(["coxinha"]);
  });

  it("Verifica se ao dicionar três pedidos. dentre bebidas e comidas, o array 'returnedObject' contêm os itens pedidos", () => {
    returnedObject.order("coxinha");
    expect(returnedObject.consumption.includes("coxinha")).toBe(true);
    returnedObject.order("suco");
    expect(returnedObject.consumption.includes("suco")).toBe(true);
    returnedObject.order("acarajé");
    expect(returnedObject.consumption.includes("acarajé")).toBe(true);
    expect(returnedObject.consumption).toStrictEqual([
      "coxinha",
      "suco",
      "acarajé",
    ]);
  });

  it("Verifica se ai chamar 'returnedObject.pay()', retorna-se a soma dos preços de tudo que foi pedido conforme registado em returnedObject.", () => {
    expect(myMenu.pay()).toBe(0);
    myMenu.order("coxinha");
    expect(myMenu.pay()).toEqual(10.5);
    myMenu.order("agua");
    expect(myMenu.pay()).toEqual(15.5);
  });
});
