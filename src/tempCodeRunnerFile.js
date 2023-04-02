const averageUtilities = {
  checkArraySize(array) {
    return array.length > 0 ? true : undefined;
  },

  checkItemsAreNumber(array) {
    const arrayChecked = array.every((item) => typeof item === 'number');
    return arrayChecked ? true : undefined;
  },

  sumArrayItems(array) {
    return Math.round(array.reduce((acc, curr) => acc + curr, 0));
  },
};

const average = (array) => {
  averageUtilities.checkArraySize(array);
  averageUtilities.checkItemsAreNumber(array);
  return averageUtilities.sumArrayItems(array) / array.length;
};

console.log(average([]));