const circle = require("../src/circle");

// ESCREVA SEUS TESTES ABAIXO:
// Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
// Teste se circle retorna um objeto.
// Teste se o objeto retornado tem 3 propriedades.
// Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
// Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
// Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
// Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.

describe("4 - Implemente os casos de teste para a função `circle`", () => {
  it("Verifica se circle retorna undefined, caso o parâmetro passado não seja um número.", () => {
<<<<<<< HEAD
    expect(circle("2")).toBeUndefined();
=======
    expect(circle("2")).toBe(undefined);
>>>>>>> 44a2a04b45b9531612095327a31da34d423213e4
  });

  it("Verifica se circle retorna um objeto.", () => {
    expect(typeof circle(2)).toBe("object");
  });

  it("Verifica se o objeto retornado tem 3 propriedades.", () => {
    expect(Object.keys(circle(1)).length).toBe(3);
  });

  it("Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined.", () => {
<<<<<<< HEAD
    expect(circle()).toBeUndefined();
=======
    expect(circle()).toBe(undefined);
>>>>>>> 44a2a04b45b9531612095327a31da34d423213e4
  });

  it("Verifica se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.", () => {
    expect(circle(2)).toStrictEqual({
      radius: 2,
      area: 12.56,
      circumference: 12.56,
    });
  });

  it("Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados.", () => {
    expect(circle(1)).toStrictEqual({
      radius: 1,
      area: 3.14,
      circumference: 6.28,
    });
  });
<<<<<<< HEAD
=======
  
>>>>>>> 44a2a04b45b9531612095327a31da34d423213e4
  it("Verifica se a função retorna, num objeto, os dados corretos de um círculo de raio 3.", () => {
    expect(circle(3)).toStrictEqual({
      radius: 3,
      area: 28.259999999999998,
      circumference: 18.84,
    });
  });
});
