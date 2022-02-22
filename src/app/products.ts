export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Product Name : Boost',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Product Name : Mobile Phone',
    price: 50000,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Product Name :Laptops',
    price: 40000,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/