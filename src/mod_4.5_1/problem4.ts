/**
 * Suppose you have an array of tuples, where each tuple represents
 * a product and contains the product name, price, and quantity.
 * Write a TypeScript function that calculates the total cost of all the
 * products in the array, using a generic type for the tuple and a type alias for the array.
 */

type ProductType = [string, number, number];
type ProductArr = Array<ProductType>;

const calculateTotalCost = (productArr: ProductArr): number => {
  let totalCost: number = 0;
  for (const [, price, quantity] of productArr) {
    totalCost += price * quantity;
  }
  return totalCost;
};

const productsArr: ProductArr = [
  ["Apple", 5, 10],
  ["Banana", 10, 20],
  ["Orange", 5, 5],
  ["Pineapple", 25, 2],
];

const totalCost = calculateTotalCost(productsArr);
console.log(`The total cost of all products is: ${totalCost}`);
