const pushItems = (item, array) => array.push(item);

const calcTotalPrice = (object, array) => {
  const { food } = object;
  const { drink } = object;
  const filterFood = array.filter((item) => food[item]).map((item) => food[item]);
  const filterDrink = array.filter((item) => drink[item]).map((item) => drink[item]);
  const orderedPrices = [...filterFood, ...filterDrink];
  const totalPrice = orderedPrices.reduce((curr, acc) => acc + curr, 0);
  return totalPrice;
};

const createMenu = (object) => ({
    fetchMenu: () => ({ ...object }),
    consumption: [],
    order(item) { pushItems(item, this.consumption); },
    pay() { return calcTotalPrice(object, this.consumption); },
  }); 

module.exports = createMenu;
