import { Product } from "./product.model"

export const products: Product[] = []


export const addProduct = (data: Product) => {
  data.id = "asfsafg"
  data.createdAt = new Date()
  products.push(data)
}
