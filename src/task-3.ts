const usernames: string[] = ['Alex', 'Anna', 'John'];

const ratings: number[] = [5, 4, 3];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
  },
  {
    id: 2,
    name: 'Phone',
    price: 800,
  },
];

console.log(usernames, ratings, products);
