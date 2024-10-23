import { faker } from "@faker-js/faker/."
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto"
import { Product } from "./product.model"

export const products: Product[] = []


export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct
}


export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}


export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags = []
  // dto.tags.push()

  return products;
}
