import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(["idk", "idk2"]),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid()
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ["as", "asfagf"]
})
