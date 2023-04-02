/* 
Este código foi desenvolvido com ajuda do colega Guilherme Azevedo.
https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADe7FXIBKH8It-KnzlRxwicuRFH97Vi5md4&keywords=guilherme%20azevedo&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=acd2aed1-835c-49b2-9611-ca016cf0639f&sid=)QB
*/

const average = (array) => {
  let soma = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    } 
      soma += array[index]; 
}
  return Math.round(soma / array.length);
};

module.exports = average;
