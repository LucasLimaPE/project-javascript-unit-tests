/* 
Este código foi desenvolvido com ajuda do colega Guilherme Azevedo.
https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADe7FXIBKH8It-KnzlRxwicuRFH97Vi5md4&keywords=guilherme%20azevedo&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=acd2aed1-835c-49b2-9611-ca016cf0639f&sid=)QB
*/

const averageUtilities = {
  checkArraySize(array) {
    return array.length > 0;
  },

  checkItemsAreNumber(array) {
    return array.every((item) => typeof item === 'number');
  },

  sumArrayItems(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  },
};

const average = (array) => (averageUtilities.checkArraySize(array) 
  && averageUtilities.checkItemsAreNumber(array) 
  ? Math.round(averageUtilities.sumArrayItems(array) / array.length) : undefined);

module.exports = average;