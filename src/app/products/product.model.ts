import { category } from "../categories/category.model"

export type Sizes = "S" | "M" | "L" | "XL"
export interface Product {
  id: string | number
  title: string
  createdAt: Date                   //type no can extend
  stock: number
  size?: Sizes
  category: category
}
