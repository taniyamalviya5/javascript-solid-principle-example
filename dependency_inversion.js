/** Dependency Inversion Principle (DIP):-
 * High level modules depend on abstractions
 * rather than concrete implementations
 * */

/** A store need to pay payment, However, it shouldn't
 * depend directly on Paypal aor Stripe (concrete implementations).
 * Instead, it should depend on an abstraction (interface)
 * */

// Payment Processor Factory Function
const paymentProcessor = (implementation) => ({
  pay: (amount) => implementation.pay(amount),
});

// Paypal implementation
const paypal = paymentProcessor({
  pay: (amount) => console.log(`Paid ${amount} by PayPal.`),
});

// Stripe implementation
const stripe = paymentProcessor({
  pay: (amount) => console.log(`Paid ${amount} by Stripe.`),
});

// Store Factory Function
const store = (controller) => ({
  makePayment: (amount) => controller.pay(amount),
});

// Usage
const DIP = () => {
  console.log("---------------- *********** DIP *********** ----------------");

  const makePaymentByPaypal = store(paypal);
  const makePaymentByStripe = store(stripe);

  makePaymentByPaypal.makePayment(100);
  makePaymentByStripe.makePayment(200);
};

module.exports = DIP;
