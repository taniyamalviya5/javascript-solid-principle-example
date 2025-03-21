// open/closed - Software entities (classes, modules, functions etc.)
// should be open for extension. However, closed for modification.
// This means you should be able to add new functionality without changing existing code

// Imagine: you have a class CoffeeOrderProcessor that processes coffee orders
// for a cafe. Initially, the CoffeeOrderProcessor class only supports
// processing orders for Latte. However, you want to extend its
// functionality to also support processing orders for Cappuccino.

// Factory Function for creating Coffee Order Processor
const CoffeeOrderProcessor = () => {
  // object to store coffee type
  const coffeeHandlers = {};

  // register coffee with handler
  const registerCoffeeHandler = (coffeeType, handler) => {
    coffeeHandlers[coffeeType.toLowerCase()] = handler;
  };

  // process the order of coffee
  const processOrder = (coffeeType, orderDetails) => {
    const handler = coffeeHandlers[coffeeType.toLowerCase()];
    if (handler) {
      handler(orderDetails);
    } else {
      console.log("Unsupported Coffee Type");
    }
  };

  return {
    registerCoffeeHandler,
    processOrder,
  };
};

const createCoffeeOrderProcessor = CoffeeOrderProcessor();

// register latte coffee
createCoffeeOrderProcessor.registerCoffeeHandler("Latte", (orderDetails) =>
  console.log(`Processing Latte order: ${orderDetails}`)
);

// register cappuccino coffee
createCoffeeOrderProcessor.registerCoffeeHandler("Cappuccino", (orderDetails) =>
  console.log(`Processing Cappuccino order: ${orderDetails}`)
);

// process to order latter
createCoffeeOrderProcessor.processOrder(
  "Latte",
  "Large, Extra Shot, Almond Milk"
);

// process to order cappuccino
createCoffeeOrderProcessor.processOrder(
  "Cappuccino",
  "Medium, No Sugar, Regular milk"
);

// unsupported coffee
createCoffeeOrderProcessor.processOrder("Espresso", "Single Shot");

// register espresso coffee
createCoffeeOrderProcessor.registerCoffeeHandler("Espresso", (orderDetails) =>
  console.log(`Processing Espresso order: ${orderDetails}`)
);

// process to order cappuccino
createCoffeeOrderProcessor.processOrder(
  "Espresso",
  "Large, Sugar, Regular milk"
);

module.exports = CoffeeOrderProcessor;
