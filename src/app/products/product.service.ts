import { Product } from "./product.model"

export const products: Product[] = []


export const addProduct = (data: Product) => {
  // data.id = "asfsafg"               //readonly
  // data.createdAt = new Date()      //readonly
  products.push(data)
}
