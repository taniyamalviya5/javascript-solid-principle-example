// SRP - single responsibility principle
// A class should have only one reason to change.
/* Let's suppose, A coffee maker who is responsible for making coffee. 
    The coffee maker's role is to focus on the making coffee, 
    ensuring that the milk is of high quality, properly boiled and meets the cafe's
    standards */

const CoffeeMaker = () => {
  const makeCoffee = () => {
    console.log(
      "------------------------ **************** --------------------------"
    );
    console.log("Making high-quality coffee...");
  };
  return { makeCoffee };
};

const InventoryManager = () => {
  const manageInventory = () => {
    console.log("Managing inventory...");
  };
  return { manageInventory };
};

const SupplyOrder = () => {
  const orderSupplies = () => {
    console.log("Ordering supplies...");
  };
  return { orderSupplies };
};

const CustomerService = () => {
  const serveCustomer = () => {
    console.log("Serving customers...");
  };
  return { serveCustomer };
};

const CafeCleaner = () => {
  const cleanCafe = () => {
    console.log("Cleaning the bakery...");
  };
  return { cleanCafe };
};

const SRP = () => {
  const coffeeMaker = CoffeeMaker();
  const inventoryManager = InventoryManager();
  const supplyOrder = SupplyOrder();
  const customerService = CustomerService();
  const cafeCleaner = CafeCleaner();

  coffeeMaker.makeCoffee();
  inventoryManager.manageInventory();
  supplyOrder.orderSupplies();
  customerService.serveCustomer();
  cafeCleaner.cleanCafe();
};

// In the above example:
/*

☕ **COFFEEMAKER**: Responsible **solely for brewing the perfect coffee**. This function ensures the highest quality and standards of coffee without being distracted by other tasks. Think of it as a single-purpose microservice for your caffeine needs! 🚀  

📦 **INVENTORYMANAGER**: Handles **inventory management** like a pro, ensuring the cafe always has the right ingredients and supplies. No more "out-of-stock" errors! 🛒  

🛒 **SUPPLYORDER**: Takes care of **ordering supplies** efficiently, keeping the cafe fully stocked and ready for action. It’s like an auto-scaling feature for your cafe! ⚙️  

👩‍💻 **CUSTOMERSERVICE**: Focuses entirely on **serving customers** and providing exceptional interactions. Think of it as the "user interface" of your cafe—smooth, friendly, and always responsive! 💬  

🧹 **CAFECLEANER**: Dedicated to **maintaining a clean and hygienic environment**. It’s the garbage collector of the cafe world, ensuring everything runs smoothly behind the scenes! 🧼  

---

Each role is designed with the **Single Responsibility Principle (SRP)** in mind, ensuring clarity, maintainability, and scalability—just like good code! 💻✨  

 */

module.exports = SRP;
