/*
//synchronous
const processOrder = (customer) => {
  console.log(`processing order for customer 1`);
  var currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log(`order processed for customer 1`);
};
console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
*/

//call stack-lifo
//async
const processOrder = (customer) => {
  console.log(`processing order for customer 1`);
  setTimeout(() => {
    console.log("Cooking completed");
  }, 3000); //web api-- callback queue: fifo->event loop->call stack
  console.log(`order processed for customer`);
};
console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
