/** You have an interface for Product, containing the product's id, name, price, and category. 
You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new 
array containing only the products that match the given criterion and value. Use a generic 
type parameter in the function signature to ensure type safety.
*/

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
};

const matchProds = <U>(arr1: IProduct[], cri: U): IProduct[] =>  {
   const s = arr1.filter(prod => prod.category === cri);
   return s;
}

const products: IProduct[] = [
    { id: 1, name: "Apple", price: 1.99, category: "Fruit" },
    { id: 2, name: "Banana", price: 0.99, category: "Fruit" },
    { id: 3, name: "Carrot", price: 0.49, category: "Vegetable" },
    { id: 4, name: "Broccoli", price: 1.49, category: "Vegetable" },
  ];

console.log(
  matchProds(products, "Vegetable")
 
);
