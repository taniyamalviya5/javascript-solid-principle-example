/** Do not force any client ot implement an 
interface which is irrelevant to them */

/** Suppose if you enter a cafe and you like
 * to drink coffee. The waiter in that cafe
 * gave you the menu card which includes fast food items,
 * drinks and coffee */

const createCoffeeMenu = () => {
  return {
    getCoffees() {
      return ["Latte", "Hot Chocolate", "Cappuccino", "Brownie with Ice-Cream"];
    },
  };
};

const createFastFootMenu = () => {
  return {
    getFastFoodItems() {
      return ["Sandwich", "Pasta", "Pizza", "Maggie", "French Fries"];
    },
  };
};

const createDrinkMenu = () => {
  return {
    getDrinkItems() {
      return ["Banana Shake", "Pineapple Juice", "Sprite", "Fruity"];
    },
  };
};

const displayCoffeeMenu = (menu) => {
  console.log("Coffee Menu:");
  menu.getCoffees().forEach((item) => console.log(`- ${item}`));
};

const displayFastFootMenu = (menu) => {
  console.log("Fast Food Menu:");
  menu.getFastFoodItems().forEach((item) => console.log(`- ${item}`));
};

const main = () => {
  console.log("---------------- *********** ISP *********** ----------------");

  const coffeeMenu = createCoffeeMenu();
  const fastFoodMenu = createFastFootMenu();

  displayCoffeeMenu(coffeeMenu);
  displayFastFootMenu(fastFoodMenu);
};

module.exports = main;
