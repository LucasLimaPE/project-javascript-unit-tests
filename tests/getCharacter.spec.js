
const getCharacter = require('../src/getCharacter');

const mockResultArya = {
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.']
}

const mockResultBrienne = {
    name: 'Brienne Tarth',
    class: 'Knight',
    phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
}

const mockResultMelissandre = {
  name: 'Melissandre',
  class: 'Necromancer',
  phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
}

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Testa se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(getCharacter()).toBeUndefined();
  });

  it('Testa se a função retorna o objeto correto para o parâmetro "Arya"', () => {
    expect(getCharacter('Arya')).toStrictEqual(mockResultArya);
  });

  it('Testa se a função retorna o objeto correto para o parâmetro "Brienne"', () => {
    expect(getCharacter('Brienne')).toStrictEqual(mockResultBrienne);
  });

  it('Testa se a função retorna o objeto correto para o parâmetro "Melissandre"', () => {
    expect(getCharacter('Melissandre')).toStrictEqual(mockResultMelissandre);
  });

  it('Testa se os parâmetros não são Case Sensitive', () => {
    expect(getCharacter('arya')).toStrictEqual(mockResultArya);
    expect(getCharacter('MELISSANDRE')).toStrictEqual(mockResultMelissandre);
    expect(getCharacter('bRiEnNe')).toStrictEqual(mockResultBrienne);
  });

  it('Testa se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    expect(getCharacter('Ferdinand')).toBeUndefined();
  });
});
